import React from 'react'
import Navbar from '../component/Navbar'
import Sidebar from '../component/Sidebar'

export default function Home() {
  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{height:"7.5vh"}}>
      <Navbar/>
      </div>
      <div className="flex" style={{height:"92vh"}}>
          <Sidebar/>
      </div>
    </div>
  )
}
