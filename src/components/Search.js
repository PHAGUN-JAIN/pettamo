import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
    <>
      <div>
        <p style={{ textAlign: "center", marginTop: "5rem" }}>
          Find pet service{" "}
        </p>
        <input
          style={{
            alignSelf: "center",
            marginLeft: "7rem",
            border: "2px solid black",
          }}
          placeholder="pet grooming"
        />
        <button style={{fontSize:"18px"}}>
          <FaSearch />
        </button>
      </div>
    </>
  );
}
