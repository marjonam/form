import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaCity } from "react-icons/fa";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    age: "",
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  const handleClear = () => {
    setFormData({ name: "", city: "", age: "" });
    setSubmittedData(null);
  };

  return (
    <div className="wrapper">
      <h1>LOG IN</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <label>
            <input
              type="text"
              placeholder="Username"
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <FaUser className="icon" />
          </label>
        </div>

        <div className="input-box">
          <label>
            <input
              type="text"
              placeholder="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
            <FaCity className="icon" />
          </label>
        </div>

        <div className="input-box">
          <label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <FaLock className="icon" />
          </label>
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            remember me
          </label>
          <a href="#">forgot password?</a>
        </div>

        <button type="submit">Login</button>

        <div className="register-link">
          <p>
            Don't have an account? <a href="#">Register</a>
          </p>
        </div>
      </form>
      {submittedData && (
        <div className="card">
          <h3>INFORMATION</h3>
          <p>
            <strong>name:</strong> {submittedData.name}
          </p>
          <p>
            <strong>city:</strong> {submittedData.city}
          </p>
          <p>
            <strong>password:</strong> {submittedData.password}
          </p>
          <button onClick={handleClear}>clear</button>
        </div>
      )}
    </div>
  );
}

export default Form;
