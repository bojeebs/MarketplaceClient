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
  productPrice: string;
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

  //console.log("Rendering products:", products);

  return (
    <div>
    <h1 className="title">Marketplace</h1>
    <div className="products">
      
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img className="image-size" src={product.imageUrl}/>
          <h3 className="text-left">{product.productDescription}</h3>
          <h3 className="text-left price">{product.productPrice}
          <h3 className="slash-price"></h3>
          <span className="decimal">.99</span>
          </h3>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Landing;
