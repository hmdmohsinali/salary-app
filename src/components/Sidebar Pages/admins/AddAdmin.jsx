import React, { useState } from "react";
import { Loader } from "../../Loader/loader";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { AddNewadmin } from "../../../StoreRedux/adminSlice";
import { addAdmin } from "../../adminService";
import toast from "react-hot-toast";


export function Addadmin() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [loading, setloading] = useState(false);
  const Subadminintial = { adminName: "", email: "", password: "", profileImageFile: null, }
  const Subadminerror = { adminName: "", email: "", password: "" }
  const [addadmin, setadmin] = useState(Subadminintial);
  const [errorSub, setErrorSub] = useState(Subadminerror);
 


  const handelChangeInputSub = (e) => {
    const { name, value } = e.target;
    if (value.trim() === "") {
      setErrorSub((prevError) => ({ ...prevError, [name]: `${name} Required` }));
    } else {
      setErrorSub((prevError) => ({ ...prevError, [name]: "" }));
    }
    setadmin((pre) => ({ ...pre, [name]: value }))
  }


  const handelFormSubmitSubadmin = async (e) => {
    try {
      e.preventDefault()


      const hasErrors = Object.values(errorSub).some((err) => err !== "");
      if (hasErrors) {
        toast.info("Invalid Feilds")
        return;
      }
      

      setloading(true)
     
      const newadmin = {
        email: addadmin.email.trim(),
        password: addadmin.password.trim(),
        adminName: addadmin.adminName.trim(),
     
      }
      const { success, adminDoc } = await addAdmin(newadmin)
      if (success) {
  
        toast.success("admin added successfully")
        dispatch(AddNewadmin(adminDoc))
        navigate(`/salary-app/AdminsList`)
      } else {

        toast.error("Failed to add")
      }

      setadmin(Subadminintial)
    } catch (error) {
      toast.error(error)
      console.log(error)
    } finally {
      setloading(false)

    }
  }





  return (
  <>
    {

      <form onSubmit={handelFormSubmitSubadmin} className="my-2">
        <div className="space-y-12">

          <div >
            <h2 className="text-xl  mt-4 font-bold tracking-tight text-gray-900 ">
              Add admin
            </h2>

            <div className="my-4 grid grid-cols-3 gap-x-6 gap-y-2 ">

              <div className="sm:col-span-1">
                <label
                  htmlFor="first-name"
                  className="block text-md font-medium leading-6 text-gray-900"
                >
                  AdminName  <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    onChange={handelChangeInputSub}
                    required
                    type="text"
                    name="adminName"
                    value={addadmin.adminName}
                    className="block w-full p-1 px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                {errorSub.adminName && <p className="text-red-700 text-sm font-normal">
                  {errorSub.adminName}
                </p>}

              </div>


              <div className="col-span-1">
                <label
                  htmlFor="street-address"
                  className="block text-md font-medium leading-6 text-gray-900"
                >
                  Email  <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    required
                    value={addadmin.email}
                    name="email"
                    onChange={handelChangeInputSub}
                    className="block w-full p-1 px-2 border-0 rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                {errorSub.email && <p className="text-red-700 text-sm font-normal">
                  {errorSub.email}
                </p>}
              </div>
              <div className="col-span-1">
                <label
                  htmlFor="street-address"
                  className="block text-md font-medium leading-6 text-gray-900"
                >
                  Password  <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    required
                    value={addadmin.password}
                    name="password"
                    onChange={handelChangeInputSub}
                    className="block w-full p-1 px-2 border-0 rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                {errorSub.password && <p className="text-red-700 text-sm font-normal">
                  {errorSub.password}
                </p>}
              </div>

              {/* <div className="col-span-1">
                <label
                  htmlFor="street-address"
                  className="block text-md font-medium leading-6 text-gray-900"
                >
                  Profile Image  <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    type="file"
                    required

                    name="ProfileImage"
                    onChange={(e) => { setadmin((pre) => ({ ...pre, profileImageFile: e.target.files[0] })) }}
                    className="block w-full p-1 px-2 border-0 rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                {errorSub.ProfileImage && <p className="text-red-700 text-sm font-normal">
                  {errorSub.ProfileImage}
                </p>}
              </div> */}


            </div>


          </div>
        </div>
        <div className="mt-6 flex items-center justify-between gap-x-6">


          <button
            type="submit"
            className={`rounded-md mr-3 cursor-pointer bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600`}
          >
            Add  Admin
          </button>
        </div>
      </form >
    }




    <Loader loading={loading} />
  </>
  );
};

