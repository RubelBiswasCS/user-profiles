import React, { useEffect } from "react"
import { fetchUsers } from "@/redux/reducers/userReducers"
import { useAppDispatch, useAppSelector } from "@/redux/store"

export default function Users() {
  const dispatch = useAppDispatch()
  const users = useAppSelector((state) => state?.user?.users ?? [])
  const userStatus = useAppSelector((state) => state?.user?.status ?? 'idle')
  
  useEffect(() => {
    if (userStatus === 'idle') {
      dispatch(fetchUsers())
    }
  }, [dispatch, userStatus])

  return (
   <div className='min-h-screen bg-purple-100'>
    Users
   </div>
  )
}
