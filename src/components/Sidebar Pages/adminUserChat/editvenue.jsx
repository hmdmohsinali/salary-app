import React, { useState, useEffect } from "react";
// import MyComponent from "../map3"
import axios from "axios";
import { Loader } from "../../Loader/loader";
import { useDispatch, useSelector, } from "react-redux";
import { toast } from "react-toastify";
// import { serverUrl } from "../../../config";
import { useNavigate, useParams } from "react-router-dom";
import { selectvenues, updatevenues } from "../../../StoreRedux/venuesSlice";


export function Editvenue() {
    const storestorevenue = useSelector(selectvenues)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { Eid } = useParams()
    const [loading, setloading] = useState(false);
    const venueintial = { venueDate: "", venueStartTime: "", venueEndTime: "", venueTitle: "" }
    const venueerror = { venueDate: "", venueStartTime: "", venueEndTime: "", venueTitle: "" }
    const [addvenue, setvenue] = useState(venueintial);
    const [error, setError] = useState(venueerror);


    useEffect(() => {
        const currentAnc = storestorevenue.find((anc) => anc.uid.toString() === Eid)
        setvenue(currentAnc)
    }, [storestorevenue, Eid])


    const handelChangeInput = (e) => {
        const { name, value } = e.target;
        if (value.trim() === "") {
            setError((prevError) => ({ ...prevError, [name]: `${name} Required` }));
        } else {
            setError((prevError) => ({ ...prevError, [name]: "" }));
        }
        setvenue((pre) => ({ ...pre, [name]: value }))
    }


    const handelFormmitvenue = async (e) => {
        try {
            e.prvenueDefault()
            const hasErrors = Object.values(error).some((err) => err !== "");
            if (hasErrors) {
                toast.info("Invalid Feilds")
                return;
            }


            const response = await axios.put(`https://csm-connect-adminpanel.vercel.app/api/venues/edit_venue/${Eid}`, addvenue)
            if (response && response.status === 200) {
                setloading(false)
                dispatch(updatevenues(response.data.venue))

                toast.success(response.data.message)
                navigate(`/Admin/venues`)

            }
            setvenue(venueintial)
        } catch (error) {
            setloading(false)
            console.log(error.response)
            if (error.response) {
                toast.error(error.response.data.message)
            } else {
                toast.error(`failed to Update  venue`)
            }
        }
    }



    return (<>


        {/* add  venue */}
        {

            <form onSubmit={handelFormmitvenue} className="my-2">
                <div className="space-y-12">

                    <div >
                        <h2 className="text-xl  mt-4 font-bold tracking-tight text-gray-900 ">
                            Edit venue
                        </h2>

                        <div className="my-4 grid grid-cols-3 gap-x-6 gap-y-2 ">


                            <div className="col-span-1">
                                <label
                                    htmlFor="street-address"
                                    className="block text-md font-medium leading-6 text-gray-900"
                                >
                                    venue Title
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        required
                                        value={addvenue.venueTitle}
                                        name="venueTitle"
                                        onChange={handelChangeInput}
                                        className="block w-full p-1 px-2 border-0 rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>

                            </div>

                            <div className="sm:col-span-1">
                                <label
                                    htmlFor="first-name"
                                    className="block text-md font-medium leading-6 text-gray-900"
                                >
                                    venue Date  <span className="text-red-500">*</span>
                                </label>
                                <div className="mt-2">
                                    <input
                                        onChange={handelChangeInput}
                                        required
                                        type="date"
                                        name="venueDate"
                                        value={addvenue.venueDate}
                                        className="block w-full p-1 px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                                {error.venueDate && <p className="text-red-700 text-sm font-normal">
                                    {error.venueDate}
                                </p>}

                            </div>
                            <div className="sm:col-span-1">
                                <label
                                    htmlFor="first-name"
                                    className="block text-md font-medium leading-6 text-gray-900"
                                >
                                    venue StartTime  <span className="text-red-500">*</span>
                                </label>
                                <div className="mt-2">
                                    <input
                                        onChange={handelChangeInput}
                                        required
                                        type="time"
                                        name="venueStartTime"
                                        value={addvenue.venueStartTime}
                                        className="block w-full p-1 px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                                {error.venueStartTime && <p className="text-red-700 text-sm font-normal">
                                    {error.venueStartTime}
                                </p>}

                            </div>
                            <div className="sm:col-span-1">
                                <label
                                    htmlFor="first-name"
                                    className="block text-md font-medium leading-6 text-gray-900"
                                >
                                    venue EndTime  <span className="text-red-500">*</span>
                                </label>
                                <div className="mt-2">
                                    <input
                                        onChange={handelChangeInput}
                                        required
                                        type="time"
                                        name="venueEndTime"
                                        value={addvenue.venueEndTime}
                                        className="block w-full p-1 px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                                {error.venueEndTime && <p className="text-red-700 text-sm font-normal">
                                    {error.venueEndTime}
                                </p>}

                            </div>




                        </div>

                    </div>
                </div>
                <div className="mt-6 flex items-center justify-between gap-x-6">


                    <button
                        type="mit"
                        className={`rounded-md mr-3 cursor-pointer bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600`}
                    >
                        Add  venue
                    </button>
                </div>
            </form >
        }




        <Loader loading={loading} />
    </>
    );
};

