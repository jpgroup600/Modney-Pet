'use client'
import * as React from "react"
import { useState,useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"
import AdminSidebar from "@/components/custom/adminSidebar"
import AdminHeader from "@/components/custom/adminHeader"
import useAuth from "@/hooks/useAuth"
import { getCookie } from "@/hooks/setCookie"
import axios from "axios"

export default function AdminPanel() {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [sortOrder, setSortOrder] = React.useState("제목")
  const [userInfo,setUserInfo] = React.useState(null);

  useEffect(()=>{
    const user_serial = getCookie("user_serial");
    axios.post("/api/get_user_info",{user_serial:user_serial})
    .then((res)=>{
      setUserInfo(res.data.user[0]);
    })
  },[])

  const petData = [
    { id: 1, title: "국내선 항공기 감아지 탑승기준 안내", date: "2024.08.22" },
    { id: 2, title: "국내선 항공기 감아지 탑승기준 안내", date: "2024.08.22" },
    { id: 3, title: "국내선 항공기 감아지 탑승기준 안내", date: "2024.08.22" },
    { id: 4, title: "국내선 항공기 감아지 탑승기준 안내", date: "2024.08.22" },
    { id: 5, title: "국내선 항공기 감아지 탑승기준 안내", date: "2024.08.22" },
  ]

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <AdminHeader text="모드니펫 멤버스" />
       

        {/* Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8">
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">애견정보</h2>
                  <Button className="bg-yellow-400 text-white hover:bg-yellow-500">
                    + 새글등록
                  </Button>
                </div>

                <h1>준비중입니다..</h1>
                <div>
  {userInfo && (
    <>
      <h1>User ID: {userInfo.user_id}</h1>
      <h1>Role: {userInfo.role}</h1>
      <h1>Serial: {userInfo.serial}</h1>
      <h1>Added Time: {userInfo.added_time}</h1>
      <h1>Created At: {userInfo.created_at}</h1>
      <h1>Description: {userInfo.description}</h1>
      <h1>Detail Info: {userInfo.detail_info}</h1>
      <h1>Product Name: {userInfo.product_name}</h1>
      <h1>Serial Number: {userInfo.serial_number}</h1>
      <h1>Serial Ref: {userInfo.serial_ref}</h1>
      <h1>UID: {userInfo.uid}</h1>
      {/* Add more fields as needed */}
    </>
  )}
</div>
                
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}