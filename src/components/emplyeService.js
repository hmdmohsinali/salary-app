import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDocs, collection, query, where } from 'firebase/firestore';
import toast from 'react-hot-toast';

const createEmployee = async (email, password, employeeName) => {
  try {
    // Check if the employee name already exists
    const q = query(collection(db, 'employees'), where('employeeName', '==', employeeName));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      toast.error("Employee name already exists");
      return;
    }

    // Create a new user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Store additional user details in Firestore
    await setDoc(doc(db, 'employees', user.uid), {
      email: user.email,
      employeeName,
      employeeId: user.uid
    });

    toast.success("Employee Created Successfully");
    console.log('User created successfully and slips collection created:', user);
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      toast.error("Email already in use");
    } else {
      toast.error("Error creating user: " + error.message);
    }
    console.error(error.message);
  }
};

export default createEmployee;
