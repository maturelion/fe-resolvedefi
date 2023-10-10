import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Wallets from "./pages/Wallets/Wallets";

const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <Home />,
  },
  {
    path: "wallets",
    element: <Wallets />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
