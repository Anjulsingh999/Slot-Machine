import React from "react";
import Machineboxs from './Machineboxs'



const Machine=()=>{
    return(
        <>
            <div className="main-container">
            <div className="machine-box">
            <Machineboxs x='😀' y='😀' z='😀' />
            <Machineboxs x='😙' y='😀' z='😀'/>
            <Machineboxs x='😀' y='🌞' z='😀'/>
            <Machineboxs x='😙' y='😙' z='😙'/>
            <Machineboxs x='😶‍🌫️' y='😶' z='😀'/>
            <Machineboxs x='🌞' y='😶' z='😀'/>
            </div>
            </div>
        </>
    )
}

export default Machine;