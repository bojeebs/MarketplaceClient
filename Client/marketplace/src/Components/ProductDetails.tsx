import React from "react"
import { useAuth } from '../AuthContext'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { GetProducts } from "../services/ProductServices";

interface Product {
  id: number;
  imageUrl: string;
  productDescrption: string;
  productPrice: string;
  slashPrice: string

}

const ProductDetails = () => {

const { authenticated, setAuthenticated, user, setUser} = useAuth()
const [products, setProducts] = useState<Product[]>([]);
const { productId } = useParams()

useEffect (() => {
  const renderDetails = async () => {
    const data = await //TODO:need a query in productservices and backend maybe
    console.log("Received products:", data)
    setProducts(data);
  };
  renderDetails();
}, [productId]);

if (!products) {
  return <div> Loading...</div>
}










  return (
  <></>
  )
}


export default ProductDetails





