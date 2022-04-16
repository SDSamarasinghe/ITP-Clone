import React from "react";
import { Link } from "react-router-dom";

const StoreHome = () => {
  return (
    <div className="vw-100 min-vh-100" style={{ backgroundColor: "#F5F5F5" }}>
      {/* Upper Images */}

      <div className="upper-images max-vh-100 row gx-3">
        <img
          className="ecommerce-slide"
          src="https://i.ibb.co/277NHWS/Cover1.jpg"
          alt=""
        />
      </div>

      {/* Categories */}

      <div className="categories p-4">
        <h1 className="my-4 display-6 px-5"> Categories </h1>

        <div className="category-list row gy-4 px-5">
          <div className="category col-3">
            <Link to="/store/products/vegetables">
              <img
                src="https://i.ibb.co/jLFzMwR/Cat1.jpg"
                style={{
                  width: "300px",
                  height: "500px",
                  cursor: "pointer",
                }}
                alt=""
              />
            </Link>
          </div>

          <div className="category col-3">
            <Link to="/store/products/fruits">
              <img
                src="https://i.ibb.co/jJqxM2X/Cat2.jpg"
                style={{
                  width: "300px",
                  height: "500px",
                  cursor: "pointer",
                }}
                alt=""
              />
            </Link>
          </div>

          <div className="category col-3">
            <Link to="/store/products/fertilizers">
              <img
                src="https://i.ibb.co/Y8Jj926/Cat3.jpg"
                style={{
                  width: "300px",
                  height: "500px",
                  cursor: "pointer",
                }}
                alt=""
              />
            </Link>
          </div>

          <div className="category col-3">
            <Link to="/store/products/machinery">
              <img
                src="https://i.ibb.co/VYrLn1z/Cat4.jpg"
                style={{
                  width: "300px",
                  height: "500px",
                  cursor: "pointer",
                }}
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreHome;