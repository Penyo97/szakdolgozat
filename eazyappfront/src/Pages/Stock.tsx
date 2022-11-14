import React, {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faCalendarAlt,
    faFilter,
} from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


import Dialog from '@mui/material/Dialog';
import axios from "axios";
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
interface ProductInt {
    name: string,
    sku: number,
    image: string,
    brand: string,
    description: string,
    category: string,
    netto: number,
    brutto: number,
    free: number
}

interface selectedItemInt {
    name: string,
    netto: number,
    brutto: number,
    free: number,
    sku: number
}

const Stock = () => {
    const MySwal = withReactContent(Swal)
    const [product, setProduct] = useState<Array<ProductInt>>([]);
    const [open,setOpen] = useState<boolean>(false);
    const [modBrutto,setmodBrutto] = useState<number>(0);
    const [modNetto,setmodNetto] = useState<number>(0)
    const [modFree,setmodFree] = useState<number>(0)
    const [selectedItem,setSelectedItem] = useState<selectedItemInt>({
        name:"",
        brutto:0,
        free:0,
        sku:0,
        netto:0
    });

    const getProduct = async () => {
        let prod: Array<ProductInt> = [];
        await axios.get("http://localhost:8080/api/getProductByManufacturer/1")
            .then(res => {
                for (let i = 0; i < res.data.length; i++) {
                    const newProd: ProductInt = {
                        sku: res.data[i].sku as number,
                        category: res.data[i].category,
                        image: res.data[i].image,
                        name: res.data[i].name,
                        description: res.data[i].description,
                        brutto: res.data[i].brutto_price as number,
                        netto: res.data[i].netto_price as number,
                        brand: res.data[i].brand.name,
                        free: res.data[i].free as number
                    }
                    prod.push(newProd);
                }
                setProduct(prod);
            }).catch(err => console.log(err))
    }

    useEffect(() => {
        getProduct();
    }, [])

    const getSelectedItem = (name: string, netto: number, brutto: number, free: number,sku: number) => {
        setSelectedItem({
            netto: netto,
            free: free,
            name: name,
            brutto: brutto,
            sku: sku
        })
        setmodBrutto(brutto);
        setmodFree(free);
        setmodNetto(netto);
        setOpen(true);
    }

    const modifySelectedItem = async () => {
        await axios.post("http://localhost:8080/api/modifyItem",{
            sku: selectedItem.sku,
            netto:modNetto,
            free:modFree,
            brutto: modBrutto
        }).then((s) =>
            {
                getProduct();
                setOpen(false);
                MySwal.fire({
                    icon: 'success',
                    title: 'Modify Success',
                })
            }
        ).catch(err => console.log(err))
    }

    return (
        <div>
            <TableContainer component={Paper} sx={{
                width: "80vw",
                margin: "2rem"
            }}>
                <Table>
                    <TableHead sx={{
                        background: "#9DF7E5"
                    }}>
                        <TableRow>
                            <TableCell align={"right"}>
                               <h2> Image</h2>
                            </TableCell>
                            <TableCell align={"right"}>
                               <h2>Sku</h2>
                            </TableCell>
                            <TableCell align={"right"}>
                               <h2>Name</h2>
                            </TableCell>
                            <TableCell align={"right"}>
                                <h2>Brand</h2>
                            </TableCell>
                            <TableCell align={"right"}>
                               <h2>Description</h2>
                            </TableCell>
                            <TableCell align={"right"}>
                               <h2>Category</h2>
                            </TableCell>
                            <TableCell align={"right"}>
                                <h2>Netto</h2>
                            </TableCell>
                            <TableCell align={"right"}>
                               <h2>Brutto</h2>
                            </TableCell>
                            <TableCell align={"right"}>
                                <h2>Count</h2>
                            </TableCell>
                            {sessionStorage.getItem("position") === "1" &&
                            (
                                <><TableCell align={"right"}/><TableCell align={"right"}/></>
                                )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            product.map(({
                                             sku,
                                             brutto, brand, image, name,
                                             category, netto, description,free
                                         }) => {
                                return (
                                    <TableRow hover key={sku}>
                                        <TableCell align={"right"}>
                                            {image}
                                        </TableCell>
                                        <TableCell align={"right"}>
                                           <h2> {sku}</h2>
                                        </TableCell>
                                        <TableCell align={"right"}>
                                           <h2>{name}</h2>
                                        </TableCell>
                                        <TableCell align={"right"}>
                                           <h2>{brand}</h2>
                                        </TableCell>
                                        <TableCell align={"right"}>
                                            <h2>{description}</h2>
                                        </TableCell>
                                        <TableCell align={"right"}>
                                           <h2>{category}</h2>
                                        </TableCell>
                                        <TableCell align={"right"}>
                                            <h2>{netto} Ft</h2>
                                        </TableCell>
                                        <TableCell align={"right"}>
                                            <h2>{brutto} Ft</h2>
                                        </TableCell>
                                        <TableCell align={"right"}>
                                            <h2>{free} DB</h2>
                                        </TableCell>
                                        {sessionStorage.getItem("position") === "1" &&
                                        (
                                            <>
                                                <TableCell align={"right"}>
                                                    <Button variant="contained" color="success" onClick={
                                                        () => {
                                                            getSelectedItem(name, netto, brutto, free,sku)
                                                        }
                                                    }>
                                                        Modify
                                                    </Button>
                                                </TableCell>
                                                <TableCell align={"right"}>
                                                    <Button variant="contained" color="error">
                                                        Delete
                                                    </Button>
                                                </TableCell>
                                            </>
                                        )}
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <Dialog onClose={() => setOpen(false)} open={open} >
                <DialogTitle>Modify {selectedItem.name}</DialogTitle>
                <TextField
                    id="outlined-number"
                    label="Netto"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    placeholder={selectedItem.netto.toString()}
                    style={{width:"20vw",margin:10}}
                    // @ts-ignore
                    onChange={(e) => setmodNetto(e.target.value)}
                />
                <TextField
                    id="outlined-number"
                    label="Brutto"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    placeholder={selectedItem.brutto.toString()}
                    style={{width:"20vw",margin:10}}
                    // @ts-ignore
                    onChange={(e) => setmodBrutto(e.target.value)}
                />
                <TextField
                    id="outlined-number"
                    label="Count"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    placeholder={selectedItem.free.toString()}
                    style={{width:"20vw",margin:10}}
                    // @ts-ignore
                    onChange={(e) => setmodFree(e.target.value)}
                />
                <Button variant="contained" color="success" onClick={modifySelectedItem} style={{width:"20vw",margin:10}}>
                    Modify
                </Button>
            </Dialog>
        </div>
    );
};

export default Stock;