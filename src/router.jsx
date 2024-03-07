// router.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import CharaterPage from "./pages/CharacterPage";
import LocationPage from "./pages/LocationPage";
import EpisodePage from "./pages/EpisodePage";
import ErrorPage from "./pages/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage/>,
      },
      {
        path: "character/",
        element: <CharaterPage/>
      },
      {
        path: "location/",
        element: <LocationPage/>
      },
      {
        path: "episode/",
        element: <EpisodePage/>
      }
    ],
    errorElement: <ErrorPage/>
    
  },
]);

export default router;