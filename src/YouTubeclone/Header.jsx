import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
// import Videos from "./Videos"
import Navbar from './Navbar'
import VideoDetail from './VideoDetails'
import ChannelDetail from './channelDeatils'
import SearchFeed from './SearchFeed'
import Feed from "./Feed"
const Header = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>

    </BrowserRouter>
    </>
  )
}

export default Header