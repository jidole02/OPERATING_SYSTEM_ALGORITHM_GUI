import { useSelector } from "react-redux";
import AddProcess from "./addProcess/addProcess";
import Chart from "./chart/chart";
import Fcfs from "./chart/fcfs";
import Header from "./header/header";

export default function Index() {
  const data:any = useSelector(state=>state);
  const ready = data.ready.ready;
  return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Header />
        <AddProcess />
        <Chart />
        {ready && <Fcfs/>}
      </div>
  );
}