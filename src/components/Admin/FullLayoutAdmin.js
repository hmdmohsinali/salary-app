/* eslint-disable flowtype/require-valid-file-annotation */
import { Outlet } from "react-router-dom";
import React, { useEffect } from "react";
import { Sidebar } from "../Sidebar Pages/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers, Adduser } from "../../StoreRedux/UserSlice";
import { db } from "../../firebase";
import { Addvenue, selectvenues } from "../../StoreRedux/venueSlice";
import { Addadmin, selectadmins } from "../../StoreRedux/adminSlice";
import {
  collection,
  query,
  orderBy,
  getDocs,
} from "firebase/firestore";


export const AdminLayout = () => {
  const dispatch = useDispatch();
  const storeusers = useSelector(selectUsers);
  const storevanues = useSelector(selectvenues);
  const storeadmins = useSelector(selectadmins);


  useEffect(() => {
    const getUsers = async () => {
      try {

        const usersSnapshot = await getDocs(collection(db, 'employees'));
        // Iterate through each user
        const usersData = usersSnapshot.docs.map((userdoc) => {
          return {
            docId: userdoc.id,
            ...userdoc.data()
          }
        });
        console.log(usersData)
        dispatch(Adduser(usersData))
      } catch (error) {
        console.log(error)
      }

    }
    if (!storeusers || storeusers.length === 0) {
      getUsers()
    }
  }, [storeusers,dispatch])

  useEffect(() => {
    const getVenues = async () => {
      try {
        const venuesSnapshot = await getDocs(query(collection(db, 'venues'), orderBy('created_at')));
        console.log(venuesSnapshot.docs.length)
        const venuesData = venuesSnapshot.docs.map((venueDoc) => ({
          docId: venueDoc.id,
          ...venueDoc.data()
        }));
        //   const userRef = venueData.created_by;
        //   const userDoc = await getDoc(userRef);
        //   const userData = userDoc.data();
        //   return {
        //     ...venueData,
        //     userName: userData ? userData.name : 'Unknown User', // Adjust based on your user field
        //   };
        // }));
        console.log(venuesData.length)
        dispatch(Addvenue(venuesData));
      } catch (error) {
        console.error("Error fetching venues:", error);
      }
    };

    if (!storevanues || storevanues.length === 0) {
      getVenues();
    }
  }, []);

  useEffect(() => {
    const getAdminss = async () => {
      try {
        const adminsSnapshot = await getDocs(collection(db, 'admins'));
        console.log(adminsSnapshot.docs.length)
        const venuesData = adminsSnapshot.docs.map((adminDoc) => ({
          docId: adminDoc.id,
          ...adminDoc.data()
        }));
        //   const userRef = venueData.created_by;
        //   const userDoc = await getDoc(userRef);
        //   const userData = userDoc.data();
        //   return {
        //     ...venueData,
        //     userName: userData ? userData.name : 'Unknown User', // Adjust based on your user field
        //   };
        // }));
        console.log(venuesData.length)
        dispatch(Addadmin(venuesData));
      } catch (error) {
        console.error("Error fetching venues:", error);
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


