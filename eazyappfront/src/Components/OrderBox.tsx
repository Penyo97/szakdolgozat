import React from 'react';
import {DraggableProvided, DraggableStateSnapshot} from "react-beautiful-dnd";

interface rentsInterface {
    name: string,
    count: number
}

interface boxParam {
    provided: DraggableProvided,
    snapshot: DraggableStateSnapshot,
    id: string,
    rents: Array<rentsInterface>
}

const colors = () => {
    const colorsArray = ["#D8DBE2","#BDE4A8","#FF6B6B","#FB5607","#8338EC","#5DFDCB","#D36135","#D36135"];
    return colorsArray[Math.floor(Math.random() * colorsArray.length-1)]
}


const OrderBox = ({provided,snapshot,id,rents}:boxParam) => {
    return (
        <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
                userSelect: "none",
                padding: 16,
                margin: "0 0 8px 0",
                minHeight: "50px",
                borderRadius:"1rem",
                backgroundColor: snapshot.isDragging
                    ? "#263B4A"
                    : colors(),
                color: "white",
                ...provided.draggableProps.style
            }}
        >
            {rents.map(({name,count}) => {
                return(
                    <div style={{display:"flex",justifyContent:"center"}}>
                        <p>{name}</p>
                        <p style={{paddingLeft:"10px"}}>{count} db</p>
                    </div>
                )
            })}
        </div>
    );
};

export default OrderBox;