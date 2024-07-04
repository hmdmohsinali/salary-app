import React, { useState } from "react";
import { saveToJSON } from "../createJson/createJson";

import { selectadmins, } from "../../../StoreRedux/adminSlice";
import { useSelector } from "react-redux";
import { Loader } from "../../Loader/loader";
import DeleteModal from "../../DeleteModal";

export const Admins = () => {
  const [delId, setdelId] = useState(null);
  const [showModal, setshowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const storeAlladmins = useSelector(selectadmins);


  return (
    <>
      <div className="min-w-full overflow-x-auto">
        {storeAlladmins && storeAlladmins.length > 0 &&
          <div className="text-right w-full flex items-center justify-end">
            <div className="flex items-center justify-center gap-2">
              <h2 className="font-semibold text-green-600">
                Download Record (json)
              </h2>
              <div className="cursor-pointer" onClick={() => {
                saveToJSON(storeAlladmins, "admins")
              }}>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </div>
            </div>
          </div>
        }
        <div className="flex items-center justify-center ">

          <h2 className="mr-3 font-bold text-2xl text-center mb-4 text-purple-700">All admins</h2>
          <span className="text-white bg-green-500 rounded-2xl px-2 ">{storeAlladmins &&
            storeAlladmins.length}</span>
        </div>

        <div className="grid grid-cols-4 bg-gray-50 text-center">
          <h2 className="px-6 col-span-1 py-3  text-md font-bold  uppercase tracking-wider"            >
            Name
          </h2>
          <h2 className="px-6 col-span-2 py-3  text-md font-bold  uppercase tracking-wider"            >
            Email
          </h2>


          <h2 className="px-6 col-span-1 py-3  text-md font-bold  uppercase tracking-wider"            >
            Actions
          </h2>

        </div>
        <div className="bg-white divide-y my-2  divide-gray-200">
          {storeAlladmins &&
            storeAlladmins.length > 0 ?
            storeAlladmins.map((use, index) => (
              <div key={index} className="px-6 py-4 grid grid-cols-4 text-center">
                {/* to={`/Admin/AdminDetails/${use._id}`}  */}
                <div className="flex items-center justify-between gap-2 text-sm underline font-medium col-span-1  text-blue-500">
                  {/* <img src={use.profileImage} alt="adminimage" className="object-contain object-center w-10 h-10 " /> */}
                  <span>
                    {use.adminName}
                  </span>
                </div>
                <div className="text-sm font-medium col-span-2  text-gray-900">
                  {use.email}
                </div>


                <div className="text-sm font-medium col-span-1 text-gray-900">
                  <button
                    // onClick={async () => {
                    //   await handleDeleteClick(use._id);
                    // }}
                    onClick={() => {
                      setshowModal(true);
                      setdelId(use.docId);

                    }}
                    className="ml-2 text-red-600 hover:text-red-900 text-2xl"
                  >

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>

                  </button>
                </div>

              </div>

            )) :
            (
              <div >
                <p className="p-2 font-semibold">
                  No admin found
                </p>
              </div>
            )

          }
        </div>
      </div>
      <Loader loading={loading} />
      <DeleteModal
        setloading={setLoading}
        showModal={showModal}
        setshowModal={setshowModal}
        delId={delId}
        whatdelete="admin"
      />
    </>
  );
};

