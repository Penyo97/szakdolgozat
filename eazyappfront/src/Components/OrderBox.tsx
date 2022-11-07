import React, {useEffect, useState} from 'react';
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




const OrderBox = ({provided, snapshot, id, rents}: boxParam) => {
    const [minuteFirst,setMinuteFirst] = useState<number>(0)
    const [minuteSecond,setMinuteSecond] = useState<number>(0)
    const colors = () => {
        const colorsArray = ["#1d53d2", "#BDE4A8", "#FF6B6B", "#FB5607", "#8338EC", "#5DFDCB", "#D36135", "#D36135"];
        return colorsArray[Math.floor(Math.random() * 7)]
    }

    setInterval(() => {
        if (minuteSecond === 9){
            setMinuteFirst(minuteFirst+1)
            setMinuteSecond(0)
        }
        else {
            setMinuteSecond(minuteSecond+1)
        }
    },60000 )
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
                borderRadius: "1rem",
                backgroundColor: snapshot.isDragging
                    ? "#263B4A"
                    : colors(),
                color: "white",
                ...provided.draggableProps.style
            }}
        >
            {rents.map(({name, count}) => {
                return (
                    <div key={Math.random() * Math.random()}>
                        <div  style={{display: "flex", justifyContent: "center"}}>
                            <h2>{name}</h2>
                            <h2 style={{paddingLeft: "10px"}}>{count} db</h2>
                        </div>
                    </div>
                )
            })}
            <div style={{display: "flex", justifyContent: "space-between",padding:"2px"}}>
                <p>Order id: {id}</p>
                <p>{minuteFirst !== 0 && minuteFirst}{minuteSecond} minute</p>
            </div>
        </div>
    );
};

export default OrderBox;