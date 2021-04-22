import AddProcess from "./components/addProcess/addProcess";
import Chart from "./components/chart/chart";
import Header from "./components/header/header";
import GlobalStyle from "./style/globalStyle";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <GlobalStyle />
      <Header />
      <AddProcess />
      <Chart />
    </div>
  );
}

export default App;
