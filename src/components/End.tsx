interface Props {
  end: number;
  sin: number;
  wei: number;
  chu: number;
  wu: number;
}

function End(props: Props) {
  let finalEnd: number = 3;
  if (props.sin < 10) {
    finalEnd = findLastIndexOfMax(props.chu, props.wei, props.wu);
  }

  return <div className="text-warning">{ends[finalEnd]}</div>;
}

export default End;

const ends: string[] = [
  `小褚结局`,
  `维维结局`,
  `小吴结局`,
  `堕落结局`,
  `后宫结局`,
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
