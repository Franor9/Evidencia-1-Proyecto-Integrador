import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setproducts(res.data.products);
    });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl text-blue-600 font-bold mb-6 text-center">
        Proyecto Integrador Evidencia 1 Francisco Oviedo
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((p) => (
          <div
            key={p.products}
            className="border p-4 m-2 rounded shadow bg-blue text-center"
          >
            <h2 className="font-semibold text-lg">
              {p.brand} $ {p.price} {p.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
