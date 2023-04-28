import React from 'react'
import { BottomNav, Footer, Navbar, Video } from '../component'

const VideoPage = ({allDatav}) => {
  return (
    <>
    <Navbar/>
    {/* <VideoContent/> */}
    <Video allDatav={allDatav}/>
    <Footer/>
    <BottomNav/>
    </>
  )
}

export default VideoPage