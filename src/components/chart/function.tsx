// 도착시간 정렬
export const SortOfTime = (FuncArr: any) => {
  for (let i = 0; i < FuncArr.length; i++) {
    for (let j = 0; j < FuncArr.length - 1; j++) {
      //
      if (FuncArr[j].endTime > FuncArr[j + 1].endTime) {
        let temp = FuncArr[j];
        FuncArr[j] = FuncArr[j + 1];
        FuncArr[j + 1] = temp;
      }
      if (i === FuncArr.length - 1) return FuncArr;
    }
  }
};

// 실행시간 합
export const DecisionWidthValue = (FuncArr: any): number => {
  let sum: number = 0;
  for (let i = 0; i < FuncArr.length; i++) {
    let pTime: any = FuncArr[i]?.ptime;
    sum += parseInt(pTime);
    if (i === FuncArr.length - 1) return sum;
  }
  return 0;
};

// id 찾아주는 곳
const node = (e: string | number) => {
  return document.getElementById(`${e}`);
};

// 그래프 찍어주는 함수
const InsertNode = (FuncArr : any, i : number, color: string) => {
  let div = node(FuncArr[i].id);
  return div?.insertAdjacentHTML(
    "beforebegin",
    `<div style="background-color:${color};width:${
      100 / f.DecisionWidthValue(FuncArr)
    }%" />`
  );
};
