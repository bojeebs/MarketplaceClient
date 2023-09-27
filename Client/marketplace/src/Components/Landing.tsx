import React from "react"
import { GetProducts } from "../services/ProductServices"
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState} from 'react'
import '../Styles/landingstyles.css'


interface Product {
  id: number;
  imageUrl: string;
  productDescription: string;
}

const Landing = () => {
  const { authenticated, setAuthenticated, user, setUser } = useAuth();
  const [products, setProducts] = useState<Product[]>([]);
  let navigate = useNavigate();

  useEffect(() => {
    const handleProducts = async () => {
      const data = await GetProducts();
      console.log("Received products:", data);
      setProducts(data);
    };
    handleProducts();
  }, []);

  console.log("Rendering products:", products);

  return (
    <div className="products">
      <h1 className="title">Products</h1>
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img className="image-size"src={product.imageUrl}/>
          <h3>{product.productDescription}</h3>
        </div>
      ))}
    </div>
  );
};

export default Landing;
