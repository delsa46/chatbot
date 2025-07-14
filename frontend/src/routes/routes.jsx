
import {createBrowserRouter} from "react-router";
import { HomePage } from "../pages/HomePage";
import { ChatPage } from "../pages/ChatPage";
import MainLayout from "../components/layout/MainLayout";
 
export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, element: <HomePage /> },
      { path: "chat/:chatId", element: <ChatPage /> },
    ],
  },
  ]);