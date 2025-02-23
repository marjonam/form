import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { FaUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { IoIosPricetag } from "react-icons/io";
import { TbBrand4Chan } from "react-icons/tb";
import { BiCategory } from "react-icons/bi";

function App() {
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/posts");
  const [method, setMethod] = useState("GET");
  const [productName, setProductName] = useState(null);
  const [productDesc, setProductDesc] = useState(null);
  const [productPrice, setProductPrice] = useState(null);
  const [productBrand, setProductBrand] = useState(null);
  const [productCategory, setProductCategory] = useState(null);

  const newProduct = {
    title: productName,
    description: productDesc,
    price: productPrice,
    brand: productBrand,
    category: productCategory,
  };

  const { data, isPending, error } = useFetch(url, method, newProduct);

  return (
    <div className="wrapper">
      <h1>LOG IN</h1>
      <form>
        <div className="input-box">
          <label>
            <input
              type="text"
              placeholder="Username"
              required
              name="name"
              onChange={(e) =>
                setProductName((prev) => (prev = e.target.value))
              }
            />
          </label>
          <FaUser className="icon" />
        </div>

        <div className="input-box">
          <label>
            <input
              type="text"
              placeholder="description"
              name="text"
              onChange={(e) =>
                setProductDesc((prev) => (prev = e.target.value))
              }
              required
            />
          </label>
          <FaBook className="icon" />
        </div>

        <div className="input-box">
          <label>
            <input
              type="number"
              placeholder="price"
              name="number"
              onChange={(e) =>
                setProductPrice((prev) => (prev = e.target.value))
              }
              required
            />
          </label>
          <IoIosPricetag className="icon" />
        </div>

        <div className="input-box">
          <label>
            <input
              type="text"
              placeholder="brand"
              name="text"
              onChange={(e) =>
                setProductBrand((prev) => (prev = e.target.value))
              }
              required
            />
          </label>
          <TbBrand4Chan className="icon" />
        </div>

        <div className="input-box">
          <label>
            <input
              type="text"
              placeholder="category"
              name="text"
              onChange={(e) =>
                setProductCategory((prev) => (prev = e.target.value))
              }
              required
            />
          </label>
          <BiCategory className="icon" />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            setMethod((prev) => prev == "POST");
            console.log(method);
          }}
        >
          post
        </button>
      </form>
    </div>
  );
}

export default App;
