import React, { useEffect, useState } from 'react';
import { db } from '../../../firebase'; // Adjust the import based on your firebase configuration file
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { MdDeleteForever } from 'react-icons/md'; // Ensure you have react-icons installed
import { Loader } from '../../Loader/loader';
import toast from 'react-hot-toast';

const Users = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'employees'));
        const employeesList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setEmployees(employeesList);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching employees: ', error);
        setLoading(false);
      }
    };
    
    fetchEmployees();
  }, []);

  const handleDeleteClick = (id) => {
    setSelectedEmployeeId(id);
    setShowPopup(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      setLoading(true)
      await deleteDoc(doc(db, 'employees', selectedEmployeeId));
      setEmployees(employees.filter(employee => employee.id !== selectedEmployeeId));

      setLoading(false)
      setShowPopup(false);

      setSelectedEmployeeId(null);
      toast.success("Emplyee Deleted")
    } catch (error) {
      console.error('Error deleting employee: ', error);
    }
  };

  

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Employees List</h1>
      <ul className="space-y-4">
        {employees.map(employee => (
          <li key={employee.id} className="flex justify-between items-center p-4 bg-white shadow rounded">
            <div>
              <p className="font-medium">{employee.employeeName}</p>
              <p className="text-sm text-gray-600">{employee.email}</p>
            </div>
            <MdDeleteForever
              onClick={() => handleDeleteClick(employee.id)}
              className="h-7 w-6 text-red-500 hover:cursor-pointer"
            />
          </li>
        ))}
      </ul>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Confirm Deletion</h2>
            <p className="mb-4">Are you sure you want to delete this user?</p>
            <div className="flex justify-end">
              <button
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded mr-2"
                onClick={() => setShowPopup(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white py-2 px-4 rounded"
                onClick={handleDeleteConfirm}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      <Loader loading={loading}/>
    </div>
  );
};

export default Users;
