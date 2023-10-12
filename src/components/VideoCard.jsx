import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoUrl,
        demoVideoTitle,demoChannelUrl,
         demoChannelTitle } from '../utils/constants';

         //destructure the object gotten from the api
const VideoCard = ({ video: { id: { videoId }, snippet }}) => (
  <Card
  sx={{
    width: { xs: '100%', sm: '358px', md: '320px' },
    boxShadow: 'none',
    borderRadius: 0,
  }}
>
  <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
    <CardMedia
      image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
      alt={snippet?.title}
      sx={{
        width: { xs: '100%', sm: '100%', md: '100%' },
        height: 180,
      }}
    />
  </Link>
  <CardContent
    sx={{
      backgroundColor: '#F6F1F1',
      height: '106px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '10px',
    }}
  >
    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
      <Typography
        variant="subtitle1"
        fontWeight="bold"
        color="#0F0F0F"
        sx={{
          textAlign: 'left',
          padding: '8px', // Adjust the padding as needed
          margin: '4px', // Adjust the margin as needed
        }}
      >
        {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
      </Typography>
    </Link>
    <Link
      to={
        snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl
      }
    >
      <Typography
        variant="subtitle2"
        fontWeight="bold"
        color="gray"
        sx={{
          textAlign: 'left',
          padding: '8px', // Adjust the padding as needed
          margin: '4px', // Adjust the margin as needed
        }}
      >
        {snippet?.channelTitle || demoChannelTitle}
        <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
      </Typography>
    </Link>
  </CardContent>
</Card>

  )

export default VideoCard