import { useState, useEffect } from "react";
import { Fab, Box, Chip } from "@mui/material";

const Count = () => {

    const [count, setCount] = useState(0);
    const [time, setTime] = useState({
        seconds: 0,
        minutes: 0,
        hours:0,
    })

    const [isTimerActive, setIsTimerActive] = useState(true);

    let interval;

    useEffect(() => {
        
        if(isTimerActive){
            interval = setInterval(() => {
                setTime(prev => {
                    const {seconds, minutes, hours} = prev;
                            
                        if(seconds === 59 && minutes === 59) {
                                return {
                                    seconds: 0,
                                    minutes: 0,
                                    hours: hours + 1,
                                }
                        } else if (seconds === 59) {
                                return {
                                    seconds: 0,
                                    minutes: minutes + 1,
                                    hours: hours,
                                }
                        } else {
                            return {
                                seconds: seconds + 1,
                                minutes: minutes,
                                hours: hours,
                            }  
                        }
               })
           }, 1000) 
            
           return () => clearInterval(interval)
        } 
    }, [isTimerActive])

    const handleClick = () => {
        setCount(prev => prev+1)
    }


    const style = {
        position: 'fixed',
        bottom: '60px',
        right: '10px',
        padding: '10px',
   
      };
    console.log(isTimerActive)

    const seconds = time.seconds < 10? `0${time.seconds}` : time.seconds
    const minutes = time.minutes < 10? `0${time.minutes}` : time.minutes
    const hours = time.hours < 10? `0${time.hours}` : time.hours
    const avGames = Math.floor(count / (((time.hours*60*60) + (time.minutes*60) + time.seconds) / 3600))
    return(
        <Box sx={style}>
            <Fab onClick={handleClick} color='primary'>
                {count}
            </Fab>
            <Box sx={{margin: '10px 0px'}}>
            <Chip onClick={() => setIsTimerActive(prev => !prev)} label={`${hours} : ${minutes} : ${seconds}`} variant="outlined" />
            </Box>
            <Box>
            <Chip label={`Av. games: ${avGames}`} variant="outlined" />
            </Box>
        </Box>    
    )
}

export default Count;