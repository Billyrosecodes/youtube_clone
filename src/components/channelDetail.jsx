import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

//import videos and card from this current dir
import { Videos, ChannelCard } from "./";
// import function that outputs api results
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {  
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();
  console.log(channelDetail, videos);

  useEffect(() => { 
     //get the channel detail
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0]) //select the first item with its index
    );
        //get the videos
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items[0]) //select the first item with its index
    );
  }, [id]); // id is the parameter passed into the useEffect
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
            background: "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            height: "300px"
          }} 
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
        <Box display="flex" p="2">
          <Box sx={{ mr: { sm: '100px' }}} />
          <Videos videos={videos} /> 
        </Box>
    </Box>
  )
}

export default ChannelDetail;
