import { useEffect, useState } from 'react'
import axios from 'axios';
export default function App() {
  const [response, setResponse] = useState(null);
  const getData = () => {
    // try {
    //   const data = await fetch("https://dummyjson.com/products");
    //   const res = await data.json();
    //   console.log(res);
    //   setResponse(res.products);
    // } catch (err) {
    //   console.error(err);
    // }
    // fetch("https://dummyjson.com/products")
    //   .then((data) => data.json())
    //   .then((res) => {
    //     console.log(res);
    //     setResponse(res.products);
    //   }).catch((error) => console.error(error));

    axios.get("https://dummyjson.com/products")
      .then((res) => {
        console.log(res);
        setResponse(res.data.products);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getData();
  }, []);

  // if (response != null) {
  //   console.log(response[0]);
  // }
  let styles = {
    border: "1px solid black",
    borderRadius: "5px",
    padding: "10px",
    margin: "10px",
    width: "300px",
    boxShadow: "2px 2px 12px rgba(0,0,0,0.1)",
    display: "inline-block",

  };
  return (
    <div>
      {response != null &&
        response.map((obj, idx) => (
          <div key={idx} style={styles}>
            <h3>{obj.title}</h3>
            <p>{obj.description}</p>
            <img src={obj.images[0]} alt={obj.title} width={300} height={200} />
          </div>

        ))}
    </div>
  );
}