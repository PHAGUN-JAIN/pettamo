import { FaUserCircle } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Navbar() {
  return (
    <>
      <p style={{ display: "inline", padding: "2rem", fontWeight: "bold" }}>
        pettamo
      </p>
      <IconContext.Provider
        value={{ style: { fontSize: "30px", margin: "0.5rem" } }}
      >
        <div style={{ float: "right", display: "inline" }}>
          <FaUserCircle />
        </div>
      </IconContext.Provider>
      {/* <div>
        <FaUserCircle />
      </div> */}
    </>
  );
}
