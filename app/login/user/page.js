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
import IpJu from "@/components/page/IpJu"
import changeSerialCode from "@/hooks/changeSerial"


function page() {
  const serial = getCookie('user_serial');
  

  return (
    <div>
      <IpJu serial={serial}></IpJu>
    </div>
  )
}

export default page