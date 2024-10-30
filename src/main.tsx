import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProfilesPage from "./pages/ProfilesPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./index.css";
import ProfilePage from "./pages/ProfilePage";

const router = createBrowserRouter([
  {
    // This route targets the landing page.
    path: "/",
    element: <HomePage />,
    // By using errorElement, we can define our own error page.
    errorElement: <NotFoundPage />,
  },
  {
    path: "/profiles",
    element: <ProfilesPage />,
    // By using the children element, we are using nested routes. When doing this, the original parent route becomes a layout and it always present. This way we can have a header which is defined in the parent route and all the children will have the header whenever they are visited. We do not have to create separate header for all the children. The parents also have to have an Outlet component. The outlet component is where the children are rendered.
    children: [
      {
        // When you use : before any word. That link becomes a dynamic link and you can go to any link that is /profiles/`anything` and it will render the ProfilePage.
        path: "/profiles/:profileId",
        element: <ProfilePage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

