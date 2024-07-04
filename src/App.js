import React from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { RoutingcallAuth } from "./components/Auth/RoutingcallAuth";
import { RoutingCallAdmin } from "./components/Admin/RoutingCallAdmin";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import CryptoJS from 'crypto-js';
import { secretEnKey } from "./config";
import { useDispatch, useSelector } from "react-redux";
import { selectAdmin, addAmin } from "./StoreRedux/currentAdminSlice";



function App() {
  const dispatch = useDispatch()
  const storeAdmin = useSelector(selectAdmin)

  
  const decryptUserData = (data) => {
    const decryptedBytes = CryptoJS.AES.decrypt(data, secretEnKey);
    const decryptedData = JSON.parse(decryptedBytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;

  }
  useEffect(() => {
    

    if (!storeAdmin) {
      const storedData = localStorage.getItem('CSM_77745_ADMIN_KEY_STRING');
      if (storedData) {
        console.log("From stored if",storedData)
        const { admin, expiration } = JSON.parse(storedData);
        
        if (expiration > Date.now()) {
          const adminData = decryptUserData(admin);
          dispatch(addAmin(adminData))
          // if (window.location.pathname !== "/Admin") {
          //   window.location.href = "/Admin";
          // }
        } else {
          localStorage.removeItem('CSM_77745_ADMIN_KEY_STRING');
          if (window.location.pathname !== "/login") {
            window.location.href = "/login";
          }
        }
      }
    }
  }, [storeAdmin, dispatch])

  return (
    <Router>
      <div className="App">
        {/* <Sidebar></Sidebar> */}
        <Routes>
          <Route path="/*" element={<RoutingcallAuth />} />
          {storeAdmin && <Route path="/salary-app/*" element={<RoutingCallAdmin />} />}
        </Routes>
        <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={true} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover stacked />

      </div>
    </Router>
  );
}

export default App;
