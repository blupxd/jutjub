import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import {Videos,ChannelCard} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  useEffect(()=> {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };
    fetchResults();
  }, [id])
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
          zIndex: 10,
          backgroundSize: 'auto',
          height: '280px'
        }}/>
        <ChannelCard channelDetail={channelDetail} marginTop="-110px"/>
      </Box>
      <Box display="flex" p="2">
        <Box sx={{
          mr: {sm: '100px'}
        }} />
          <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail