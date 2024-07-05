// import React, { useEffect, useState } from 'react';
// import { useSelector } from "react-redux";
// import { selectvenues } from "../../../StoreRedux/venueSlice";
// import { useParams } from 'react-router-dom';

// const VenueDetail = () => {
//     const { docId } = useParams()
//     const storevenue = useSelector(selectvenues)
//     const [currentVanue, setcurrentVanue] = useState(null)

//     useEffect(() => {
//         const venue = storevenue.find(venue => venue.docId === docId);
//         setcurrentVanue(venue)
//     }, [storevenue, docId])


//     const sortDays = (daysObject) => {
//         const daysOrder = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
//         return Object.entries(daysObject).sort((a, b) => {
//             return daysOrder.indexOf(a[0]) - daysOrder.indexOf(b[0]);
//         });
//     };

//     if (!currentVanue) {
//         return <p>Venue not found</p>;
//     }


//     return (
//         <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
//             <div className=' w-full  flex items-center justify-end'> <span className={` ${currentVanue.isVerifiedbyBuzzin ? " bg-green-400" : " bg-red-500"} px-4 p-1 rounded-md text-white font-bold`}>{currentVanue.isVerifiedbyBuzzin ? "Yes" : "No"}</span></div>
//             {currentVanue.cover_image && <>
//                 <h2 className="text-xl font-semibold text-green-400">Cover Image</h2>
//                 <img src={currentVanue.cover_image} alt={currentVanue.name} className="w-full h-64 object-cover rounded-t-lg" />
//             </>}
//             {currentVanue.cover_image &&
//                 <div className="mt-6">
//                     <h2 className="text-xl font-semibold text-green-400">Logo Image</h2>
//                     <div className="grid grid-cols-2 gap-4 mt-4">
//                         <img src={currentVanue.logo_image} alt={currentVanue.name} className="w-full h-64 object-cover rounded-t-lg" />

//                     </div>
//                 </div>}
//             <div className="p-6">
//                 <h1 className="text-3xl font-bold mb-4 text-center text-blue-400">{currentVanue.name}</h1>
//                 {currentVanue.description && <p className="text-gray-700 mb-4">{currentVanue.description}</p>}
//                 {currentVanue.created_by_Name && <h3 className=' text-blue-500 my-2'><strong>Created By:</strong> {currentVanue.created_by_Name}</h3>}
//                 {currentVanue.docId && <div className='my-2 flex items-center gap-2 '>
//                     <h3 className=' text-blue-500  font-bold'>DocId:</h3>
//                     <span className='text-black underline'>{currentVanue.docId}</span>
//                 </div>
//                 }


