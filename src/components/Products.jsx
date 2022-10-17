import { useNavigate } from "react-router-dom";

function Products(prop) {
  const navigate = useNavigate();

  return (
    <>
      <h1 style={{ background: "grey", padding: "20px", width: "100%" }}>
        Fresh Stock
      </h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {prop.data.map((item) => {
          return (
            <div
              class="card"
              style={{ width: "300px", border: "2px solid silver" }}
            >
              <h3 style={{ height: "100px" }}>{item.title}</h3>
              <img
                src={item.image}
                style={{ height: "100px", width: "100px" }}
                alt="products"
              ></img>
              <p style={{ margin: "15px" }}>
                <span>Category:</span>
                <span
                  style={{
                    background: "lightgrey",
                    fontWeight: "600",
                    padding: "5px",
                    borderRadius: "5px"
                  }}
                >
                  {item.category}
                </span>
              </p>
              <p
                style={{
                  textAlign: "justify",
                  padding: "0 5px",
                  height: "120px",
                  overflowX: "hidden"
                }}
              >
                <span>
                  <strong>Description:</strong>
                </span>
                {item.description}
              </p>
              <div style={{ margin: "10px" }}>
                <h4>Rating</h4>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    margin: "20px"
                  }}
                >
                  <p>
                    Rate:
                    <span style={{ color: "green" }}>{item.rating.rate}</span>
                  </p>
                  <p>
                    Count:
                    <span style={{ color: "green" }}>{item.rating.count}</span>
                  </p>
                </div>
              </div>
              <p style={{ margin: "15px" }}>
                Price: <span style={{ color: "red" }}>${item.price}</span>
              </p>
              <button
                style={{
                  border: "none",
                  outline: "none",
                  color: "white",
                  background: "cornflowerblue",
                  height: "40px",
                  width: "130px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  marginBottom: "10px"
                }}
                onClick={() => {
                  navigate("/Cart");
                }}
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Products;
