import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { FaUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { IoIosPricetag } from "react-icons/io";
import { TbBrand4Chan } from "react-icons/tb";
import { BiCategory } from "react-icons/bi";

function App() {
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/posts");
  const [newProduct, setNewProduct] = useState(null);
  const [method, setMethod] = useState("GET");
  const [productDes, setProductDes] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");

  const { data, isPending, error } = useFetch(url, method, newProduct);

  useEffect(() => {
    console.log("method:", method);
  }, [method]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewProduct({
      name: productName,
      description: productDes,
      price: productPrice,
      brand: productBrand,
      category: productCategory,
    });
    setMethod("POST");
  };

  return (
    <>
      <div className="wrapper">
        <h1>LOG IN</h1>
        <form>
          <div className="input-box">
            <label>
              <input
                type="text"
                placeholder="Username"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </label>
            <FaUser className="icon" />
          </div>

          <div className="input-box">
            <label>
              <input
                type="text"
                placeholder="description"
                value={productDes}
                onChange={(e) => setProductDes(e.target.value)}
              />
            </label>
            <FaBook className="icon" />
          </div>

          <div className="input-box">
            <label>
              <input
                type="number"
                placeholder="price"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
              />
            </label>
            <IoIosPricetag className="icon" />
          </div>

          <div className="input-box">
            <label>
              <input
                type="text"
                placeholder="brand"
                value={productBrand}
                onChange={(e) => setProductBrand(e.target.value)}
              />
            </label>
            <TbBrand4Chan className="icon" />
          </div>

          <div className="input-box">
            <label>
              <input
                type="text"
                placeholder="category"
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
              />
            </label>
            <BiCategory className="icon" />
          </div>

          <button onClick={handleSubmit}>submit</button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setMethod((prev) => (prev === "GET" ? "POST" : "GET"));
            }}
          >
            post
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
