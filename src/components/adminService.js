import { db } from "../firebase";
import { collection, addDoc, serverTimestamp, getDocs } from "firebase/firestore";
import bcrypt from "bcryptjs";

export async function addAdmin({ email, password, adminName, }) {
    try {
        if (!email || !password || !adminName) {
            throw new Error("Email, password, and admin name are required.");
        }
        let emailExist = false;
        const adminsSnapshot = await getDocs(collection(db, 'admins'));
        for (const adminDoc of adminsSnapshot.docs) {
            const adminDocData = adminDoc.data();
            if (adminDocData.email === email) {
                emailExist = true
                break;
            }
        }
        if (emailExist) {
            throw new Error("Email already exist")
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const admin = {
            email,
            adminName,
            password: hashedPassword,
            created_at: serverTimestamp(),
            // profileImage
        }
        // const adminRef = doc(collection(db, "admins"));
        // await setDoc(adminRef,admin);

        const docRef = await addDoc(collection(db, 'admins'), admin);
        // console.log('Admin added with ID: ', docRef.id);
        // dispatch(AddNewvenue({ ...venueDataWithTimestamp, docId: docRef.id }))

        // console.log("Admin added successfully");
        return { success: true, adminDoc: { ...admin, docId: docRef.id } }
    } catch (error) {
        console.error("Error adding admin:", error);
        throw error;
    }
}

// Function to authenticate an admin
export async function authenticateAdmin(email, password) {
    try {
        if (!email || !password) {
            throw new Error("Email and password are required.");
        }

        // Query Firestore for admin with the given email
        // const adminSnapshot = await getDoc(doc(db, "admins", email));
        const adminsSnapshot = await getDocs(collection(db, 'admins'));
        let adminData;
        for (const adminDoc of adminsSnapshot.docs) {
            const adminDocData = adminDoc.data();
            if (adminDocData.email === email) {
                adminData = adminDocData;
                break;
            }
        }
        console.log(adminData)
        if (!adminData) {
            console.log("No such admin found!");
            return false;

        }

        // const adminData = adminSnapshot.data();

        // Compare the provided password with the stored hashed password
        const isPasswordValid = await bcrypt.compare(password, adminData.password);

        if (isPasswordValid) {
            console.log("Authentication successful");
            return { success: true, adminData };
        } else {
            console.log("Invalid password");
            return { success: false };
        }
    } catch (error) {
        console.error("Error authenticating admin:", error);
        throw error;
    }
}