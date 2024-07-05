import React from "react";
import { deleteDoc, doc, } from 'firebase/firestore';
import { db } from "../firebase";
import { useDispatch, } from "react-redux";

import { deletevenue } from "../StoreRedux/venueSlice";
import { deleteadmin } from "../StoreRedux/adminSlice";
import toast from "react-hot-toast";

const DeleteModal = (props) => {
  console.log("aya")
  const dispatch = useDispatch();
  const { setloading, delId, setshowModal } = props;

  const handleDeleteClick = async () => {

    try {
      console.log("came")
      if (props.whatdelete === "vanue") {
        setloading(true);
        try {
          // Construct a reference to the document you want to delete
          const venueRef = doc(db, 'venues', delId);

          // Delete the document
          await deleteDoc(venueRef);
          console.log('Venue deleted successfully');
          dispatch(deletevenue(delId))
        } catch (error) {

          setloading(false);
          console.error('Error deleting venue: ', error);
        }
      }
      if (props.whatdelete === "admin") {
        setloading(true);
        console.log(delId)
        try {
          // Construct a reference to the document you want to delete
          const adminRef = doc(db, 'admins', delId);

          // Delete the document
          await deleteDoc(adminRef);
          console.log('admin deleted successfully');
          dispatch(deleteadmin(delId))
        } catch (error) {

          setloading(false);
          console.error('Error deleting venue: ', error);
        }
      }
      // try {
      //   // Construct a reference to the document you want to delete
      //   const venueRef = doc(db, 'venues', delId);
      //   const venueDoc = await getDoc(venueRef);

      //   if (venueDoc.exists()) {
      //     const venueData = venueDoc.data();

      //     // Get the cover image URL and other image URLs
      //     const { cover_image, images } = venueData;

      //     // Delete the images from storage
      //     const deleteImage = async (imageUrl) => {
      //       const imageRef = ref(firebaseStorage, imageUrl);
      //       await deleteObject(imageRef);
      //     };

      //     // Delete cover image
      //     await deleteImage(cover_image);

      //     // Delete other images
      //     await Promise.all(images.map(imageUrl => deleteImage(imageUrl)));

      //     // Delete the document
      //     await deleteDoc(venueRef);
      //     console.log('Venue and associated images deleted successfully');
      //     dispatch(deletevenue(delId));
      //   } else {
      //     console.error('No such document!');
      //   }
      // } catch (error) {
      //   setloading(false);
      //   console.error('Error deleting venue: ', error);
      // }


      setloading(false);
      setshowModal(false)
    } catch (error) {
      setshowModal(false)

      setloading(false);
      console.log(error)
      toast.error("Failed to delete")
      // toast.error(error.response.data.message)
    }
  };


  return (
    <>

      {props.showModal && (
        <div className="fixed inset-0 z-10 flex items-center justify-center enter:ease-out duration-300">
          <div className="bg-white border rounded-lg shadow max-w-sm">
            <div className="flex justify-end p-2">
              <button
                type="button"
                onClick={() => setshowModal(false)}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="p-6 pt-0 text-center">
              <svg
                className="w-20 h-20 text-red-600 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <h3 className="text-xl font-normal text-gray-500 mt-5 mb-6">
                Are you sure you want to delete this {props.whatdelete}? This action can't be
                Undo.
              </h3>
              <button
                onClick={handleDeleteClick}
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2"
              >
                Yes, I'm sure
              </button>
              <button
                onClick={() => setshowModal(false)}
                className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center"
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteModal;
