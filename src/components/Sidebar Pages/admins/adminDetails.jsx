import React, { useState, useEffect } from "react";
import {  useSelector } from "react-redux";
import { selectadmins } from "../../../StoreRedux/adminSlice";
import { useParams, } from "react-router-dom";






export const AdminDetails = () => {
  const storeAlladmins = useSelector(selectadmins);
   const { id } = useParams();
  const [admin, setadmin] = useState();

  useEffect(() => {
    let Currentadmin = storeAlladmins.find((adminObject) => {
      return adminObject._id === id;
    });

    setadmin(Currentadmin)

  }, [id, storeAlladmins]);

 

  
  return (
    <>
      {admin && <div className=" border bg-gray-200 p-6 rounded-lg shadow-lg">

        <p className="flex justify-end items-center">
          <span className={`my-2 ml-4 px-3 py-1 text-sm rounded-full ${admin.status ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}>
            {admin.status ? 'Active' : 'Suspended'}
          </span>
        </p>

        <div className="flex flex-col sm:flex-row">

          <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            {/* w-[150px] h-[150px] */}
            <div className="  inline-flex items-center justify-center bg-gray-200 text-gray-400">
              <img src={admin.profileImage} alt="Profile" className="w-40 h-40 rounded-3xl" />
            </div>

            <div className="flex flex-col items-center text-center justify-center">
              <h2 className="font-medium title-font  text-gray-900 text-lg">{admin.adminName}</h2>
              <div className="w-12 h-1 bg-orange-500 rounded mt-2 mb-4"></div>
            </div>
          </div>
          <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0  sm:text-left">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <p><strong>Email:</strong> <span>{admin.email}</span> </p>
               
              </div>
              <div>
               

              </div>
            </div>
           

          </div>


        </div>
       
      </div >}
      
    </>
  );
};

