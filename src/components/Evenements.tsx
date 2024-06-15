interface Props {
  alert: number;
  isAnswer: boolean;
  isPregnant: boolean;
  isVouloir: boolean;
  isSameChoice: boolean;
  isLie: boolean;
  realChoice: number;
  indexOfEvent: number;
  cloth: string;
}

const Alert = (props: Props) => {
  let textLines: string[] = [];
  if (!props.isAnswer) {
    textLines = evenements[props.indexOfEvent].split("\n");
  } else {
    if (props.isPregnant) {
    }
  }

  return (
    <div className="text-warning">
      {textLines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
};

export default Alert;

const evenements = [
  `生育`,
  `前面出现了一个触手`,
  `出现了一队兽人`,
  `箱子`,
  `教室`,
  `地铁`,
  `史莱姆`,
  `不要紧张，这是一个涩情游戏，不是恐怖游戏`,
  `人马吴`,
  `吸血鬼维维`,
  `小餐馆`,
  `mob囚禁，机械`,
  `小奶牛猫小金毛`,
  `酒馆`,
  `幽灵透明人小褚`,
  `自慰`,
];

const conseils = [
  `你建议章北海撤退。\n`,
  `你建议章北海原地躲藏。\n`,
  `你建议章北海前进 \n`,
];

const actions = ["撤退", "原地躲藏", "前进"];
