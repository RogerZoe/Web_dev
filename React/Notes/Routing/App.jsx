import React from "react"; // Imports the React library to use JSX and React components
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Imports routing utilities from react-router-dom for creating and providing routes
import Home from "../../Notes/Routing/components/Home"; // Imports the Home component from the specified path
import About from "../../Notes/Routing/components/About"; // Imports the About component from the specified path
import DashBoard from "../../Notes/Routing/components/DashBoard"; // Imports the DashBoard component from the specified path
import Error from "../../Notes/Routing/components/Error"; // Imports the Error component for handling invalid routes
import Navbar from "../../Notes/Routing/components/Navbar"; // Imports the Navbar component to be used across pages
import Params from "../../Notes/Routing/components/Params"; // Imports the Params component for handling dynamic routes
import Exam from "../../Notes/Routing/components/Exam"; // Imports the Exam component for a nested route
import Courses from "../../Notes/Routing/components/Courses"; // Imports the Courses component for a nested route

const router = createBrowserRouter([ // Creates a browser router instance with an array of route objects
  { // Defines the first route object
    path: "/", // Specifies the root path for this route
    element: ( // Defines the JSX elements to render for this route
      <> // Uses a React Fragment to group multiple elements without adding extra DOM nodes
        <Navbar /> // Renders the Navbar component at the top
        <Home /> // Renders the Home component as the main content
      </> // Closes the Fragment
    ), // Ends the element property
  }, // Ends the first route object
  { // Defines the second route object
    path: "/About", // Specifies the path for the About page
    element: ( // Defines the JSX elements to render for this route
      <> // Uses a React Fragment to group elements
        <Navbar /> // Renders the Navbar component
        <About /> // Renders the About component as the main content
      </> // Closes the Fragment
    ), // Ends the element property
  }, // Ends the second route object
  { // Defines the third route object
    path: "/DashBoard", // Specifies the path for the DashBoard page
    element: ( // Defines the JSX elements to render for this route
      <> // Uses a React Fragment to group elements
        <Navbar /> // Renders the Navbar component
        <DashBoard /> // Renders the DashBoard component as the main content
      </> // Closes the Fragment
    ), // Ends the element property
    children: [ // Defines nested routes for the DashBoard route
      { // Defines the first nested route
        path: "Courses", // Specifies the relative path for the Courses page (full path: /DashBoard/Courses)
        element: <Courses />, // Renders the Courses component when this path is matched
      }, // Ends the first nested route
      { // Defines the second nested route
        path: "Exam", // Specifies the relative path for the Exam page (full path: /DashBoard/Exam)
        element: <Exam />, // Renders the Exam component when this path is matched
      }, // Ends the second nested route
    ], // Ends the children array
  }, // Ends the third route object
  { // Defines the fourth route object
    path: "/student/:id", // Specifies a dynamic path with a parameter 'id'
    element: <Params />, // Renders the Params component, which can access the 'id' parameter
  }, // Ends the fourth route object
  { // Defines the fifth route object
    path: "/*", // Specifies a wildcard path to catch all unmatched routes
    element: <Error />, // Renders the Error component for any undefined routes
  }, // Ends the fifth route object
]); // Ends the createBrowserRouter call

const App = () => { // Defines the main App functional component
  return ( // Returns the JSX to render
    <div className=""> // Renders a div as the root element with an empty className
      <RouterProvider router={router} /> // Provides the router to the app, enabling routing
    </div> // Closes the div
  ); // Ends the return statement
}; // Ends the App component definition

export default App; // Exports the App component as the default export