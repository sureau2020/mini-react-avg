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
          const tmp = backNormal[props.indexOfEvent].split("\n");
          textLines = textLines.concat(tmp);
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
那人身着像未来人，身高体型比起现代人也更像星舰人，但却有点半透明。
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

const backNormal = [
  `他刚回到爬梯下的小空间，便腿一软倒在角落里。
魔物似乎很不舍他温暖潮湿的蜜穴，一直在里面慢慢地磨蹭、顶弄、涨大。
章北海被狠狠碾着敏感点，用尽全力咬紧牙关才没让任何呻吟流出。
  
在两次高潮后魔物仍不肯出来。
章北海为避免力竭，无奈只得褪下已经濡湿的衣服，闭着眼掰开了自己的大腿。
魔物终于慢慢吞吞地尽数钻了出来。
它不可名状的眼睛回头看这个生育自己的男人，后者立刻闭上了腿，正大口喘着气，面颊潮红，半眯着眼谨慎地看自己。
魔物离开了。`,
  `他双眼紧盯着那枚诡异的触手，同时也慢慢退后与之拉开距离。
它往章北海的方向伸了伸，但最终没敢现原形。
在确认自己离开对方视线范围后，章北海快速离开了这诡异空间。
周围的世界又开始变化。`,
  `齐刷刷看过来的猫头人令不是furry控的章北海毛骨悚然。
这样的体型想必力量、速度都惊人，一对五的自己没有任何胜算。
于是他理智地不做任何停留，立刻远离了这片空地。
没几秒，他的身边擦过了两支猫头人射出的箭。

万幸的是，他们并没有追上来。
章北海离开了这片树林。`,
  `他刚退远几步，原本的木箱忽然自己猛地打开。
一阵草木的奇异味道袭来。
警觉的章北海掩住口鼻迅速离开了。`,
  `窗户上的油脂让章北海感到很不舒服，他于是跟着直觉离开。
当他离开转角时，一个无面人青年打开门，从教室探出头来。
他仔细观察教室两边，发现都没人，于是又回屋，关上了门。`,
  `这种光芒让他感觉不对，于是在人群中钻着往相反方向走。
常年的海上生活磨练了他的平衡力，尽管这里比常规地铁颠簸一些，但他还是很快离开了这节车厢。
中途有几只手捏住他的大腿，也都被他毫不留情地一一拍开。
列车此时忽然减速进站，他便下了车。
站台的景象却与他的想象不同。`,
  `他很难说清这生物是什么构造，有什么弱点，于是立刻转身离开了。
史莱姆见他离开，立刻蠕动着追过来。
不过它的动作始终不如人类灵活，很快便被甩在身后。`,
  `他在路牌上看不出更多信息，便转身离开了。
这路牌似乎真是一个普通路牌，很快便被大雾遮掩。`,
  `他听到有声音靠近，便转身离开了。
果然不过半分钟，一身闪亮铠甲的半人马提着长枪走了过来。
他没戴头盔，一张俊脸被火烛映得更加性感。
半人马环顾四周，又仔细嗅了嗅，似乎认出来了来者是谁。
他看向章北海离开的方向，沉默两秒后最终长叹了口气。
但他还是举起长枪，神圣的光瞬间照亮了地牢。
地牢外的章北海忽然也看到自己的身体发光了一瞬，随后，他感觉自己更有活力了，身上的衣服在光芒散去后，也变成了崭新的常服。`,
  `但比起门后的未知，他更在乎窗外那个似乎可以交流的人类。
于是章北海转头离开，却在刚碰到来时的门时听到一声响。
主房间的门打开了。
章北海没有回头，径直推门离开。
他似乎听到身后的人轻笑一声，但最终没有人追出来。
他感觉后颈一阵凉意，再低头，发现自己身上的衣服全部消失，又变成了黑白哥特长裙。
裙子材质很好，运动起来很方便，就是漏风，他穿着也羞耻。`,
  `他犹豫再三，还是不想碰这种来历不明的食物。
于是章北海转身离开。
在他身后，牛肉面慢慢散发出草木的奇异味道。`,
  `他装作要进，却突然转身推门跑了出去。
隔间的门上浮现了一个红色哭脸表情，相同的机械音传出
“已加强安保。”`,
  `他心中一软，不知怎么的不想打扰这份恬静，便转身离开了。
像通人性一般的奶牛猫回头看了他一眼，又继续散步。`,
  `他靠近酒馆时，听到里面有人声，是种他听不懂也听不出来语系的语言。
这让他感觉不太对，顶着寒风匆匆离开。
没有人追出来。`,
  `撤退，章北海刚这么想着，身边的无面人忽然显现出脸来。
那张儒雅又不失威严的熟悉面庞出现在身边，却没让章北海觉得亲切。
他知道眼前这个褚岩绝不是自己认识的那个。
旁边的幽灵优雅地翘起二郎腿，挡住章北海的所有去路，而后者刚想开口，却发现自己全身僵硬，完全无法动弹。
正当他疑惑幽灵是否能碰到自己，褚岩却放下二郎腿，像抱毛绒玩具一样实在地将他抱在了腿上。
章北海依然无法动弹，只能眼看幽灵褚岩带着微笑，一件件脱下自己的衣服。
随后，他的大手揉捏玩弄起章北海的胸部，无法动弹的人只能被动接受所有的快感，任凭自己的乳粒被拨弄拉扯。
他下面的水不受控地流出来，在幽灵完好整洁的衣服上留下水渍。
车厢里其他无面人此时突然转头来盯着章北海看，后者却连避开视线都做不到。
在迷乱中，褚岩又掏出了一根麻绳，熟练又精确地捆好被静止的人，让麻绳碾过他的每个敏感点。
最后，他又帮章北海一件件穿好衣服，终于解除了他的静止。
章北海迅速后退到一边，却发现自己现在每动一下，下面的麻绳都会磨到蜜穴和花蕊，给他酥酥麻麻的快感。
他去扯颈口的绳子，后者却丝毫不动，甚至绷得更紧。
公交车在这时到站开门。
章北海无奈，只得这样离开。
下面被磨出来的水很快就浸染了绳子。`,
  `他注意到这条小巷气氛不对，于是又回到刚刚路过的隐蔽休息角落，还搬来一块轻板材，堪堪挡住入口。
他靠着墙，脱力坐在靠垫上，半褪下快要湿透的裤子，同时抚慰起前端和花蕊。
他不常做这种事，对自己的敏感点还没有对象了解的多。
见药效得不到缓解，他学着别人对他做的那样，将两根手指伸进自己早已水流成河的蜜穴。
章北海难得笨拙的动作将自己弄得有点疼，不太爽。
但捣鼓了好一会，也总算是缓解了药效。
`,
];
