/* eslint-disable flowtype/require-valid-file-annotation */
import { Outlet } from "react-router-dom";
import React, { useEffect } from "react";
import { Sidebar } from "../Sidebar Pages/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../firebase";
import { Addadmin, selectadmins } from "../../StoreRedux/adminSlice";
import {
  collection,
  getDocs,
} from "firebase/firestore";


export const AdminLayout = () => {
  const dispatch = useDispatch();
  const storeadmins = useSelector(selectadmins);
  useEffect(() => {
    const getAdminss = async () => {
      try {
        const adminsSnapshot = await getDocs(collection(db, 'admins'));
        const adminsData = adminsSnapshot.docs.map((adminDoc) => ({
          docId: adminDoc.id,
          ...adminDoc.data()
        }));
        dispatch(Addadmin(adminsData));
      } catch (error) {
        console.error("Error fetching Admins:", error);
      }
    };

    if (!storeadmins || storeadmins.length === 0) {
      getAdminss();
    }
  }, []);


  return (
    <>
      <div className="antialiased bg-gray-50 dark:bg-white-600">
        <Sidebar />
        <main className="p-4 md:ml-64 h-auto pt-20">
          <Outlet />
        </main>
      </div>
    </>
  );
};


