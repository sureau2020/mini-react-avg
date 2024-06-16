interface Props {
  alert: number;
  isAnswer: boolean;
  isPregnant: boolean;
  isVouloir: boolean;
  isSameChoice: boolean;
  isLie: boolean;
  //realChoice: number;
  indexOfEvent: number;
  cloth: string;
  isFucked: boolean;
  userChoice: number;
  exit: number;
}

const Events = (props: Props) => {
  console.log("answer?:" + props.isAnswer);
  console.log("alert:" + props.alert);
  console.log("isPregnant:" + props.isPregnant);
  console.log("isVouloir:" + props.isVouloir);
  console.log("isSameChoice:" + props.isSameChoice);
  console.log("isLie:" + props.isLie);
  console.log("indexOfEvent:" + props.indexOfEvent);
  console.log("cloth:" + props.cloth);
  console.log("isFucked:" + props.isFucked);
  console.log("userChoice:" + props.userChoice);

  let finalChoice: number = 0;
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
      if (props.alert === 1) {
        finalChoice = 0;
        textLines.push(`章北海最终选择了${actions[finalChoice]}。`);
      } else {
        finalChoice = 1;
        textLines.push(`章北海最终选择了${actions[finalChoice]}。`);
      }
    } else if (props.isSameChoice && props.userChoice != props.alert) {
      textLines.push(`章北海听从了你的建议。`);
    } else {
      if (props.userChoice === 0) {
        if (props.isFucked) {
          finalChoice = props.alert;
        } else {
          props.alert === 1 ? (finalChoice = 2) : (finalChoice = 1);
        }
        textLines.push(
          `章北海考虑再三，没有听从你的建议，而是选择了${actions[finalChoice]}。`
        );
      } else {
        if (props.isFucked) {
          finalChoice = props.alert;
        } else {
          finalChoice = findRemainingNumber(props.alert, props.userChoice);
        }
        textLines.push(
          `章北海考虑再三，没有听从你的建议，而是选择了${actions[finalChoice]}。`
        );
      }
    }
    if (props.isSameChoice) {
      finalChoice = props.userChoice;
    }
    switch (finalChoice) {
      case 0:
        if (
          finalChoice === props.alert ||
          (props.isFucked && !props.isSameChoice)
        ) {
          textLines.push("撤退遇到危险。");
        } else {
          textLines.push("撤退没遇到危险。");
        }

        break;
      case 1:
        if (
          finalChoice === props.alert ||
          (props.isFucked && !props.isSameChoice)
        ) {
          textLines.push("原地躲藏遇到危险。");
        } else {
          textLines.push("原地躲藏没遇到危险。");
        }

        break;
      default:
        if (
          finalChoice === props.alert ||
          (props.isFucked && !props.isSameChoice)
        ) {
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

function findRemainingNumber(num1: number, num2: number): number {
  const numbers = [0, 1, 2];
  const remaining = numbers.filter((num) => num !== num1 && num !== num2);
  if (remaining.length !== 1) {
    throw new Error("Invalid input numbers");
  }
  return remaining[0];
}

const evenements = [
  `魔物的孩子并不安分，章北海行动时也不断在他甬道内刺激着敏感点。
他的小腹被魔物撑到鼓起一小块，但万幸的是没有痛感，只有保守内敛的人所无法承受的快感。
魔物的蠕动在加快，章北海跌跌撞撞地在舰艇走廊上摸索。
他记得前方不远处是他曾经的舱室。`,
  `敞亮的现代办公楼在白天依然顶灯全开。
章北海在无人的开放办公区转了一会，忽然发现前方转角处露出了一节……章鱼触手？
那触手同婴儿手臂一般粗，呈现出诡异的鲜艳粉色，正无规律的运动着。
这显然不该出现在办公楼里。`,
  `一片树林突兀地出现在了前方。
章北海探索到树林深处，一片空地在树丛后出现。
五六个冒险家围坐在空地中。他们身高都将近两米，体型也比人类厚重，毛茸茸的动物毛发从衣袖里钻出，头部则如同巨型猫头。
似乎是听到了章北海的脚步声，猫人之一的耳朵动了动。`,
  `古堡走廊模样的空间占据了章北海周围。
前方不远处，一个陈旧的木箱横在走廊上。
要前进过去开箱子吗？章北海在等待你的意见。`,
  `章北海走进一条简单的室内走廊，右侧的窗户向外望去只有蓝色。
左边木门上的观察窗被油脂糊住了，看不清室内。
但木门旁的告示上清晰地写着“实操教室（1）”`,
  `章北海忽然被面目不清的人挤在中间。
回过神来，他发现自己似乎在早高峰的一节的地铁上。
他试图和周围人交谈，但无人回应，只听见列车轰鸣。
他等了一会，不见车辆到站。
但前方的下一节车厢，似乎在发光……？`,
  `一片树林突兀地出现在了前方。
章北海探索到树林深处，一片空地在树丛后出现。
一坨半人高的果冻在空地中诡异地蠕动，章北海仔细观察果冻，果冻内未有内脏。`,
  `不知从哪里冒出来的大雾阻碍了章北海的视线。
不知不觉间，他已经站上了平整的水泥地，左手边有柱路牌：
“我在色情游戏很想你”
章北海愣了两秒，默默去看路牌的背面。
背面的字倒是变了：“不要紧张，这是一个色情游戏，不恐怖。”`,
  `章北海走下楼梯，发现自己来到了一个类似中世纪地牢的地方。
不过空气中弥漫着某种清新的花香，而牢房的门都开着，空无一人。
他往前没走两步，听到远处传来了马蹄声，越来越近。`,
  `厚重、雕花华美的大门在章北海眼前缓缓打开。
门后的走廊依然金碧辉煌得像凡尔赛宫，月光透过两侧的大落地窗洒下来。
章北海刚走两步就看见窗外的花园里站着两个人，其中一个看着像俄罗斯人的男子正愤怒地说着什么。
多年政工留下的经验告诉章北海，这个人八成在骂上级。
他很快来到了走廊尽头，这扇门后似乎就是主要房间，或者……是间主要办公室？`,
  `头顶的三叶风扇在呼哟哟地转，这家现代模样的小餐馆虽然诡异地没有一个人，但也让章北海倍感亲切。
他看到前方的柜台上摆着一碗新鲜出炉的牛肉面。
但后厨不像有人。`,
  `再睁开眼时，章北海发现自己身处一个更衣室大小的小隔间。
小隔间的墙壁光滑细腻，章北海说不清是什么材料，但肯定这材料来自未来。
他身后的门上写着入口，面前的写着出口。
正当章北海犹豫时，写有出口的灯箱亮了。
前方传来柔和的中性声音：“请进。”
`,
  `这一片似乎刚下过雨，石板路上还有水渍。
章北海走在公园的小道上，难得感到悠闲。
前方不远处还有只奶牛猫和金毛在并排慢慢地走，看起来也像在散步。`,
  `凌冽的寒风让这漆黑一片的夜更显可怖。
章北海在片没有人的荒地上转了一会，确定了那个像从影视城里搬出来的酒馆，是唯一的光源。`,
  `公交车上零零散散地坐着几个无面人。
秋天的夕阳洒进车里，但章北海望向车外，只能看见无尽的雾。
一个高挑的男性无面人坐在他右手边，挡住了他下车的路。
那人身着像未来人，身高体型比起现代人也更像星舰人。
章北海莫名觉得熟悉，但无面人似乎听不到自己说话。`,
  `章北海死咬着嘴里软肉，强迫自己保持清醒，可大脑在药效作用下不可避免地变得昏沉。
他在满是无面人的街区中快速穿梭，身下不断流出的液体也在提醒他时间不多了。
终于，他找了一条无人的小巷，打算解决一下药效的问题。`,
  ``,
];

const conseils = [
  `你建议章北海撤退。\n`,
  `你建议章北海原地躲藏。\n`,
  `你建议章北海前进 \n`,
];

const actions = ["撤退", "原地躲藏", "前进"];
