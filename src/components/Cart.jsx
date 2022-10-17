import { useNavigate } from "react-router-dom";
export default function Cart() {
  const navigate = useNavigate();
  return (
    <>
      <h1 style={{ background: "grey", padding: "20px", width: "100%" }}>
        Your cart
      </h1>
      <button
        onClick={() => {
          navigate("/");
        }}
        style={{
          height: "40px",
          width: "130px",
          color: "white",
          backgroundColor: "cornflowerblue",
          outline: "none",
          border: "none",
          borderRadius: "10px",
          marginTop: "20px",
          cursor: "pointer"
        }}
      >
        Go Back
      </button>
    </>
  );
}
