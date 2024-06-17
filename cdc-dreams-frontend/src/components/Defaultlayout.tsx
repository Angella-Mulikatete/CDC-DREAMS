// import React from 'react'

import { Outlet } from "react-router-dom"

const Defaultlayout = () => {
  return (
    <>
      <div>
        <Outlet/>
      </div>
    </>
  )
}

export default Defaultlayout
