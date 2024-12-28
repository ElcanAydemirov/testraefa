import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeader from '../../layout/admin/header/header'

export const AdminHome = () => {
  return (<>
        <AdminHeader/>
    <Outlet/>
  </>

  )
}
