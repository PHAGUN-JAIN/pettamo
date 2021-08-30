const container = {
  width: "80vw",
  border: "1px solid black",
  borderRadius:"25px",
  margin:"5% auto",
  padding:"1rem"
};

export default function Card(props) {
  return (
    <>
      <div style={container}>
        <h3>{props.heading}</h3>
        <p>{props.description}</p>
      </div>
    </>
  );
}
