import React from 'react'
import { Outlet } from 'react-router-dom'
import  ClientHeader  from '../../layout/client/header/index.jsx'


const ClientLayout = () => {
  return (
    <>
    <ClientHeader/>
    <Outlet/>
    </>
  )
}

export default ClientLayout