import React, {useState} from 'react';
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

const finalSpaceCharacters = [
    {
        id: 'gary',
        name: 'Gary Goodspeed',
        thumb: '/images/gary.png'
    },
    {
        id: 'cato',
        name: 'Little Cato',
        thumb: '/images/cato.png'
    },
    {
        id: 'kvn',
        name: 'KVN',
        thumb: '/images/kvn.png'
    },
    {
        id: 'mooncake',
        name: 'Mooncake',
        thumb: '/images/mooncake.png'
    },
    {
        id: 'quinn',
        name: 'Quinn Ergon',
        thumb: '/images/quinn.png'
    }
]

const columnsFromBackend =
    {
        ["asd"]: {
            name: 'Todo',
            items: finalSpaceCharacters
        },
        ["asd2"]: {
            name: 'Progress',
            items: []
        },
        ["asd3"]: {
            name: 'Done',
            items: []
        },
    };

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

const Orders = () => {
    const [columns, setColumns] = useState(columnsFromBackend);

    return (
        <div style={{display: "flex"}}>
            <DragDropContext  onDragEnd={result => onDragEnd(result, columns, setColumns)}>
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
                            <div style={{ margin: 8 }}>
                        <Droppable droppableId={id} key={id}>
                            {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => {
                                return (
                                    <div
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                        style={{
                                            background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                                            padding: 4,
                                            width: 250,
                                            minHeight: 500
                                        }}
                                    >
                                        {column.items.map((item, index) => {
                                            return (
                                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                                    {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => {
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
                                                                    backgroundColor: snapshot.isDragging
                                                                        ? "#263B4A"
                                                                        : "#456C86",
                                                                    color: "white",
                                                                    ...provided.draggableProps.style
                                                                }}
                                                            >
                                                                {item.name}
                                                            </div>
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
};

export default Orders;