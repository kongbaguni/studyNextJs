import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import Navigation from "../components/Navigation";
import SiteFooter from "../components/SiteFooter";
import Image from "next/image";

interface Props {
  data: {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    image: string;
  };
}

const ProductPage: NextPage<Props> = ({ data }) => {
  return (
    <>
      {Navigation("ProductListPage")}
      <article>
        <header>
          <h2>{data.title}</h2>
        </header>
        <Image src={data.image} alt={data.title} width={200} height={200} />
        <ul>
          <li>category : {data.category} </li>
          <li>price : ${data.price}</li>
          <li>{data.description}</li>
        </ul>
      </article>
      {SiteFooter()}
    </>
  );
};

export default ProductPage;

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const { productId } = context.query;
  const data = await axios.get(`https://fakestoreapi.com/products/${productId}`).then((res) => res.data);
  return {
    props: {
      data,
    },
  };
};
