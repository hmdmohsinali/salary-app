import { useSelector } from "react-redux";
import { selectUsers } from "../../StoreRedux/UserSlice";
import { Link } from "react-router-dom";
import { selectvenues } from "../../StoreRedux/venueSlice";



const Statistics = () => {
  const storeAllUsers = useSelector(selectUsers);
  const storeavnue = useSelector(selectvenues)
  console.log(storeAllUsers)

  return (
    <div>
      <h2 className="text-3xl font-bold mt-8 text-gray-900 sm:text-4xl">
        Statistics
      </h2>

      <h1 className="text-lg font-bold font-serif">Users</h1>


      <div className="w-full my-2  grid grid-cols-2 gap-3 px-6 ">
        {storeAllUsers &&
          <Link to={"/Admin/users"} className="flex col-span-2 items-center  px-5  py-6 shadow-lg rounded-md bg-slate-300">

            <div className="p-3 rounded-full bg-indigo-600 bg-opacity-75">
              <svg
                className="h-8 w-8 text-white"
                viewBox="0 0 28 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.2 9.08889C18.2 11.5373 16.3196 13.5222 14 13.5222C11.6804 13.5222 9.79999 11.5373 9.79999 9.08889C9.79999 6.64043 11.6804 4.65556 14 4.65556C16.3196 4.65556 18.2 6.64043 18.2 9.08889Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M25.2 12.0444C25.2 13.6768 23.9464 15 22.4 15C20.8536 15 19.6 13.6768 19.6 12.0444C19.6 10.4121 20.8536 9.08889 22.4 9.08889C23.9464 9.08889 25.2 10.4121 25.2 12.0444Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M19.6 22.3889C19.6 19.1243 17.0927 16.4778 14 16.4778C10.9072 16.4778 8.39999 19.1243 8.39999 22.3889V26.8222H19.6V22.3889Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M8.39999 12.0444C8.39999 13.6768 7.14639 15 5.59999 15C4.05359 15 2.79999 13.6768 2.79999 12.0444C2.79999 10.4121 4.05359 9.08889 5.59999 9.08889C7.14639 9.08889 8.39999 10.4121 8.39999 12.0444Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M22.4 26.8222V22.3889C22.4 20.8312 22.0195 19.3671 21.351 18.0949C21.6863 18.0039 22.0378 17.9556 22.4 17.9556C24.7197 17.9556 26.6 19.9404 26.6 22.3889V26.8222H22.4Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M6.64896 18.0949C5.98058 19.3671 5.59999 20.8312 5.59999 22.3889V26.8222H1.39999V22.3889C1.39999 19.9404 3.2804 17.9556 5.59999 17.9556C5.96219 17.9556 6.31367 18.0039 6.64896 18.0949Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>

            <div className="mx-5">
              <h4 className="text-2xl font-semibold text-gray-700">
                {storeAllUsers ? storeAllUsers.length : "0"}
              </h4>
              <div className="text-gray-500">Total Employees</div>
            </div>
          </Link>}

      </div>
      
      {storeavnue && storeavnue.length > 0 && <>
        <h1 className="text-lg font-bold font-serif my-4">All Venues</h1>

        <Link to={"/Admin/Vehicles"} className="w-full  grid grid-cols-1 gap-3 px-6 ">
          <div className="flex col-span-1 items-center px-5  py-6 shadow-sm rounded-md bg-slate-300">

            <div className="p-3 rounded-full bg-indigo-600 bg-opacity-75">

              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
              </svg>


            </div>

            <div className="mx-5">
              <h4 className="text-2xl font-semibold text-gray-700">
                {storeavnue ? storeavnue.length : "0"}
              </h4>
              <div className="text-gray-500">Total Venues</div>
            </div>
          </div>
        </Link>
      </>}




    </div>
  );
};

export default Statistics;
