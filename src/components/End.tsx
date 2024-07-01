interface Props {
  end: number;
  confidence: number;
  sin: number;
  wei: number;
  chu: number;
  wu: number;
  hideEnd: boolean;
}

function End(props: Props) {
  let finalEnd: number = 3;
  let colour: string = "text-warning";
  if (props.sin < 10) {
    if (props.sin <= 0) {
      colour = "text-white";
      finalEnd = 5;
    } else if (props.confidence >= 10) {
      colour = "text-white";
      alert("章北海忽然看向了你。");
      alert("章章北北海海忽忽然然看看向向了了你你。");
      alert("他发现你了。");
      alert(`“别害怕。”他语气温和，“刚刚给我指错路时不是笑得很开心吗？”`);
      alert(
        `“不用道歉。”他说。“我知道你在你的世界里是个很棒的孩子，没关系的。”`
      );
      alert(`“你对我做什么都没关系的。”他轻声说，“我相信你。”`);

      finalEnd = 6;
    } else if (
      props.hideEnd &&
      props.chu >= 2 &&
      props.wei >= 2 &&
      props.wu >= 2
    ) {
      colour = "text-danger";
      finalEnd = 4;
    } else {
      colour = "text-info";
      finalEnd = findLastIndexOfMax(props.chu, props.wei, props.wu);
    }
  }

  let textLines = ends[finalEnd].split("\n");

  return (
    <div className={colour}>
      {textLines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
}

export default End;

const ends: string[] = [
  `
在周围的景象归于虚无时，章北海终于意识到出口并非一个实体地点，而是输入一条命令、或是满足几个条件。
他从黑暗中睁眼，原本包裹他的不透明胶囊舱也打开前盖。
外部舱室的灯光被贴心调暗，他个子高挑的新人类伴侣向他伸出一只手。
章北海拉上褚岩递来的手，任后者将自己拽出了胶囊仓。
他谨慎地瞥了一眼下身，发现并无湿痕后又看向褚岩。
后者将他的小动作尽收眼底，却只是问：“感觉怎么样？”
“不太好，”章北海摇了摇头，“这些VR世界的生成逻辑是什么？”
“都是根据体验者的潜意识和记忆生成的，体验机器本身不会有导向。”褚岩答得认真，却见章北海的耳朵逐渐泛红。
公元人清了清嗓子——虽然有点此地无银三百两，但自己刚刚的经历确实值得清清嗓子——又问：“这些体验会有记录吗？”
褚岩终于没憋住笑了两声，随后心情颇好地回答身旁那位一看就体验到了怪东西的“老人”：“不会。所有的体验仅发生在体验者的脑海中，虽然我们有一些代价昂贵的方法可以推测出ta经历了什么，但没有人会这么做。”
“VR体验是远行舰的传统娱乐项目，星舰国际有一套完善的隐私法规禁止任何人以任何方式窥探他人经历。所有人都听从于该项法规。”
章北海隐约觉得他关于听从法规的描述有些别扭，却又被对方的靠近打断了思路。
“不过前辈，常规来讲，伴侣之间都会公开体验经历。”那位儒雅的舰长没有飘低，而只是俯身凑到他面前，遮住他大半个身子。
关系稳定之前，褚岩是全星舰地球喊他“前辈”喊得最少的那个，反倒现在确认关系了，却要时时提醒他他们之间的年龄差距，尤其在床上喊得最欢，好像“前辈”是世界上唯一的称呼。
章北海听他算盘声听得清清楚楚，便径直掰开他的肩膀往前走，但一想起幽灵褚岩的手在他身上游走，他的双颊又不自然地爬上绯红：“该去做燃料系统例行检查了。”
褚岩当然没指望从他保守的爱人这里得到什么答案，便只是笑了笑，跟上了章北海。
可他前辈却在开门前拽住他的胳膊，飘到他耳边：“晚上回来可以跟你说。”
他有些惊讶地抬头，章北海早就开门走远了。
=== 褚岩结局：EXPERIENCE MACHINE ===
达成条件：不满足隐藏结局 + 遇见小褚的次数最多`,

  `
似乎是满足了什么脱离条件，章北海忽然陷入无边的空白。
他终于从这个生动又漫长的淫邪春梦中脱离，但还不等他理清思绪，更加真实的快感再次席卷他的全身。
章北海的乳头早已红润挺立，似乎是被亵玩已久，而下身也更加泥泞，蜜穴和后穴都往外淌水，而一根巨大的阴茎正顶在他的蜜穴穴口。
“醒了？”托马斯维德，他的恋人，正撑在他上方，饶有兴趣地看他刚睡醒还有些迷茫的样子。
章北海立刻想将他推开，却发现自己的双手早就被对方绑起来，拴在了床头。
“你下次想玩这些要提前告诉我。”他的双腿早被维德顶成M状，他也自知今晚上没得商量，肯定有他受的。
那金发碧眼的雕塑伏在他耳边吹气，低沉性感的嗓音激得章北海呼吸一顿：“我要是提前告诉你，你刚刚还能叫得那么爽吗？”
“叫什……”还不等章北海问完，维德猛地整根没入了他的蜜穴。
似乎刚刚被照顾得很好的蜜穴完美地契合了维德的形状，热情的穴肉拉着对方往里操，一下又一下碾过章北海的每个敏感点。
身上人满意地看着他再一次溺于欲望的涡流，毫不吝啬地给予着他无法消受的快感。
=== 维德结局：水煎包 ===
达成条件：不满足隐藏结局 + 遇见维维的次数最多`,
  `
似乎是满足了什么脱离条件，章北海忽然陷入无边的黑暗。
他从黑暗中脱出，终于惊醒。
微弱的亮光从厚重窗帘的缝隙中透进房间，章北海坐在双人床上，旁边熟悉的家用核电杯将他拉回现实。
床上的另一人睡眠也浅，被他的动静吵起来，此时迷迷糊糊地拽上了章北海的手腕。
“怎么了北海？”
被提问者于是重新躺下，又被爱人侧身过来，长手揽住他的后背，将章北海拉进了自己怀里。
吴岳的声音黏黏糊糊，眼睛也还没睁开，一张头发睡得乱糟糟的帅脸贴近自己爱人。
“做噩梦了，没事。”章北海看了眼墙上的电子显示，周六早上还不到六点，还能再睡会。
吴岳用鼻尖蹭蹭他：“梦着什么了？”
“梦见你变成马了。”
迷迷瞪瞪的人沉默两秒才笑出来。
“什么乱七八糟的。”
吴岳又沉默了一会，在章北海以为他又睡了时才再出声：
“什么马？帅吗？”
“……还行。”
“还行是什么意思？”吴岳终于睁开眼，清亮的眼睛还像他24岁第一次遇见章北海那样。
他彻底将章北海抱在怀里，手上下乱揉：“哪里不帅了？”
“我说的是马，不是你，”这人迷糊起来还像24岁一样幼稚，搞得章北海有点无奈，“你别乱摸。”
但为时已晚，在他说这话前，他的丈夫已经将手探进了他的内裤里。
那一片粘腻让吴岳挑眉。
“还是个春梦啊？”
两人相顾无言。
=== 吴岳结局：别拉开窗帘 ===
达成条件：不满足隐藏结局 + 遇见小吴的次数最多`,

  `随着“哐镗”一声响，通讯器摔在了地上。
章北海似乎抛下你离开了，信号再也检测不到他的存在。
你不知道他是在无意中弄丢了你，还是自愿永远沉沦在这个色欲地狱，每天被这么多人灌满。
=== 堕落结局：被丢下了！ ===
达成条件：堕落指数满了`,

  `伴随着急促的呼吸声，章北海从噩梦中醒来。

但睁开眼睛的瞬间，腰部和腹部的酸痛，以及不可言说的地方被过度使用后的肿胀感，让他一时分不清梦境和现实，他呆呆地注视着天花板，大脑变得空白，几乎无法恢复思考能力。

“醒了？”

大提琴一般动听的男音在他左耳边响起，金发的英俊男人带着若有若无的冷淡笑意望着他，章北海用了几秒，才反应过来自己身旁的温度来源何处，在此之前，他一直枕着这个人的胳膊。

关于梦境的记忆正在流逝，不知为何，仿佛不属于自己的记忆正在流入，眼前的人也由陌生逐渐变得熟悉，章北海张了张嘴，吐露出三个字来：“托马斯……”

他发现自己的嗓音沙哑得可怕。

大约是觉得章北海难得变呆的样子很可爱，维德竟然俯下身用鼻梁蹭了蹭他的眉弓，而后亲吻他的鬓角道：“你今早也不知道梦见了什么不该梦的，难得和我一起赖床……”

和眼前人那耳鬓厮磨的情景本应该让章北海觉得违和，但此刻他却并不想拒绝：“我不记得了，你应该喊我起来。”

“我希望你梦见的是我，因为你叫得很……”

“是啊，不知道北海梦见了哪个畜生。”

门被砰得一声推开，面色铁青的吴岳走了进来，尤其是看到章北海依偎在维德怀里后，他漂亮的面孔变得一片冰冷。

“吴岳。”

章北海喊了他的名字后，才看到面色阴沉的英俊男人由雷暴转多云，他吐出一口气，在章北海身边坐下，牵起章北海的一只手：“我给你温了牛奶，昨晚辛苦你了，都是我们的错，北海……”

“我也想喝，吴，给我也拿一杯。”

维德一边把章北海往怀里搂了搂，一边伸手向吴岳讨要，被面色阴沉的吴岳一巴掌拍开：“滚。”

章北海心里有些无奈，他顺着吴岳的动作坐了起来，维德也并没有阻拦他离开，只是哼了一声：“昨晚折腾章最厉害的人可不是我。”

吴岳闻言也垂下眼睛，叹了口气，不再多言，只是轻轻地给章北海按揉着腰。他们这些年龄大的确实对年龄小的没办法，毕竟和小孩吃醋，是什么道理……

“褚岩呢，”章北海问，“今天没见着他，他出去了吗？”

吴岳轻声答：“他在楼下煮粥，等一会我们下去，先喝掉牛奶吧。”

维德偏头冷冷道：“不过一会儿没见，真是挂心了。”



在吴岳和维德的注视下，章北海喝掉了那杯温度正好，还加了糖的牛奶，甘甜，顺滑，是现实中才能尝到的味道。

刚才不知道为什么，仿佛大梦初醒一般的疲惫和困惑一扫而光，记忆不断涌入，为何和三个丈夫成婚，制衡他们的关系已达成现在的处境，这里是鸡飞狗跳，但又美满和谐的家庭。

吴岳俯身给了他今早的第一个早安吻，维德攥紧了他的另一只手，若有若无的粥的香味传了上来，章北海听见褚岩喊自己的温柔低沉的声音。


他应当感到幸福。


=== 隐藏结局：梦幻后宫 ===
达成条件：触发雄竞事件+遇见三人的次数>=2`,

  `
章北海忽然看向镜头外。
再一次。
再一次。
再一次。
再一次。
再一次。
再一次。
再一次。
再一次。
112358号叹了口气，最近的几百次模拟总是这样，无论如何隔离这个人类的记忆，他总会找到世界中的微小异常，唤醒记忆，最终像这样发现他们的观察，让他们的实验失去意义。
三体第一舰队的某只探测队很幸运地与星舰地球的太空陵墓擦肩而过，而后者出于对章北海的尊敬、或者出于什么他们不可知的理由，将他的大脑完整分离了出来，急冻在了陵墓顶部。
探测队将其带回，复原，终于获得了第二例人体活体样本。
但与他的接触远没有和云天明的接触顺利。
章北海的意志坚强得恐怖，在无数非人的折磨后仍未出现任何裂缝，同时他也从未想从三体人身上获取什么，甚至对帮助他的人类后辈也没有兴趣。
他自己对此的解释是他的使命已经完成了，星舰地球会找到属于他们自己的路。
这个没有任何缺口也没有任何欲望的人难倒了一片科学行政官。
很长一段时间里他就被晾在一边，每天在云天明的地盘上种种地养养花，帮忙做做中餐、扫扫屋子，除此之外就是坐在沙发上看电视，补了数量恐怖的古人类影视作品与资料。
在漫长的搁置岁月中，三体人没有碰他但也没有解除对他日常生活的观察，但最终什么结论也没有得出。
他们之后曾三次与星舰地球后代交锋，但均以失败告终。
有观点便认为应该立刻停止对章北海的观察，后者在以一种未知的方式影响观察者、甚至影响决策层的思维，从而间接地帮助星舰地球。
该观点最后被否决，章北海的思维模式对他们的诱惑远大于猜测中的危险。
但不多时，随着三体社会形态的不断变化，一些新时代的观察员提出一个观点：真正能让章北海崩溃的是性欲。
包含性虐待、性侮辱的一系列新实验开始了。
在实验初期，他们确实发现越是降低性爱的痛感、增加爽感，越能发现章北海精神崩溃的迹象。
但随着实验深入，摸清三体人套路的章北海反而精神趋于稳定，只要他想起了自己在三体人的实验中，便能稳固住思绪，对性爱不再有任何异常反应。
现在实验又快被搞黄，只每隔几周象征性地抓来操一下，就又将人放回。
章北海又拎着锄头出现在监控里，仍然身着他套极衬身材的衬衫西裤常服。
这套衣服犁地很不方便，但已是他衣柜里唯一一套正常衣服。
云天明自从发现三体社会对章北海情欲方面的兴趣，便收走了他其他宽松家居服、运动服，还塞了堆不知哪弄来的短旗袍和皮衣。
他说平时穿这些对你对我对人类都好，章北海自知能过上舒服种地生活算是沾了云天明的光，便没有争辩。
但也只在衬衫西裤洗了时才会穿那些东西。
他想活着，想看星舰地球走的更远一点，也想帮星舰地球更多一点。
尽管他们看到的月亮与太阳再也不可能相同，但头顶同一太空时，他仍思念万万光年外的孩子，却祝他们忘记自己，祝他们一路顺风。
章北海挥起锄头。
=== 真结局：真正的种地玩家在黄油里也可以种地 ===
副标题：褚岩真的把妈卖妓院
达成条件：找到出口时堕落指数<=0
`,

  `
似乎是满足了什么脱离条件，章北海忽然陷入无边的黑暗。
他从黑暗中脱出，终于惊醒。
微弱的亮光从厚重窗帘的缝隙中透进房间，章北海独自一人坐在双人床上。
他鲜少做春梦，甚至已经忘了上次做春梦是什么时候。
那些瑰丽奇怪的春梦场景依然回荡在他的脑海，下身的粘腻感提醒他自己真的在梦里表现得如此淫荡。
应该是太久没做导致的。
自从妻子带闺女回了老家，便再没有谁的手抚摸他的花蕊、进入他的蜜穴，熟练地摁压他的敏感点，将他逼得咬着手指根部才能抑制住呻吟。
但现在还不是想这些的时候。
还有很多工作没有做完，章北海下了床，他想先去洗个冷水澡醒醒脑子，再去思考今天要做完哪些事。
===原著结局：原著也没说章北海没批啊.jpg ===
达成条件：没遇上褚维吴中任意一人
`,
  `
章北海完全接纳了你。
===信赖结局：META! ===
达成条件：找到出口时信赖满了
`,
];

function findLastIndexOfMax(a: number, b: number, c: number): number {
  const numbers = [a, b, c];
  let maxIndex = 0;
  if (a === 0 && c === 0 && b === 0) {
    return 6;
  }

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] >= numbers[maxIndex]) {
      maxIndex = i;
    }
  }

  return maxIndex;
}
