import charts from "../data/charts"
import {Button} from "@mui/material";

import { Container } from "@mui/material";
import { useState, useEffect } from "react";
import BB from "./BB";
import Display from "./Display";
import Hposition from "./Hposition";
import Nplayers from "./Nplayers";
import Vposition from "./Vposition";
import Action from "./Action";
import ImgModal from './ImgModal';
import Random from "./Random";
import filterCharts from "../hooks/filterCharts";
import Count from "./Count";
import Labels from "./Labels";

const Form = () => {
    const [nPlayers, setNplayers] = useState("3");
    const [hPosition, setHposition] = useState("SB");
    const [vPosition, setVposition] = useState("");
    const [bbNum, setBbNum] = useState("");
    const [action, setAction] = useState("");
    const [counter, setCounter] = useState(0);
    const [modalOpen, setModalOpen] = useState({
        isOpen: false,
        imgSrc: ""
    });
    console.log(counter)

    const isStartingState = hPosition == "SB" && vPosition == "" && bbNum == "" && action == "";
    
    useEffect(() => {
        if(counter > 7) {
            handleReset();
            setCounter(0);
        }

        if(!isStartingState){
            const interval = setTimeout(()=> {
                setCounter(prev => prev + 1)
            }, 1000)
    
            
        }
        return ()=> clearTimeout(interval)
        
    })



    const handleModalOpen = (src) => setModalOpen({
        isOpen: true,
        imgSrc: src
    });
    const handleModalClose = () => setModalOpen({
        isOpen: false,
        imgSrc: ""
    });
    const filteredCharts = filterCharts(charts, nPlayers, hPosition, bbNum, vPosition);


    const handleReset = () => {
        setNplayers("3");
        setHposition("SB");
        setVposition("");
        setBbNum("")
        setAction("")
        setCounter(0)
    }

    const filterChartsWithAction = () => filteredCharts.filter(chart => {
        if(action === "") {
            return true
        } else {
            return chart.action === action
        }
    })

    return(
        <Container>
            <Button variant="outlined" color="error" onClick={handleReset} sx={{marginTop:'10px'}}>Reset</Button>
            <Nplayers setNplayers={setNplayers} nPlayers={nPlayers} setCounter={setCounter}/>
            <Hposition setHposition={setHposition} hPosition={hPosition} nPlayers={nPlayers} setCounter={setCounter}/>
            <Vposition vPosition={vPosition} setVposition={setVposition} nPlayers={nPlayers} hPosition={hPosition} setCounter={setCounter}/>
            <Action action={action} setAction={setAction} filteredCharts={filteredCharts} setCounter={setCounter}/>
            <BB bbNum={bbNum} setBbNum={setBbNum} charts={filterChartsWithAction()} setCounter={setCounter}/>
            <Display getCharts={filterChartsWithAction} handleModalOpen={handleModalOpen}/>
            <ImgModal open={modalOpen.isOpen} imgSrc={modalOpen.imgSrc} handleClose={handleModalClose}/>
            <Labels />
            <Random />
            <Count />
        </Container>
    )
}

export default Form;