import React from "react";


const Machineboxs=(props)=>{
    let x=props.x;
    let y=props.y;
    let z=props.z;
    let result='';

    if((x===y) && (y===z))
    {
        result=" This is Matching 😎";
    }
    else{
        result=" This is not Matching 😒";
    }

    return(
        <>
            <div className="boxs">
            <div className="imgs">
            {x} {y} {z}
            </div>
            <div className="text-result">
           {result}
            </div>
            </div>
        </>
    )
}

export default Machineboxs;

