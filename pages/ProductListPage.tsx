import { NextPage } from "next";
import Navigation from "./components/Navigation";
import SiteFooter from "./components/SiteFooter";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductListView from "./components/ProductListView";

import styles from '../styles/ProductListPage.module.css'
const ProductListPage : NextPage = () => {        
    const [data, setData] = useState([]);
    useEffect(()=> {
        if(data.length > 0) {
            return;
        }
        console.log("productListPage did Appear");
        (async () => {            
            const data = await axios.get('https://fakestoreapi.com/products');            
            console.log(data.data);
            setData(data.data);            
        })();

        return (()=> {
            console.log("productListPage did DisAppear");
        })
    })
    return <>
    {Navigation("ProductListPage")}
    <div className={styles.productList}>
    {ProductListView(data)}
    </div>
    {SiteFooter()}
    </>
}
export default ProductListPage;