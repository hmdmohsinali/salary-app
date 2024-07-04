import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./sidebar.module.css";
import dashboard from "../assests/dashboard.png";
import { useDispatch } from "react-redux";

import { addAmin } from "../../StoreRedux/currentAdminSlice";
import { toast } from "react-toastify";

export function Sidebar() {
  const location = useLocation();
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const dispatch = useDispatch();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const Handlelogout = () => {
    dispatch(addAmin(null));
    localStorage.removeItem("CSM_77745_ADMIN_KEY_STRING");
    if (window.location.pathname !== "/login") {
      window.location.href = "/login";
    }
    toast.success("Logout Successfully");
  };

  useEffect(() => {
    const handleResize = () => {
      // Check if the window width is less than or equal to 768px (mobile width)
      setIsDrawerOpen(window.innerWidth > 768);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check for window width on component mount
    handleResize();

    // Remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const menuItems = [
    {
      text: "Admins",
      icon: (
        <img
          src={"/software-engineer_6024190.png"}
          alt="main category Icon"
          className="flex-shrink-0 w-6 h-6"
        />
      ),
      submenu: [
        {
          text: "Add Admin",
          icon: (
            <img
              src={"/setting_14722123.png"}
              alt="main category Icon"
              className="flex-shrink-0 w-6 h-6"
            />
          ),
          link: "/salary-app/Addadmins",
        },
        {
          text: "All Admins",
          icon: (
            <img
              src={"/profile_3135715.png"}
              alt="Authentication Icon"
              className="flex-shrink-0 w-6 h-6"
            />
          ),
          link: "/salary-app/AdminsList",
        },
      ],
    },
  ];
  const [dropDownOpen, setDropDownOpen] = useState(menuItems.map(() => false));

  const toggelDropDown = (index) => {
    const updatedState = dropDownOpen;
    updatedState[index] = !updatedState[index];
    setDropDownOpen([...updatedState]);
  };
  return (
    <>
      <nav className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-blue-700 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
        <div className="flex flex-inline justify-between items-center">
          <div className="flex justify-start items-center">
            <button
              aria-label="Toggle sidebar"
              onClick={toggleDrawer}
              className="p-1 mr-1 rounded-lg cursor-pointer md:hidden dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:text-white transform transition-transform duration-200 hover:scale-105 hover:bg-gray-600"
            >
              <svg
                className={`w-6 h-6 text-white ${isDrawerOpen ? "hidden" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                aria-hidden="true"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 24 24"
              >
                <path fillRule="evenodd" d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" clipRule="evenodd"></path>
              </svg>
              <svg
                aria-hidden="true"
                className={`w-6 h-6 ${isDrawerOpen ? "" : "hidden"}`}
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
              <span className="sr-only">Toggle sidebar</span>
            </button>
            <Link
              to="/salary-app/starter"
              className="flex items-center justify-between mr-4"
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Salary Slip App
              </span>
            </Link>
          </div>
          <div className="flex items-center lg:order-2">
            <button
              type="button"
              data-drawer-toggle="drawer-navigation"
              data-drawer-target="drawer-navigation"
              aria-controls="drawer-navigation"
              className="p-2 mr-1 text-gray-500 rounded-lg md:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              onClick={toggleDrawer}
            >
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </div>
      </nav>

      {/* <!-- Sidebar --> */}

      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } border-r border-gray-200 md:translate-x-0 bg-blue-700 dark:border-gray-700`}
        aria-label="Sidenav"
        id="drawer-navigation"
      >
        <div className="overflow-y-auto py-5 px-3 h-full dark:bg-blue-700">
          <ul className="space-y-2 h-96 ">
            <div className={`${style.heightScroll} pt-3 `}>
              <li className="my-2">
                <Link
                  to="/salary-app/starter"
                  className={classNames(
                    location.pathname === "/salary-app/starter"
                      ? "text-black bg-gray-200"
                      : "text-white",
                    " flex items-center p-2 text-base font-medium  rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-200 hover:text-black group "
                  )}
                >
                  <img
                    src={dashboard}
                    alt="Authentication Icon"
                    className="flex-shrink-0 w-6 h-6"
                  />
                  <span className="ml-3">App Analytics</span>
                </Link>
              </li>
              <li className="my-2">
                <Link
                  className={classNames(
                    location.pathname === "/salary-app/meetupmanage"
                      ? "text-black bg-gray-200"
                      : "text-white",
                    " flex items-center p-2 text-base font-medium  rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-200 hover:text-black group "
                  )}
                  to="/salary-app/meetupmanage"
                >
                  <img
                    src={"/v4.png"}
                    alt="Authentication Icon"
                    className="flex-shrink-0 w-6 h-6"
                  />
                  <span className="ml-3">Add Employees</span>
                </Link>
              </li>
              <li className="my-2">
                <Link
                  className={classNames(
                    location.pathname === "/salary-app/usermanagment"
                      ? "text-black bg-gray-200"
                      : "text-white",
                    " flex items-center p-2 text-base font-medium  rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-200 hover:text-black group "
                  )}
                  to="/salary-app/usermanagment"
                >
                  <img
                    src={"/v1.png"}
                    alt="Authentication Icon"
                    className="flex-shrink-0 w-6 h-6"
                  />
                  <span className="ml-3">Employees Managment</span>
                </Link>
              </li>
              <li className="my-2">
                <Link
                  className={classNames(
                    location.pathname === "/salary-app/adminuserchat"
                      ? "text-black bg-gray-200"
                      : "text-white",
                    " flex items-center p-2 text-base font-medium  rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-200 hover:text-black group "
                  )}
                  to="/salary-app/adminuserchat"
                >
                  <img
                    src={"/v2.png"}
                    alt="Authentication Icon"
                    className="flex-shrink-0 w-6 h-6"
                  />
                  <span className="ml-3">Add Slips</span>
                </Link>
              </li>
              <li className="my-2">
                <Link
                  className={classNames(
                    location.pathname === "/salary-app/userchat"
                      ? "text-black bg-gray-200"
                      : "text-white",
                    " flex items-center p-2 text-base font-medium  rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-200 hover:text-black group "
                  )}
                  to="/salary-app/userchat"
                >
                  <img
                    src={"/v3.png"}
                    alt="Authentication Icon"
                    className="flex-shrink-0 w-6 h-6"
                  />
                  <span className="ml-3">Users Chat Monitoring</span>
                </Link>
              </li>

              {menuItems &&
                menuItems.map((item, index) => (
                  <li key={index}>
                    <div
                      onClick={() => {
                        toggelDropDown(index);
                      }}
                      className="flex items-center cursor-pointer p-2 w-full text-base font-medium text-white rounded-lg transition duration-75 group hover:bg-gray-200 hover:text-black"
                    >
                      <span>{item.icon}</span>
                      <span className="flex-1 ml-3 text-left  whitespace-nowrap">
                        {item.text}
                      </span>
                      <svg
                        aria-hidden="true"
                        className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <ul
                      style={{
                        display: dropDownOpen[index] ? "block" : "none",
                      }}
                      className="hidden py-2 space-y-2"
                    >
                      {item.submenu.map((menu, index) => (
                        <li key={index}>
                          <Link
                            to={menu.link}
                            className={classNames(
                              location.pathname === `${menu.link}`
                                ? "text-black bg-gray-200"
                                : "text-white",
                              " flex items-center p-2 text-base font-medium  rounded-lg transition duration-75 hover:bg-gray-100 hover:text-black group "
                            )}
                          >
                            <span>{menu.icon}</span>
                            <span className="flex-1 ml-3 text-left whitespace-nowrap">
                              {menu.text}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
            </div>
          </ul>

          <div
            className="absolute cursor-pointer flex bottom-0 w-full"
            onClick={Handlelogout}
          >
            <div className="inline-flex  px-14 mb-2 left-0  py-2 bottom-0 gap-1 transform text-xl font-semibold font-mono text-white border border-white rounded hover:bg-blue-400 hover:text-black bg-blue-900 focus:outline-none focus:ring">
              <span className="text-md">Log Out</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mt-1"
                width="2em"
                height="1em"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M3 3a1 1 0 0 0-1 1v12a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1m10.293 9.293a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3a1 1 0 1 0-1.414 1.414L14.586 9H7a1 1 0 1 0 0 2h7.586z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
