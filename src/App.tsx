import AddProcess from "./components/addProcess/addProcess";
import Header from "./components/header/header";
import GlobalStyle from "./style/globalStyle";

function App() {
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
    <GlobalStyle/>
    <Header/>
    <AddProcess/>
    </div>
  );
}

export default App;
