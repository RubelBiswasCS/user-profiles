import React, { useEffect } from "react"

// Imnport Components
import { Loader } from "@/components/common/Loader"
import Card from "@/components/User/Card"

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
   <div className='min-h-screen bg-purple-100 flex justify-center items-center py-4 flex-wrap gap-4'>
    { (userStatus === 'loading') ? <Loader /> : '' }
    {
      users?.map((u: any, idx: any) => (
        <Card
          key={ idx }
          name={ `${ u?.firstName ?? '' } ${ u?.lastName ?? '' }` }
          email={ u?.email ?? '' }
          image={ u?.image ?? '' }
          profile={ u?.id ? `/user/${ u.id }` : '' }
        />
      ))
    }
   </div>
  )
}
