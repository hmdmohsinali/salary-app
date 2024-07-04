import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, collection, addDoc } from 'firebase/firestore';
import {toast} from 'react-toastify';
const createEmployee = async (email, password, employeeName) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Store additional user details in Firestore
    await setDoc(doc(db, 'employees', user.uid), {
      email: user.email,
      employeeName,
      employeeId: user.uid // Ensure correct field name
    });

    // Create an empty 'slips' sub-collection for the new employee by adding a placeholder document
    const slipCollectionRef = collection(db, `employees/${user.uid}/slips`);
    await addDoc(slipCollectionRef, { placeholder: true }); // Add a placeholder document
    toast.success("Employee Created Successfully")
    console.log('User created successfully and slips collection created:', user);
  } catch (error) {
    toast.error("User already exist")
    console.error( error.message);
  }
};

export default createEmployee;
