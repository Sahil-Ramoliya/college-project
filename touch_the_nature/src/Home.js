import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header"

import { navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "./Loader";

const Home = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!sessionStorage.getItem('id')) {
      navigate('/');
    }
    fetch("http://localhost:5000/getallproduct")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Wait for 3 seconds
        // setTimeout(() => {
        //     setload(false);
        // }, 2000);
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )

  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Loader />
  } else {
    return (
      <>
        <Header />
        <Body />
        <Footer />
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      </>
    )
  }
}
export default Home;