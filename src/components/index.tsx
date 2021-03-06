import { useSelector } from "react-redux";
import AddProcess from "./addProcess/addProcess";
import Fcfs from "./chart/fcfs";
import Sjf from "./chart/sjf";
import Header from "./header/header";
import Footer from "./result/footer";

export default function Index() {
  const data: any = useSelector((state) => state);
  const ready = data.ready.ready;
  const schedule = data.schedule.schedule
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
      {
        ready?
        schedule === 'SJF'
        ? <Sjf/>
        : schedule === 'FCFS'
        ? <Fcfs/>
        :''
        :''
      }
      <Footer />
    </div>
  );
}
