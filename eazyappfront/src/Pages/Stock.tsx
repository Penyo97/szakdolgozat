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
import axios from "axios";
import Button from '@mui/material/Button';
interface ProductInt {
    name: string,
    sku: number,
    image: string,
    brand: string,
    description: string,
    category: string,
    netto: number,
    brutto: number
}


const Stock = () => {

    const [product, setProduct] = useState<Array<ProductInt>>([]);

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
                        brand: res.data[i].brand.name
                    }
                    prod.push(newProd);
                }
                setProduct(prod);
            }).catch(err => console.log(err))
    }

    useEffect(() => {
        getProduct();
    }, [])
    console.log(sessionStorage.getItem("position"))
    return (
        <div>
            <h1>Stock</h1>
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
                                Image
                            </TableCell>
                            <TableCell align={"right"}>
                                Sku
                            </TableCell>
                            <TableCell align={"right"}>
                                Name
                            </TableCell>
                            <TableCell align={"right"}>
                                Brand
                            </TableCell>
                            <TableCell align={"right"}>
                                Description
                            </TableCell>
                            <TableCell align={"right"}>
                                Category
                            </TableCell>
                            <TableCell align={"right"}>
                                Netto
                            </TableCell>
                            <TableCell align={"right"}>
                                Brutto
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
                                             category, netto, description
                                         }) => {
                                return (
                                    <TableRow hover key={sku}>
                                        <TableCell align={"right"}>
                                            {image}
                                        </TableCell>
                                        <TableCell align={"right"}>
                                            {sku}
                                        </TableCell>
                                        <TableCell align={"right"}>
                                            {name}
                                        </TableCell>
                                        <TableCell align={"right"}>
                                            {brand}
                                        </TableCell>
                                        <TableCell align={"right"}>
                                            {description}
                                        </TableCell>
                                        <TableCell align={"right"}>
                                            {category}
                                        </TableCell>
                                        <TableCell align={"right"}>
                                            {netto} Ft
                                        </TableCell>
                                        <TableCell align={"right"}>
                                            {brutto} Ft
                                        </TableCell>
                                        {sessionStorage.getItem("position") === "1" &&
                                        (
                                            <>
                                                <TableCell align={"right"}>
                                                    <Button variant="contained" color="success">
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
        </div>
    );
};

export default Stock;