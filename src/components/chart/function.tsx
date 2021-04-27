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

// get element by id 함수
const node = (e: string | number) => {
  return document.getElementById(`${e}`);
};

// 그래프 찍어주는 함수
export const InsertNode = (FuncArr: any, i: number, color: string) => {
  let div = node(FuncArr[i].id);
  return div?.insertAdjacentHTML(
    "beforebegin",
    `<div style="background-color:${color};width:${
      100 / DecisionWidthValue(FuncArr)
    }%" />`
  );
};

// 타임라인 찍는 함수
export const CanvasTimeLine = (FuncArr: any): boolean[] => {
  let someArr = [];
  for (let i = 0; i < DecisionWidthValue(FuncArr); i++) {
    if (i % 10 === 0) {
      someArr.push(true);
    } else {
      someArr.push(false);
    }
    if (i === DecisionWidthValue(FuncArr) - 1) return someArr;
  }
  return [];
};

// lim 배열까지의 실행시간 합
export const RestricteReturn = (FuncArr: any, lim: number): number => {
  let sum = 0;
  for (let i = 0; i < lim; i++) {
    let ptime: string = FuncArr[i].ptime;
    sum += parseInt(ptime);
    if (i === lim - 1) return sum;
  }
  return 0;
};

// 실행시간에 따라 정렬
export const SortOfPTime = (FuncArr: any) => {
  for (let i = 0; i < FuncArr.length; i++) {
    for (let j = 0; j < FuncArr.length - 1; j++) {
      if (parseInt(FuncArr[j].ptime) > parseInt(FuncArr[j+1].ptime)) {
        let temp = FuncArr[j];
        FuncArr[j] = FuncArr[j + 1];
        FuncArr[j + 1] = temp;
      }
      if (i === FuncArr.length - 1) return FuncArr;
    }
  }
};

export const Sjf = (indexArr:any,sortArr : any,arr:any) => {
  let FuncArr: any[] = [];
  // 여기서 sjf 정렬
  for (let i = 0; i < indexArr.length; i++) {
    FuncArr = [];
    for (let j = i; j < indexArr.length; j++) {
      // 여기서 실행시간 합보다 도착시간이 작거나 같은 애들 걸러주고
      if (RestricteReturn(indexArr, i) >= parseInt(arr[j].endTime)) {
        FuncArr.push(arr[j]);
      }
    }
    const SPArr: any[] = SortOfPTime(FuncArr);
    for (let k = 0; k < SPArr?.length; k++) {
      for (let j = 0; j < sortArr.length; j++) {
        // 여기에서 id 안겹치면 조건 만족하므로 sortArr에 넣어주면 됨
        if (SPArr[k].id === sortArr[j].id) {
          break;
        }
        if (j === sortArr.length - 1) {
          sortArr.push(SPArr[k]);
        }
      }
    }
  }
  return sortArr;
};