import React from "react"
import { useAuth } from '../AuthContext'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { GetProductId, GetProducts } from "../services/ProductServices";
import '../Styles/productdetails.css'


interface Product {
  id: number;
  imageUrl: string;
  productDescription: string;
  productPrice: string;
  slashPrice: string
  
}

const ProductDetails = () => {

const { authenticated, setAuthenticated, user, setUser} = useAuth()
const [product, setProducts] = useState<Product | null>(null);

const { productId } = useParams();


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
    {product ? ( 
      <>
        <h1 className="product-title">{product.productDescription}</h1>
        <img className="product-image" src={product.imageUrl}/>
         
            
          
        <p>Price: {product.productPrice}</p>
        
      </> 
    ) : (
      <p>Loading...</p>
    )}
  </div>
);

  }

export default ProductDetails





