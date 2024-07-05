import React, { useState } from 'react';
import { Loader } from '../Loader/loader';
import { auth, db } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDocs, collection, query, where } from 'firebase/firestore';
import toast from 'react-hot-toast';

const Employee = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await createEmployee(email, password, employeeName);
    setLoading(false);
  };

  const createEmployee = async (email, password, employeeName) => {
    try {
      const q = query(collection(db, 'employees'), where('employeeName', '==', employeeName));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        toast.error("Employee name already exists");
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, 'employees', user.uid), {
        email: user.email,
        employeeName,
        employeeId: user.uid
      });

      toast.success("Employee Created Successfully");
      console.log('User created successfully and slips collection created:', user);

      // Reset fields on success
      setEmail('');
      setPassword('');
      setEmployeeName('');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        toast.error("Email already in use");
      } else {
        toast.error("Error creating user: " + error.message);
      }
      console.error(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-white shadow-md rounded-lg">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-gray-700 font-semibold">
              Email*:
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-2 text-gray-700 font-semibold">
              Password*:
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter password"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="employeeName" className="mb-2 text-gray-700 font-semibold">
              Employee Name*:
            </label>
            <input
              id="employeeName"
              type="text"
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter employee name"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition duration-200 text-lg font-semibold"
        >
          Add Employee
        </button>
      </form>
      <Loader loading={loading} />
    </div>
  );
};

export default Employee;
