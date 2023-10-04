import React from "react"
import { useAuth } from '../AuthContext'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { GetProductId, GetProducts } from "../services/ProductServices";

interface Product {
  id: number;
  imageUrl: string;
  productDescrption: string;
  productPrice: string;
  slashPrice: string
  
}

const ProductDetails = () => {

const { authenticated, setAuthenticated, user, setUser} = useAuth()
const [product, setProducts] = useState<Product | null>(null);

const { productId } = useParams();

// console.log(`About to make API call with productId: ${productId}`);
console.log("Params:", useParams());


useEffect (() => {
  const renderDetails = async () => {
      try {
        const data = await GetProductId(productId);
        console.log("Received product:", data);
        setProducts(data);
      } catch (error) {
        console.log("Error fetching product:", error);
      
    }
  };
  renderDetails();
}, [productId]);











  return (
  <div>
    
  </div>
  )
}


export default ProductDetails





