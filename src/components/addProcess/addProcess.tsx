import InforOfChapter from "../public/InforOfChapter";
import ManageProcess from "./manageProcess";
import ScheduleSort from "./scheduleSort";
import * as s from "./styles";

export default function AddProcess() {
  return (
    <>
      <s.AllWrapper>
        <ScheduleSort />
        <InforOfChapter title="프로세스 정보" />
        <ManageProcess/>
      </s.AllWrapper>
    </>
  );
}
