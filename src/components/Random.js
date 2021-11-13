import { useState, useEffect } from "react";
import { Fab, Box } from "@mui/material";

const Random = () => {

    //const initialRandomNum = Math.floor(Math.random()*100)

    const [rand, setRand] = useState(50)

    const handleClick = () => {
        setRand(Math.floor(Math.random()*100))
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setRand(Math.floor(Math.random()*100))
        }, 10000);
        return () => clearInterval(interval);
      }, []);

    const style = {
        position: 'fixed',
        top: '60px',
        right: '10px',
        padding: '10px'
      };

    return(
        <Box sx={style}>
            <Fab onClick={handleClick} color='secondary'>
                {rand}
            </Fab>
        </Box>
        
        
    )
}

export default Random;