import { Provider } from "react-redux";
import Index from "./components";
import store from "./redux/store";
import GlobalStyle from "./style/globalStyle";

export default function App() {
  return (
    <Provider store={store}>
      <GlobalStyle/>
      <Index/>
    </Provider>
  );
}