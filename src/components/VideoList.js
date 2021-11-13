// import 'mui-player/dist/mui-player.min.css'
// import MuiPlayer from 'mui-player'

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

import videos from '../data/videos'
import { useEffect, useState } from 'react';

const VideoList = () => {
    const [videoType, setVideoType] = useState('preflop')
    //const [id, setId] = useState(0);
    let id = 0;
    
    
    const videoListJsx  = videos[videoType].map(video => {
        id += 1
        
        return (
            <div key={id} className='video-player'>

                        <h5>{video.title}</h5>

                        <video width="960" key={id} src={video.link} height="520" controls>
                            
                            Your browser does not support the video tag.
                        </video>

                    </div>
        )
    })

    return(
        <Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        '& > *': {
                        m: 1,
                        },
                    }}
                    >
                    
                    <ButtonGroup variant="text" aria-label="text button group">
                        <Button onClick={()=> setVideoType('preflop')}>Preflop</Button>
                        <Button onClick={()=> setVideoType('flop')}>Flop</Button>
                        <Button onClick={()=> setVideoType('turn')}>Turn</Button>
                        <Button onClick={()=> setVideoType('river')}>River</Button>
                        <Button onClick={()=> setVideoType('HU')}>HU</Button>
                        <Button onClick={()=> setVideoType('liveplay')}>Liveplay</Button>
                    </ButtonGroup>
                </Box>
                <div className='video-wrap'>
                    {videoListJsx}
                </div>
        </Box>
    )
}

export default VideoList;