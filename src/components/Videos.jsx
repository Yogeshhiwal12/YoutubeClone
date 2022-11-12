import React from 'react'
import { Stack, Box } from '@mui/system'
import ChannelCard from './ChannelCard'
import VideoCard from './VideoCard'

const Videos = ({ videos }) => {
  if(!videos?.length) return 'Loading...';
  return (
    
      <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
        {videos.map((item, idx)=>(
          <Box key={idx}>
           {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetails={item} />}
          
          </Box>
        ))}

      </Stack>
    
  )
} 

export default Videos