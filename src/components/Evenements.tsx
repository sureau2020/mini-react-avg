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
  isFucked: boolean;
  userChoice: number;
}

const Events = (props: Props) => {
  console.log("answer?:" + props.isAnswer);
  console.log("alert:" + props.alert);
  console.log("isPregnant:" + props.isPregnant);
  console.log("isVouloir:" + props.isVouloir);
  console.log("isSameChoice:" + props.isSameChoice);
  console.log("isLie:" + props.isLie);
  console.log("realChoice:" + props.realChoice);
  console.log("indexOfEvent:" + props.indexOfEvent);
  console.log("cloth:" + props.cloth);
  console.log("isFucked:" + props.isFucked);
  console.log("userChoice:" + props.userChoice);

  let finalChoice: number;
  let textLines: string[] = [];
  if (!props.isAnswer) {
    textLines = evenements[props.indexOfEvent].split("\n");
  } else {
    switch (props.userChoice) {
      case 0:
        textLines.push(conseils[0]);
        break;
      case 2:
        textLines.push(conseils[2]);
        break;
      default:
        textLines.push(conseils[1]);
        break;
    }
    if (props.userChoice === props.alert && props.isSameChoice) {
      textLines.push("章北海听从了你的建议，但你骗了他。");
    } else if (!props.isSameChoice && props.userChoice === props.alert) {
      textLines.push("你骗了章北海，但他也察觉出不对，没有听从你的建议。");
      textLines.push(`章北海最终选择了${actions[props.realChoice]}。`);
    } else if (props.isSameChoice && props.userChoice != props.alert) {
      textLines.push(`章北海听从了你的建议。`);
    } else {
      textLines.push(
        `章北海考虑再三，没有听从你的建议，而是选择了${
          actions[props.realChoice]
        }。`
      );
    }
    if (props.isSameChoice) {
      finalChoice = props.userChoice;
    } else {
      finalChoice = props.realChoice;
    }
    switch (finalChoice) {
      case 0:
        if (finalChoice === props.alert) {
          textLines.push("撤退遇到危险。");
        } else {
          textLines.push("撤退没遇到危险。");
        }

        break;
      case 1:
        if (finalChoice === props.alert) {
          textLines.push("原地躲藏遇到危险。");
        } else {
          textLines.push("原地躲藏没遇到危险。");
        }

        break;
      default:
        if (finalChoice === props.alert) {
          textLines.push("前进遇到危险。");
        } else {
          textLines.push("前进没遇到危险。");
        }
        break;
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

export default Events;

const evenements = [
  `生育`, //没搞呢
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
