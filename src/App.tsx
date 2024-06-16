import "./App.css";
import { useState, useEffect } from "react";
import Information from "./components/Information";
import Status from "./components/Status";
import False from "./components/False";
import True from "./components/True";
import Alert from "./components/Alert";
import Exit from "./components/Exit";
import Evenements from "./components/Evenements";

function App() {
  const alerts: string[] = [
    "撤退有危险。",
    "原地躲藏有危险。",
    "前进有危险。",
    "导航员感知到的危险会写在这里，章北海看不见。",
  ];
  const exits: string[] = [
    "撤退可达出口。",
    "原地躲藏可达出口。",
    "前进可达出口。",
  ];
  const intros: string[] = [
    `你好, 你是一名导航员。
你可以通过简易提示器为身处无限空间的章北海导航。
你无法与他交谈，但可以感知到周围的危险，并通过“按下按钮”来建议章北海行动。
你没感知到的地方也可能有危险。
当周围出现出口时，一条绿色的提示信息会出现在界面顶部。
你可以帮助章北海找到出口并离开，也可以……自己看着办。`,
    `章北海从昏沉中醒来，映入眼帘的是一间舱室——他在长安舰上的办公室。
他下床环顾四周，房间摆设一切如旧，只在桌面上多出了一枚简易提示器。
形似寻呼机的提示器被他拿起，仔细检查，但未见异常。
思考片刻后，他揣上提示器，打开舱门。
屋外诡异地连接着另一幅场景。`,
  ];
  const [round, setRound] = useState(0);
  const [textLines, setTextLines] = useState(intros[0].split("\n"));
  const [command, setCommand] = useState(false);
  const [isExit, setIsExit] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [isWarning, setIsWarning] = useState(true);
  const [state, setState] = useState<string[]>([]);
  const [cloth, setCloth] = useState("常服");
  const [confidence, setConfidence] = useState(5);
  const [sin, setSin] = useState(0);
  const [alert, setAlert] = useState<number>(3);
  const [exit, setExit] = useState(2);
  const [randomN, setRandomN] = useState(1);
  const [indexOfEvent, setIndexOfEvent] = useState<number>(0);
  const [isPregnent, setIsPregnent] = useState(false);
  const [isVouloir, setIsVouloir] = useState(false);
  const [isAnswer, setIsAnswer] = useState(false);
  const [isLie, setIsLie] = useState(false);
  const [isSame, setIsSame] = useState(false); //小章和玩家一不一样
  const [realChoice, setRealChoice] = useState(0);
  const [isIntro, setIsIntro] = useState(true);
  const [isFucked, setIsFucked] = useState(false);
  const [choice, setChoice] = useState(0);

  let random: number = 0;
  let fuck: boolean;

  const commands = (
    <div
      className="btn-group rounded-lg shadow-lg"
      role="group"
      aria-label="Basic outlined example"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <False onClick={() => click("0")}>撤退</False>
      <False onClick={() => click("1")}>原地躲藏</False>
      <False onClick={() => click("2")}>前进</False>
    </div>
  );

  useEffect(() => {
    if (indexOfEvent !== null) {
      setIndexOfEvent(randomN);
    }
  }, [indexOfEvent, randomN]);

  useEffect(() => {
    if (realChoice !== null) {
      setRealChoice(random);
    }
  }, [realChoice]);

  useEffect(() => {
    if (isFucked !== null) {
      setIsFucked(fuck);
    }
  }, [isFucked]);

  const click = (choice: string) => {
    fuck = false;
    setIsFucked(fuck);
    if (choice === "好的" && !isEnd) {
      setRound((prevRound) => prevRound + 1);
      setIsAnswer(false);
      if (round === 0) {
        setTextLines(intros[round + 1].split("\n"));
        setIsWarning(false);
      } else if (round > 0) {
        setIsAnswer(false);
        setIsIntro(false);
        setIsWarning(true);
        setCommand(true);
        if (isLie && isSame) {
          setConfidence(confidence - 1);
        } else if (!isLie && !isSame && realChoice === alert) {
          setConfidence(confidence + 1);
        }
        if (isStringInList("中媚药", state)) {
          if (isStringInList("怀孕", state)) {
            setRandomN(getRandomInt(0, 15));
            setIsPregnent(true);
            setIsVouloir(true);
          } else {
            setRandomN(getRandomInt(1, 15));
            setIsPregnent(false);
            setIsVouloir(true);
          }
        } else if (isStringInList("怀孕", state)) {
          setRandomN(getRandomInt(0, 14));
          setIsPregnent(true);
          setIsVouloir(false);
        } else {
          let tmp = getRandomInt(1, 14);
          setRandomN(tmp);
          setIsPregnent(false);
          setIsVouloir(false);
        }
        setIndexOfEvent(randomN); // 触发 useEffect
        setAlert(getRandomInt(0, 2));
      }
    } else if (!isEnd) {
      setChoice(Number(choice));
      setIsAnswer(true);
      if (Number(choice) === alert) {
        setIsLie(true);
      } else {
        setIsLie(false);
      }
      if (confidence === 0) {
        setIsSame(false);
        random = getRandomOtherNumber(Number(choice));
        setRealChoice(random);
      } else if (confidence <= 3) {
        if (getRandomInt(0, 4) === 0) {
          setIsSame(true);
        } else {
          setIsSame(false);
          random = getRandomOtherNumber(Number(choice));
          setRealChoice(random);
        }
      } else if (confidence <= 6) {
        if (round === 1) {
          setIsSame(true);
        } else if (getRandomInt(1, 2) === 1) {
          setIsSame(true);
        } else {
          setIsSame(false);
          random = getRandomOtherNumber(Number(choice));
          setRealChoice(random);
        }
      } else if (confidence <= 9) {
        if (getRandomInt(0, 4) === 1) {
          setIsSame(false);
          random = getRandomOtherNumber(Number(choice));
          setRealChoice(random);
        } else {
          setIsSame(true);
        }
      } else {
        setIsSame(true);
      }
      if (realChoice === alert || getRandomInt(0, 2) === 1) {
        fuck = true;
        setIsFucked(fuck);
        setSin(sin + 1);
      }
      setCommand(false);
    }
  };

  return (
    <>
      <div className="m-2 p-5  w-90 mx-auto">
        <div id="shangmiande">
          {isExit ? <Exit>{exits[exit]}</Exit> : null}
          <div>{isWarning ? <Alert>警告：{alerts[alert]}</Alert> : null}</div>
          <div className="m-2 p-3 bg-dark rounded-lg shadow-lg w-50 mx-auto">
            <Status
              state={state}
              cloth={cloth}
              trust={confidence}
              sin={sin}
            ></Status>
          </div>
          <div className="m-5 p-3 bg-dark rounded-lg shadow-lg w-90 mx-auto">
            {isIntro ? (
              <Information>
                {textLines.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </Information>
            ) : (
              <Evenements
                userChoice={choice}
                isFucked={isFucked}
                alert={alert}
                realChoice={random}
                isAnswer={isAnswer}
                isPregnant={isPregnent}
                isVouloir={isVouloir}
                indexOfEvent={indexOfEvent}
                isSameChoice={isSame}
                isLie={isLie}
                cloth={cloth}
              ></Evenements>
            )}
          </div>
        </div>
        {command ? commands : <True onClick={() => click("好的")}>好的</True>}
      </div>
    </>
  );
}

export default App;

function getRandomInt(min: number, max: number): number {
  if (min > max) {
    throw new Error("最小值不能大于最大值");
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  let result = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log("随机数：" + result);
  return result;
}

function isStringInList(target: string, list: string[]): boolean {
  return list.includes(target);
}

function getRandomOtherNumber(num: number): number {
  const options = [0, 1, 2].filter((n) => n !== num);
  const randomIndex = Math.floor(Math.random() * options.length);

  return options[randomIndex];
}
