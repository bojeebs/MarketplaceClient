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
  slashPrice: string
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
            <div className="price-container">
              <h3 className="name">{product.productDescription}</h3>
              <h3 className="slash-price">${product.slashPrice}
                <span className="decimal-two">.99</span>
              </h3>
              <h3 className="name price">${product.productPrice}
                <span className="decimal">.99</span>
              </h3>
              <h3 className="shipping">Free Shipping</h3>
              <button className="cart">Add to Cart</button>
            </div> 
          </div>  
        ))}
      </div>  
    </div>  
  );
  
};

export default Landing;
