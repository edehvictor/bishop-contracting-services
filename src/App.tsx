import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Environment from "./pages/Environment";
import Demolition from "./pages/Demolition";
import Company from "./pages/Company";
import Transportation from "./pages/Transportation";
import ContactPage from "./pages/Contact";
import { Toaster } from "react-hot-toast";
import JobPage from "./pages/JobPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/environment",
    element: <Environment />,
  },
  {
    path: "/demolition",
    element: <Demolition />,
  },
  {
    path: "/about",
    element: <Company />,
  },
  {
    path: "/transportation",
    element: <Transportation />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/careers",
    element: <JobPage />,
  },
]);

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} gutter={8} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
