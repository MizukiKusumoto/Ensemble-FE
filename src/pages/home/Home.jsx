import React from 'react';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Timeline from '../../components/timeline/Timeline';
import Rightbar from '../../components/rightbar/Rightbar';
import './Home.css';
import { useState } from 'react';

export default function Home({sidebar, setSidebar, homeMode, setHomeMode}) {
  return (
    <>
      <Topbar />
      <div className='homeContainer'>
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} child={homeMode} setChild={setHomeMode} />
        <Timeline />
        <Rightbar />
      </div>
    </>
  );
}
