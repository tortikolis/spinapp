import charts from "../data/charts"
import {Button} from "@mui/material";

import { Container } from "@mui/material";
import { useState } from "react";
import BB from "./BB";
import Display from "./Display";
import Hposition from "./Hposition";
import Nplayers from "./Nplayers";
import Vposition from "./Vposition";
import Action from "./Action";
import ImgModal from './ImgModal';
import Random from "./Random";

const Form = () => {
    const [nPlayers, setNplayers] = useState("3");
    const [hPosition, setHposition] = useState("SB");
    const [vPosition, setVposition] = useState("");
    const [bbNum, setBbNum] = useState("");
    const [action, setAction] = useState("");
    const [modalOpen, setModalOpen] = useState({
        isOpen: false,
        imgSrc: ""
    });

    const handleModalOpen = (src) => setModalOpen({
        isOpen: true,
        imgSrc: src
    });
    const handleModalClose = () => setModalOpen({
        isOpen: false,
        imgSrc: ""
    });

    const handleReset = () => {
        setNplayers("3");
        setHposition("SB");
        setVposition("");
        setBbNum("")
        setAction("")
    }

    const getCharts = () => {
        let bbRange = [];

        switch (bbNum) {
            case "22-25" : 
                bbRange = [22,23,24,25];
                break;
            case "17-22" :
                bbRange = [17, 18, 19, 20, 21, 22];
                break;
            case "14-17" :
                bbRange = [14, 15, 16, 17];
                break;
            case "11-14" :
                bbRange = [11, 12, 13, 14];
                break;
            case "9-11" :
                bbRange = [9, 10, 11];
                break;
            case "7-9" :
                bbRange = [7, 8, 9]
                break;
            case "manje od 7" :
                bbRange = [1,2,3,4,5,6]
                break;
            case "" :
                bbRange = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
        }

        return charts.filter((chart) => chart.nPlayers === nPlayers)
        .filter(chart => chart.hPosition === hPosition)
        .filter(chart => chart.bb.some(item => bbRange.includes(item)))
        .filter(chart => {
            if(vPosition === "") {
                return true
            } else {
                return chart.vPosition === vPosition
            }
        })
    }

    const getChartsWithAction = () => getCharts().filter(chart => {
        if(action === "") {
            return true
        } else {
            return chart.action === action
        }
    })
    console.log(modalOpen.imgSrc)
    return(
        <Container>
            <Button variant="outlined" color="error" sx={{position:'absolute', top: '90px', left:'350px'}} onClick={handleReset}>Reset</Button>
            <Nplayers setNplayers={setNplayers} nPlayers={nPlayers}/>
            <Hposition setHposition={setHposition} hPosition={hPosition} nPlayers={nPlayers}/>
            <BB bbNum={bbNum} setBbNum={setBbNum}/>
            <Vposition vPosition={vPosition} setVposition={setVposition} nPlayers={nPlayers} hPosition={hPosition}/>
            <Action action={action} setAction={setAction} getCharts={getCharts}/>
            <Display getCharts={getChartsWithAction} handleModalOpen={handleModalOpen}/>
            <ImgModal open={modalOpen.isOpen} imgSrc={modalOpen.imgSrc} handleClose={handleModalClose}/>
            <Random />
        </Container>
    )
}

export default Form;