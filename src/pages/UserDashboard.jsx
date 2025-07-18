import React from "react"
import Header from "@/components/layout/Header"
import Sidebar from "@/components/layout/Sidebar"

const UserDashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="p-6 overflow-y-auto bg-gray-50">
          <h2 className="text-xl font-semibold">User Dashboard</h2>
          {/* Konten tracking atau kartu bisa ditaruh di sini */}
        </main>
      </div>
    </div>
  )
}

export default UserDashboard
