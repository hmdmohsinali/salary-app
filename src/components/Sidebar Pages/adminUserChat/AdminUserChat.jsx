import React, { useState } from 'react';

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded-lg space-y-4">
      <div>
        <label className="block font-semibold">EMPL NAME</label>
        <input
          type="text"
          name="emplName"
          value={formData.emplName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block font-semibold">Hrs. Worked</label>
        <input
          type="number"
          name="hrsWorked"
          value={formData.hrsWorked}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block font-semibold">Hry Rate</label>
        <input
          type="number"
          name="hryRate"
          value={formData.hryRate}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block font-semibold">WAGE</label>
        <input
          type="number"
          name="wage"
          value={formData.wage}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block font-semibold">Gross pay</label>
        <input
          type="number"
          name="grossPay"
          value={formData.grossPay}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block font-semibold">TAX (1%)</label>
        <input
          type="number"
          name="tax"
          value={formData.tax}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block font-semibold">Deduction LOAN</label>
        <input
          type="number"
          name="deductionLoan"
          value={formData.deductionLoan}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block font-semibold">Net 1</label>
        <input
          type="number"
          name="net1"
          value={formData.net1}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block font-semibold">Extra Time</label>
        <input
          type="number"
          name="extraTime"
          value={formData.extraTime}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block font-semibold">Extra Time Amount</label>
        <input
          type="number"
          name="extraTimeAmount"
          value={formData.extraTimeAmount}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block font-semibold">Salary</label>
        <input
          type="number"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block font-semibold">LOCATION-1</label>
        <input
          type="text"
          name="location1"
          value={formData.location1}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block font-semibold">LOCATION 2</label>
        <input
          type="text"
          name="location2"
          value={formData.location2}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block font-semibold">LOCATION -3</label>
        <input
          type="text"
          name="location3"
          value={formData.location3}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block font-semibold">LOCATION-4</label>
        <input
          type="text"
          name="location4"
          value={formData.location4}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block font-semibold">LOCATION-5</label>
        <input
          type="text"
          name="location5"
          value={formData.location5}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block font-semibold">SALES RANK</label>
        <input
          type="text"
          name="salesRank"
          value={formData.salesRank}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block font-semibold">Total Sales</label>
        <input
          type="number"
          name="totalSales"
          value={formData.totalSales}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block font-semibold">Commission Rate</label>
        <input
          type="number"
          name="commissionRate"
          value={formData.commissionRate}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block font-semibold">Commission Amount</label>
        <input
          type="number"
          name="commissionAmount"
          value={formData.commissionAmount}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block font-semibold">Bonus</label>
        <input
          type="number"
          name="bonus"
          value={formData.bonus}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block font-semibold">NET PAY</label>
        <input
          type="number"
          name="netPay"
          value={formData.netPay}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block font-semibold">NOTE</label>
        <input
          type="text"
          name="note"
          value={formData.note}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
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
  );
};

export default AddSlips;
