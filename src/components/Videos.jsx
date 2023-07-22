import { Stack, Box } from '@mui/material';

import { VideoCard, ChannelCard } from './';

//destructure props and get videos
const Videos = ({ videos, direction }) => {
  return (
    <Stack direction= {direction || "row"} flexWrap="wrap" //layout the info we want to display
     justifyContent="start" gap={2}>
       {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
       ))}
    </Stack>
  )
};

export default Videos