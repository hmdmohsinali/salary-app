import React, { useState, useEffect } from 'react';
import { db } from '../../../firebase'; // Import your Firebase Firestore configuration
import { collection, getDocs, addDoc, where, query } from 'firebase/firestore';
import toast from 'react-hot-toast';
import { Loader } from '../../Loader/loader';
import Select from 'react-select';

const AddSlips = () => {
  const [formData, setFormData] = useState({
    emplName: '',
    hrsWorked: 0,
    hryRate: 0,
    wage: 0,
    grossPay: 0,
    tax: 0,
    deductionLoan: 0,
    net1: 0,
    extraTime: 0,
    extraTimeAmount: 0,
    salary: 0,
    location1: '',
    location2: '',
    location3: '',
    location4: '',
    location5: '',
    salesRank: '',
    totalSales: 0,
    commissionRate: 0,
    commissionAmount: 0,
    bonus: 0,
    netPay: 0,
    note: ''
  });

  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEmployees = async () => {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, 'employees'));
      const employeesList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEmployees(employeesList);
      setLoading(false);
    };

    fetchEmployees();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => {
      const updatedFormData = { ...prevFormData, [name]: value };

      const hrsWorked = parseFloat(updatedFormData.hrsWorked) || 0;
      const hryRate = parseFloat(updatedFormData.hryRate) || 0;
      const extraTime = parseFloat(updatedFormData.extraTime) || 0;
      const deductionLoan = parseFloat(updatedFormData.deductionLoan) || 0;
      const totalSales = parseFloat(updatedFormData.totalSales) || 0;
      const commissionRate = parseFloat(updatedFormData.commissionRate) || 0;
      const bonus = parseFloat(updatedFormData.bonus) || 0;

      const wage = hrsWorked * hryRate;
      const extraTimeAmount = extraTime * hryRate;
      const grossPay = wage + extraTimeAmount;
      const tax = grossPay * 0.01;
      const net1 = grossPay - tax - deductionLoan;
      const commissionAmount = totalSales * (commissionRate / 100);
      const salary = net1 + extraTimeAmount;
      const netPay = salary + bonus - commissionAmount;

      return {
        ...updatedFormData,
        wage,
        extraTimeAmount,
        grossPay,
        tax,
        net1,
        salary,
        commissionAmount,
        netPay
      };
    });
  };

  const handleSelectChange = (selectedOption) => {
    handleChange({
      target: {
        name: 'emplName',
        value: selectedOption ? selectedOption.value : ''
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.emplName) {
      toast.error("Select an employee");
      return;
    }

    try {
      const q = query(collection(db, 'employees'), where('employeeName', '==', formData.emplName));
      setLoading(true);
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        toast.error("Employee not found");
        return;
      }

      const employeeDoc = querySnapshot.docs[0]; // Assuming employee names are unique
      const salaryCollectionRef = collection(db, `employees/${employeeDoc.id}/slips`);

      await addDoc(salaryCollectionRef, {
        hrsWorked: formData.hrsWorked,
        hryRate: formData.hryRate,
        wage: formData.wage,
        grossPay: formData.grossPay,
        tax: formData.tax,
        deductionLoan: formData.deductionLoan,
        net1: formData.net1,
        extraTime: formData.extraTime,
        extraTimeAmount: formData.extraTimeAmount,
        salary: formData.salary,
        location1: formData.location1,
        location2: formData.location2,
        location3: formData.location3,
        location4: formData.location4,
        location5: formData.location5,
        salesRank: formData.salesRank,
        totalSales: formData.totalSales,
        commissionRate: formData.commissionRate,
        commissionAmount: formData.commissionAmount,
        bonus: formData.bonus,
        netPay: formData.netPay,
        note: formData.note
      });
      setLoading(false);
      toast.success("Slip Added Successfully");
      setFormData({
        emplName: '',
        hrsWorked: 0,
        hryRate: 0,
        wage: 0,
        grossPay: 0,
        tax: 0,
        deductionLoan: 0,
        net1: 0,
        extraTime: 0,
        extraTimeAmount: 0,
        salary: 0,
        location1: '',
        location2: '',
        location3: '',
        location4: '',
        location5: '',
        salesRank: '',
        totalSales: 0,
        commissionRate: 0,
        commissionAmount: 0,
        bonus: 0,
        netPay: 0,
        note: ''
      });
    } catch (error) {
      toast.error("Error saving slip");
      console.error('Error adding salary slip:', error.message);
    }
  };

  // Transform employees data into the format react-select expects
  const employeeOptions = employees.map(emp => ({
    value: emp.employeeName,
    label: emp.employeeName
  }));

  return (
    <div>
      <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded-lg space-y-4">
        <div className='flex items-center space-x-4'>
          <div className='flex-1'>
            <label className="block font-semibold">EMPL NAME</label>
            <Select
              name="emplName"
              value={employeeOptions.find(option => option.value === formData.emplName)}
              onChange={handleSelectChange}
              options={employeeOptions}
              className="w-full p-2 border rounded "
              classNamePrefix="select"
              placeholder="Select Employee"
            />
          </div>
        <div className='flex-1'>
          <label className="block font-semibold">Hrs. Worked</label>
          <input
            type="number"
            name="hrsWorked"
            value={formData.hrsWorked}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className='flex-1'>
          <label className="block font-semibold">Hry Rate</label>
          <input
            type="number"
            name="hryRate"
            value={formData.hryRate}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
      <div className='flex items-center space-x-4'>
        <div className='flex-1'>
          <label className="block font-semibold">WAGE</label>
          <input
            type="number"
            name="wage"
            value={formData.wage}
            readOnly
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>
        <div className='flex-1'>
          <label className="block font-semibold">Gross pay</label>
          <input
            type="number"
            name="grossPay"
            value={formData.grossPay}
            readOnly
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>
        <div className='flex-1'>
          <label className="block font-semibold">TAX (1%)</label>
          <input
            type="number"
            name="tax"
            value={formData.tax}
            readOnly
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>
      </div>
      <div className='flex items-center space-x-4'>
        <div className='flex-1'>
          <label className="block font-semibold">Deduction LOAN</label>
          <input
            type="number"
            name="deductionLoan"
            value={formData.deductionLoan}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className='flex-1'>
          <label className="block font-semibold">Net 1</label>
          <input
            type="number"
            name="net1"
            value={formData.net1}
            readOnly
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>
        <div className='flex-1'>
          <label className="block font-semibold">Extra Time</label>
          <input
            type="number"
            name="extraTime"
            value={formData.extraTime}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
      <div className='flex items-center space-x-4'>
        <div className='flex-1'>
          <label className="block font-semibold">Extra Time Amount</label>
          <input
            type="number"
            name="extraTimeAmount"
            value={formData.extraTimeAmount}
            readOnly
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div >
        <div className='flex-1'>
          <label className="block font-semibold">Salary</label>
          <input
            type="number"
            name="salary"
            value={formData.salary}
            readOnly
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>
        <div className='flex-1'>
          <label className="block font-semibold">LOCATION-1</label>
          <input
            type="text"
            name="location1"
            value={formData.location1}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
      <div className='flex items-center space-x-4'>
        <div className='flex-1'>
          <label className="block font-semibold">LOCATION 2</label>
          <input
            type="text"
            name="location2"
            value={formData.location2}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className='flex-1'>
          <label className="block font-semibold">LOCATION -3</label>
          <input
            type="text"
            name="location3"
            value={formData.location3}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className='flex-1'>
          <label className="block font-semibold">LOCATION-4</label>
          <input
            type="text"
            name="location4"
            value={formData.location4}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
      <div className='flex items-center space-x-4'>
        <div className='flex-1'>
          <label className="block font-semibold">LOCATION-5</label>
          <input
            type="text"
            name="location5"
            value={formData.location5}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className='flex-1'>
          <label className="block font-semibold">SALES RANK</label>
          <input
            type="text"
            name="salesRank"
            value={formData.salesRank}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className='flex-1'>
          <label className="block font-semibold">Total Sales</label>
          <input
            type="number"
            name="totalSales"
            value={formData.totalSales}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
      <div className='flex items-center space-x-4'>
        <div className='flex-1'>
          <label className="block font-semibold">Commission Rate</label>
          <input
            type="number"
            name="commissionRate"
            value={formData.commissionRate}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className='flex-1'>
          <label className="block font-semibold">Commission Amount</label>
          <input
            type="number"
            name="commissionAmount"
            value={formData.commissionAmount}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className='flex-1'>
          <label className="block font-semibold">Bonus</label>
          <input
            type="number"
            name="bonus"
            value={formData.bonus}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
      <div className='flex items-center space-x-4'>
        <div className='flex-1'>
          <label className="block font-semibold">NET PAY</label>
          <input
            type="number"
            name="netPay"
            value={formData.netPay}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className='flex-1'>
          <label className="block font-semibold">NOTE</label>
          <input
            type="text"
            name="note"
            value={formData.note}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
        >
          Add Slip
        </button>
      </div>
      
    </form>
    <Loader loading={loading}/>
    </div>
  );
};

export default AddSlips;

