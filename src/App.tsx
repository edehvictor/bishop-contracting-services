import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Environment from "./pages/Environment";
import Demolition from "./pages/Demolition";
import Company from "./pages/Company";
import Transportation from "./pages/Transportation";
import ContactPage from "./pages/Contact";

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
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
