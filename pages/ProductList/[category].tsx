import axios from "axios";
import { NextPage,GetServerSideProps} from "next"
import CategoryListView from "../components/CategoryListView";
import { useEffect } from "react";
import Navigation from "../components/Navigation";
import SiteFooter from "../components/SiteFooter";
import ProductListView from "../components/ProductListView";
import styles from '../../styles/ProductListPage.module.css'

interface Props {
    data : []
}
const ProductListPage : NextPage = (data) => {        
    useEffect(()=> {
        console.log(data);
    })
    return (
        <>
        {Navigation("ProductListPage")}
        <div className={styles.categorys}>
        {CategoryListView(data.categorys, data.category)}
        </div>
        <div className={styles.productList}>
        {ProductListView(data.products)}
        </div>
        {SiteFooter()}
        </>
    )
}
export default ProductListPage;


export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    const { category } = context.query;    
    console.log(category);
    const categorys = await axios.get('https://fakestoreapi.com/products/categories').then((res) => res.data);

    let listURL = 'https://fakestoreapi.com/products';
    if(category != 'all') {
        listURL = 'https://fakestoreapi.com/products/category/' + category;
    }

    const products = await axios.get(listURL).then((res)=>res.data);

    return {
      props: {
        categorys,
        products,
        category,
      },
    };
  };