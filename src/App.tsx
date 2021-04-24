import { Provider } from "react-redux";
import AddProcess from "./components/addProcess/addProcess";
import Chart from "./components/chart/chart";
import Header from "./components/header/header";
import store from "./redux/store";
import GlobalStyle from "./style/globalStyle";

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
