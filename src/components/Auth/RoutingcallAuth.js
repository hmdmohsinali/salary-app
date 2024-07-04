

import { useRoutes } from "react-router-dom";
import { ThemeRoutes } from "./Routing";
//to enable routing in app globally this component is created
export const RoutingcallAuth =()=>{
    const routing =useRoutes(ThemeRoutes) // ThemeRoutes array of objects of auth pages //
    return <div className="dark">{routing}</div> // function call here
};