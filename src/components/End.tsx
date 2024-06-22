interface Props {
  end: number;
  sin: number;
  wei: number;
  chu: number;
  wu: number;
  hideEnd: boolean;
}

function End(props: Props) {
  let finalEnd: number = 3;
  if (props.sin < 10) {
    if (props.sin <= 0) {
      finalEnd = 5;
    } else if (
      (props.hideEnd && props.chu >= 2, props.wei >= 2, props.wu >= 2)
    ) {
      finalEnd = 4;
    } else {
      finalEnd = findLastIndexOfMax(props.chu, props.wei, props.wu);
    }
  }

  return <div className="text-warning">{ends[finalEnd]}</div>;
}

export default End;

const ends: string[] = [
  `小褚结局
  条件：条件：不满足后宫结局+遇见小褚的次数最多`,
  `维维结局
  条件：不满足后宫结局+遇见维维的次数最多
  `,
  `小吴结局
  条件：不满足后宫结局+遇见小吴的次数最多`,
  `堕落结局
  条件：堕落指数满`,
  `后宫结局
  条件：触发雄竞事件+遇见三人的次数>=2`,
  `真结局：真正的种地玩家在黄油里也可以种地
  条件：找到出口时堕落指数<=0`,
];

function findLastIndexOfMax(a: number, b: number, c: number): number {
  const numbers = [a, b, c];
  let maxIndex = 0;
  if (a === b && a === c && b === c) {
    return 4;
  }

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] >= numbers[maxIndex]) {
      maxIndex = i;
    }
  }

  return maxIndex;
}
