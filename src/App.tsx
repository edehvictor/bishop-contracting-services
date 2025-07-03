import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Environment from "./pages/Environment";
import Demolition from "./pages/Demolition";

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
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
