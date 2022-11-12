import React from 'react'
import { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import Videos from './Videos'
import ChannelCard from './ChannelCard'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () => {
const [channelDetail, setChannelDetail]=useState();
const [videos, setVideos]=useState([])
const { id } = useParams();
  console.log(channelDetail, videos);
  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data)=>setChannelDetail(data?.items[0]));
    
    
      fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data)=>setVideos(data?.items));
    
  
  },[id]);

  
  
  return (
    <div>
      <Box minHeight="92vh" style={{overflow: 'hidden'}}>
        <Box>
          <div style={{background: `linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(116,9,121,1) 39%, rgba(0,212,255,1) 100%)`,
          zIndex:10,
          height:'300px'
        }} />
        </Box>
        <ChannelCard channelDetail={channelDetail} 
        marginTop="-93px"/>
      </Box>
      <Box display="flex" p="2">
        <Box sx={{mr:{sm:'200px'}}} />
        <Videos videos={videos} />
        
      </Box>
    </div>
  )
}

export default ChannelDetail
