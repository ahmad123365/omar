import {createBrowserRouter} from "react-router-dom";
import Main from "../Main";
import Signin from "../signin";
import Redirect from "../Redirect";

const Router = createBrowserRouter([
	{
		path: "/",
		element: <Redirect />,
	},
	{
		path: "paper/diploma/Diploma/NEU-OI-164915",
		element: <Main />,
	},
	{
		path: "/paper/diploma",
		element: <Signin />,
	},
	
  ]);


export default Router