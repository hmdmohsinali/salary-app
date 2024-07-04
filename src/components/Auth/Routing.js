// import { Navigate } from "react-router-dom";
// import { FulllayoutMain } from "./Layout"
// import SignIn from "../authPages/SingIn";
// import Error from "../Error";
// import SignUp from "../authPages/SignUp";
// import { Sidebar } from "../Sidebar";

import { Navigate } from "react-router-dom";
import { FulllayoutMain } from "./Layout";
import SignIn from "../authPages/SingIn";
// import SignUp from "../authPages/SignUp";
import Error from "../Error";
// import WaveComponent from "../WaveComponent";
// export const ThemeRoutes = [

//   {
//     path: "/",
//     element: <FulllayoutMain />,
//     children: [
//       { path: "/",exact:true,  element: <Navigate to="Login" /> },
//       { path: "Login",  exact:true, element: <SignIn /> },
//       { path: "SignUp", element: <SignUp /> },
//       { path: "*", element: <Error /> },
//     ],
//   },
// ];


// routingcallauth provide the functionlity of routes 



export const ThemeRoutes=[ //array of objects auth pages routes:
    {
      path:"/",
      element:<FulllayoutMain />,
      children:[
        {path:"/", exact:true, element:<Navigate to="Login"/>},
        {path:"login", exact:true, element:<SignIn/>},
        // {path:"signup", element:<SignUp />},
        {path:"*", element:<Error />}
      ],
    },
];

