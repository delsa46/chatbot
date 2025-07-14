import ChatSidebar from "../sidebar/ChatSidebar";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div className="flex">
      <ChatSidebar />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}