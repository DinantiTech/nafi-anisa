import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/main.page";
import Stories from "../pages/story.page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: '/stories',
    element: <Stories />
  }
]);