import React, { useState } from "react";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;

    // Allow only numbers
    if (/^\d*$/.test(value)) {
      setPhone(value);
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (phone.length !== 10) {
      setError("Phone number must be exactly 10 digits");
      return;
    }

    setError("");
    console.log("Valid number:", phone);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={phone}
        onChange={handleChange}
        maxLength={10}
        placeholder="Enter 10-digit number"
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;