//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                         <h2 className="text-xl font-semibold text-green-500">Details</h2>
//                         <ul className="list-disc list-inside">
//                             {/* {currentVanue.vanue_opening && <li><strong>Opening Time:</strong> {currentVanue.vanue_opening}</li>}
//                             {currentVanue.vanue_closing && <li><strong>Closing Time:</strong> {currentVanue.vanue_closing}</li>} */}
//                             {currentVanue.line_id && <li><strong>Line Id:</strong> {currentVanue.line_id}</li>}
//                             {currentVanue.price_per_vist && <li><strong>Price per Visit:</strong> {currentVanue.price_per_vist}</li>}
//                             {currentVanue.stars && <li><strong>Stars:</strong> {currentVanue.stars}</li>}
//                             {currentVanue.website_link && <li><strong>Website:</strong> <a href={currentVanue.website_link} className="text-blue-500">{currentVanue.website_link}</a></li>}
//                             {currentVanue.WhatsApp && <li><strong>WhatsApp Number:</strong> {currentVanue.WhatsApp}</li>}
//                             {currentVanue.contact_number && <li><strong>Contact Number:</strong> {currentVanue.contact_number}</li>}
//                             {currentVanue.secondary_number && <li><strong>Secondary Contact:</strong> {currentVanue.secondary_number}</li>}
//                             {currentVanue.Manager_number && <li><strong>Manager Number:</strong> {currentVanue.Manager_number}</li>}
//                             {currentVanue.contact_person && <li><strong>Contact Person:</strong> {currentVanue.contact_person}</li>}
//                             {currentVanue.email && <li><strong>Email:</strong> <a href={`mailto:${currentVanue.email}`} className="text-blue-500">{currentVanue.email}</a></li>}
//                             {currentVanue.email_manager && <li><strong>Manager Email:</strong> <a href={`mailto:${currentVanue.email_manager}`} className="text-blue-500">{currentVanue.email_manager}</a></li>}
//                             {currentVanue.address && <li><strong>Address:</strong> {currentVanue.address}</li>}
//                             {currentVanue.slogan && <li><strong>Slogan:</strong> {currentVanue.slogan}</li>}
//                             {<li><strong>Friendly Ladies:</strong> {currentVanue.friendly_ladies ? 'Yes' : 'No'}</li>}
//                             {<li><strong>Guest Friendly:</strong> {currentVanue.guest_friendly ? 'Yes' : 'No'}</li>}
//                             {<li><strong>Manager Access:</strong> {currentVanue.manager_access ? 'Yes' : 'No'}</li>}
//                             {<li><strong>Vegan Friendly Access:</strong> {currentVanue.vegan_friendly ? 'Yes' : 'No'}</li>}
//                             {<li><strong>Badge:</strong> {currentVanue.Badge ? 'Yes' : 'No'}</li>}
//                         </ul>
//                     </div>
//                     <div>
//                         <h2 className="text-xl font-semibold text-green-500">Categories</h2>
//                         <ul className="list-disc list-inside">
//                             {currentVanue.venue_type_main && currentVanue.venue_type_main.length > 0 && <li><strong>Venue Type Main:</strong> {currentVanue.venue_type_main.join(', ')}</li>}
//                             {currentVanue.venue_type_second && currentVanue.venue_type_second.length > 0 && <li><strong>Venue Type Secondary:</strong> {currentVanue.venue_type_second.join(', ')}</li>}
//                             {currentVanue.venue_type_third && currentVanue.venue_type_third.length > 0 && <li><strong>Venue Type Third:</strong> {currentVanue.venue_type_third.join(', ')}</li>}
//                             {currentVanue.hotel_type && currentVanue.hotel_type.length > 0 && <li><strong>Hotel Type:</strong> {currentVanue.hotel_type.join(', ')}</li>}
//                             {currentVanue.restaurant_main_categories && currentVanue.restaurant_main_categories.length > 0 && <li><strong>Restaurant Main:</strong> {currentVanue.restaurant_main_categories.join(', ')}</li>}
//                             {currentVanue.restaurant_secondary_categories && currentVanue.restaurant_secondary_categories.length > 0 && <li><strong>Restaurant Secondary:</strong> {currentVanue.restaurant_secondary_categories.join(', ')}</li>}
//                             {currentVanue.restaurant_third_categories && currentVanue.restaurant_third_categories.length > 0 && <li><strong>Restaurant Third:</strong> {currentVanue.restaurant_third_categories.join(', ')}</li>}
//                             {currentVanue.nightlife_main_categories && currentVanue.nightlife_main_categories.length > 0 && <li><strong>Nightlife Main:</strong> {currentVanue.nightlife_main_categories.join(', ')}</li>}
//                             {currentVanue.nightlife_secondary_categories && currentVanue.nightlife_secondary_categories.length > 0 && <li><strong>Nightlife Secondary:</strong> {currentVanue.nightlife_secondary_categories.join(', ')}</li>}

//                             {currentVanue.Adult_Entertainment_categories && currentVanue.Adult_Entertainment_categories.length > 0 && <li><strong>Adult Entertainment Main:</strong> {currentVanue.Adult_Entertainment_categories.join(', ')}</li>}
//                             {currentVanue.Adult_Entertainment_Secondary && currentVanue.Adult_Entertainment_Secondary.length > 0 && <li><strong>Adult Entertainment Secondary:</strong> {currentVanue.Adult_Entertainment_Secondary.join(', ')}</li>}

