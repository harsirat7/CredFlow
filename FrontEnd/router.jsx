import { createBrowserRouter } from "react-router-dom";
// Importing UserHomePage
import UserHomePage from "./src/Source/UserHomePage";
// Import Account(Your Account)
import Account from "./src/Source/Account";




// Routes
export const router = createBrowserRouter([
    {
        path: "/",
        element: <UserHomePage />
    },
    {
        path: "/account",
        element: <Account />
    }
]);