import React from "react"
import { GetProducts } from "../services/ProductServices"
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState} from 'react'

interface Product {
  id: number;
  image: string;
  description: string;
}
const Landing = () => {

const { authenticated, setAuthenticated, user, setUser } = useAuth();

const Products = ({user, authenticated}) => {
  const [product, setProducts] = useState<Product[]>([])
  let navigate = useNavigate()

  useEffect(() => {
    const handleProducts = async () => {
      const data = await GetProducts();
      console.log("Received products:", data);
      setProducts(data);
    };
    handleProducts();
  }, [])
  
  console.log("Rendering products:", product);

return (
  <div className="products">
    <h1 className="title">Products</h1>
    {product.map((product) => (
      <div className="product-card" key={product.id}>
        <h3>{product.image}</h3>
        <h3>{product.description}</h3>
      </div>
    ))}
  </div>
)
}
    
}


export default Landing