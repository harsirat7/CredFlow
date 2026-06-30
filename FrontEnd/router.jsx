import { createBrowserRouter } from "react-router-dom";
// Importing UserHomePage
import UserHomePage from "./src/Source/UserHomePage";
// Import Account(Your Account)
import Account from "./src/Source/Account";
// Importing User Account History
import History from "./src/Source/History";
// Importing ManageAssets
import ManageAssets from "./src/Source/ManageAssets";




// Routes
export const router = createBrowserRouter([
    {
        path: "/",
        element: <UserHomePage />
    },
    {
        path: "/account",
        element: <Account />
    },
    {
        path: "/accountHistory",
        element: <History />
    },
    {
        path: "/manageAssets",
        element: <ManageAssets />
    }
]);