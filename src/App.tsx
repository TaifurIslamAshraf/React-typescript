import "./App.css";
import StylePropsTypes from "./components/user-defined-types/StylePropsTypes";

function App() {
  const students = [
    {
      name: "Taifur islam",
      age: 22,
      isRegisterd: true,
      lang: ["English", "bangla", "Arabic"],
    },
    {
      name: "Rakibul islam",
      age: 23,
      isRegisterd: false,
      lang: ["English", "bangla"],
    },
    {
      name: "Hasan",
      age: 24,
      isRegisterd: true,
      lang: ["English", "bangla", "Hindi"],
    },
  ];

  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>Lerning react typecript</p>
      <hr />
      <br />
      {/* <Users name="Taifur islam" age={22} isRegisterd={true} /> */}
      {/* <Student students={students} /> */}
      {/* <DataFetch status="loding" /> */}
      {/* <Card>
        <h2>Name: Taifur islam</h2>
        <h3>Email: Taifurislamashraf@gmail.com</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem quasi
          omnis eligendi ipsam maxime culpa nostrum quam et quis a!
        </p>
      </Card> */}
      <StylePropsTypes
        style={{ color: "yellow", backgroundColor: "red", padding: "10px" }}
      />
    </div>
  );
}

export default App;