//                             {currentVanue.experience_categories && currentVanue.experience_categories.length > 0 && <li><strong>Experience:</strong> {currentVanue.experience_categories.join(', ')}</li>}
//                             {currentVanue.event_categories && currentVanue.event_categories.length > 0 && <li><strong>Event:</strong> {currentVanue.event_categories.join(', ')}</li>}
//                             {currentVanue.sportswellness_categories && currentVanue.sportswellness_categories.length > 0 && <li><strong>Sports & Wellness:</strong> {currentVanue.sportswellness_categories.join(', ')}</li>}
//                             {currentVanue.healthcare_categories && currentVanue.healthcare_categories.length > 0 && <li><strong>Healthcare:</strong> {currentVanue.healthcare_categories.join(', ')}</li>}
//                             {currentVanue.Dispensary_categories && currentVanue.Dispensary_categories.length > 0 && <li><strong>Dispensary:</strong> {currentVanue.Dispensary_categories.join(', ')}</li>}
//                             {currentVanue.services_categories && currentVanue.services_categories.length > 0 && <li><strong>Services:</strong> {currentVanue.services_categories.join(', ')}</li>}

//                         </ul>
//                     </div>
//                 </div>
//                 {currentVanue.always_open &&
//                     <div className='mt-6'>
//                         <h2 className="text-xl font-semibold text-green-500">Opening Hours</h2>
//                         <span className='font-medium my-2'>Always Open</span>
//                     </div>
//                 }
//                 {currentVanue.opening_hours && Object.entries(currentVanue.opening_hours).length > 0 &&

//                     <div className="mt-6">
//                         <h2 className="text-xl font-semibold text-green-500">Opening Hours</h2>
//                         <ul className="list-disc list-inside">
//                             {sortDays(currentVanue.opening_hours).map(([day, { open, close }]) => (
//                                 open && close && (
//                                     <li key={day}>
//                                         <strong>{day}:</strong> {open} - {close}
//                                     </li>
//                                 )
//                             ))}
//                             {/* {Object.entries(currentVanue.opening_hours).map(([day, { open, close, }]) => (
//                                 open && close && (
//                                     <li key={day}><strong>{day}:</strong> {open} - {close}</li>
//                                 )
//                             ))} */}
//                         </ul>
//                     </div>
//                 }
//                 <div className="mt-6">
//                     {(currentVanue.instagram || currentVanue.facebook || currentVanue.twitterX) &&
//                         <h2 className="text-xl font-semibold text-green-500">Social Links</h2>
//                     }
//                     <ul className="list-disc list-inside">
//                         {currentVanue.facebook && <li><strong>Facebook:</strong> <a href={currentVanue.facebook} className="text-blue-500">{currentVanue.facebook}</a></li>}
//                         {currentVanue.instagram && <li><strong>Instagram:</strong> <a href={currentVanue.instagram} className="text-blue-500">{currentVanue.instagram}</a></li>}
//                         {currentVanue.twitterX && <li><strong>Twitter X:</strong> <a href={currentVanue.twitterX} className="text-blue-500">{currentVanue.twitterX}</a></li>}
//                         {currentVanue.Google_Maps_link && <li ><strong>Google Maps Link:</strong> <a
//                             rel="noopener noreferrer"
//                             target='_blank' href={currentVanue.Google_Maps_link}
//                             className="text-blue-500"
//                             style={{
//                                 wordBreak: 'break-all',
//                                 overflowWrap: 'break-word',
//                                 display: 'block', // Ensures the link takes the full width available
//                                 width: '100%' // Ensures the link takes the full width of its container
//                             }}
//                         >{currentVanue.Google_Maps_link}</a></li>}

//                     </ul>
//                 </div>
//                 {currentVanue.images && currentVanue.images.length > 0 &&
//                     <div className="mt-6">
//                         <h2 className="text-xl font-semibold text-green-500">Images</h2>
//                         <div className="grid grid-cols-2 gap-4 mt-4">
//                             {currentVanue.images.map((image, index) => (
//                                 <img key={index} src={image} alt={`Venue ${index + 1}`} className="w-full h-32 object-cover rounded-lg" />
//                             ))}
//                         </div>
//                     </div>}
//             </div>
//         </div>
//     );
// };








// export default VenueDetail;
