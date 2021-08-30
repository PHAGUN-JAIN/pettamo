import Card from "./Cards";
import data from "../data.json";
export default function Result() {
  return (
    <>
      <div>
        <p
          style={{ fontWeight: "bold", marginTop: "5rem", textAlign: "center" }}
        >
          Grooming Services near you
        </p>
        {data.map((val) => {
          return (
            <>
              <Card heading={val.heading} description={val.description} />
            </>
          );
        })}
      </div>
    </>
  );
}
