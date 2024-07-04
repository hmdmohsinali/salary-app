import React, { useState } from 'react';
import createUser from '../emplyeService'; 
import { Loader } from '../Loader/loader';

const Employee = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [loading,setLoading] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    await createUser(email, password, employeeName);
    setLoading(false)
    setEmail('');
    setPassword('');
    setEmployeeName('');
  };

  return (
    <div>
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-white shadow-md rounded-lg">
  <div className="flex flex-col space-y-4">
    {/* Email Input */}
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

    {/* Password Input */}
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

    {/* Employee Name Input */}
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

  {/* Submit Button */}
  <button
    type="submit"
    className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition duration-200 text-lg font-semibold"
  >
    Add Employee
  </button>
</form>
<Loader loading={loading}/>
</div>
  
   

  );
};

export default Employee;
