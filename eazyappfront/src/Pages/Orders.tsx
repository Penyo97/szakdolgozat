import React, {useEffect, useState} from 'react';
// @ts-ignore
import {
    DragDropContext,
    Droppable,
    Draggable,
    DroppableProvided,
    DroppableStateSnapshot,
    DraggableStateSnapshot, DraggableProvided
} from "react-beautiful-dnd";
import "./Orders.css"
import axios from "axios";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import OrderBox from "../Components/OrderBox";
interface rentsInterface {
    name: string,
    count: number
}

interface orderInterface {
    id: string,
    rents: Array<rentsInterface>
}


const Orders = () => {
    const [load,setLoad] = useState<boolean>(false)
    const onDragEnd = (result: any, columns: any, setColumns: any) => {
        if (!result.destination) return;
        // @ts-ignore
        const {source, destination} = result;
        if (source.droppableId !== destination.droppableId) {
            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = sourceItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems
                },
                [destination.droppableId]: {
                    ...destColumn,
                    items: destItems
                }
            });
        } else {
            const column = columns[source.droppableId];
            const copiedItems = [...column.items];
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...column,
                    items: copiedItems
                }
            });
        }
    }

    let ord: Array<orderInterface> = [];
    const getOrders = async () => {
        await axios.get("http://localhost:4000/getOrders").then(res => {
                for (let i = 0; i < res.data.length; i++) {
                    let rentArray: Array<rentsInterface> = [];
                    for (let j = 0; j < res.data[i].Rents.length; j++) {
                        const rent: rentsInterface = {
                            name: res.data[i].Rents[j].Name,
                            count: res.data[i].Rents[j].Count
                        }
                        rentArray.push(rent)
                    }
                    const order: orderInterface = {
                        id: res.data[i]._id,
                        rents: rentArray
                    }
                    ord.push(order)
                }
                setLoad(true);
            }
        ).catch(err => console.log(err))
    }

    const sendAb = async () => {
        console.log(columns);
    }


    const columnsFromBackend =
        {
            ["todo"]: {
                name: 'Todo',
                items: ord
            },
            ["progress"]: {
                name: 'Progress',
                items: []
            },
            ["done"]: {
                name: 'Done',
                items: []
            },
        };
    const [columns, setColumns] = useState(columnsFromBackend);

    useEffect(() => {
        getOrders();
    }, [])


    useEffect(() => {
        sendAb();
    },[columns])
    if (!load) {
        return (
            <Stack spacing={1}>
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" width={210} height={60} />
                <Skeleton variant="rounded" width={210} height={60} />
            </Stack>
        )
    }
    else {
        return (
            <div style={{display: "flex"}}>
                <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
                    {Object.entries(columns).map(([id, column]) => {
                        return (
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center"
                                }}
                                key={id}
                            >
                                <h2>{column.name}</h2>
                                <div style={{margin: 8}}>
                                    <Droppable droppableId={id} key={id}>
                                        {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => {
                                            return (
                                                <div
                                                    {...provided.droppableProps}
                                                    ref={provided.innerRef}
                                                    style={{
                                                        background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                                                        padding: 4,
                                                        width: '25vw',
                                                        minHeight: 500
                                                    }}
                                                >
                                                    {column.items.map((item, index) => {
                                                        return (
                                                            <Draggable key={item.id} draggableId={item.id}
                                                                       index={index}>
                                                                {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => {
                                                                    return (
                                                                <OrderBox provided={provided} snapshot={snapshot} id={item.id} rents={item.rents}/>
                                                                    )
                                                                }}
                                                            </Draggable>
                                                        )
                                                    })}
                                                    {provided.placeholder}
                                                </div>
                                            )
                                        }}
                                    </Droppable>
                                </div>
                            </div>
                        )
                    })}
                </DragDropContext>
            </div>
        );
    }
};

export default Orders;