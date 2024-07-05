// import React, { useEffect, useState } from 'react';

// const ImageModal = ({ images, isOpen, onClose, selectedImageIndex }) => {

//     const [currentIndex, setCurrentIndex] = useState(selectedImageIndex);

//     useEffect(() => {
//         setCurrentIndex(selectedImageIndex);
//     }, [selectedImageIndex]);

//     const handleNext = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     };

//     const handlePrevious = () => {
//         setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//     };

//     if (!isOpen) return null;

//     return (

//         <div className="fixed inset-0  flex items-center justify-center bg-black bg-opacity-50 z-50">
//             <div className="relative bg-white p-4 rounded-md shadow-lg max-w-2xl h-96 w-full">
//                 {/* <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
//                     </svg>

//                 </button> */}
//                 <div className="grid grid-cols-6 w-full h-full">
//                     {/* <button onClick={handlePrevious} className="text-gray-500 col-span-1 hover:text-gray-700">
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
//                         </svg>

//                     </button> */}
//                     <div className='col-span-1 border-red-500 border '>
//                         sds
//                     </div>
//                     <div className='col-span-4 border-red-500 border '>
//                         {/* <img src={images[currentIndex]} alt="venue" className="col-span-4 object-contain w-full h-full" /> */}
//                     </div>
//                     <div className='col-span-1 border-red-500 border '>
//                         lksdlkk98
//                     </div>
//                     {/* <img src={images[currentIndex]} alt="venue" className="col-span-4 object-contain w-full h-full" /> */}
//                     {/* <button onClick={handleNext} className="text-gray-500 col-span-1 hover:text-gray-700">
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
//                         </svg>

//                     </button> */}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ImageModal;
import React from 'react';

const ImageModal = ({ images, isOpen, onClose, selectedImageIndex }) => {
  const [currentIndex, setCurrentIndex] = React.useState(selectedImageIndex);
  console.log(currentIndex)
  React.useEffect(() => {
    setCurrentIndex(selectedImageIndex);
  }, [selectedImageIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (+prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  if (!isOpen) return null;

  return (
    // <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    //   <div className="relative bg-white p-4 rounded-md shadow-lg max-w-2xl w-full h-96">
    //     <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
    //       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    //         <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    //       </svg>
    //     </button>
    //     <div className="grid grid-cols-6 w-full h-full items-center">
    //       <button onClick={handlePrevious} className="text-gray-500 col-span-1  hover:text-gray-700 flex justify-center items-center h-full">
    //         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    //           <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    //         </svg>
    //       </button>
    //       <div className="col-span-4 flex justify-center border  items-center h-full w-full ">

    //         <img src={images[currentIndex]} alt="venue" className="object-contain w-[300px] h-[300px]" />
    //       </div>
    //       <button onClick={handleNext} className="text-gray-500 col-span-1  hover:text-gray-700 flex justify-center items-center h-full">
    //         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    //           <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    //         </svg>
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <>
    </>
  );
};

export default ImageModal;
