import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import { Head } from "./components/Head"; // Changed to consistent import
import { Main } from "./components/Main"; // Ensured consistent naming
import { WatchPage } from "./components/watchpage"; // Updated to start with uppercase

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/watch",
        element: <WatchPage />, // Corrected naming
      },
    ],
  },
]);

export default function App() {
  return (
    <div>
      <Head />
      <RouterProvider router={approuter} />
    </div>
  );
}

/*
 head
 body
 sidebar
 menu
 maincontainer
buttons list
video container
 */
