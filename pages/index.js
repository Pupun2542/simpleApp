import useName from "../hooks/useName";

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/value")
  const data = await res.json()
  return { props: {data}}
}

export default function Home({data}) {
  const { getValue, updateValue, value } = useName(data);
  return (
    <div>
      <form onSubmit={updateValue}>
        <div style={{ display: "flex" }}>
          <input name="name" />
          <button type="submit">Submit</button>
        </div>
      </form>
      <button onClick={getValue}>refresh</button>
      <p>Result: {value}</p>
    </div>
  );
}
