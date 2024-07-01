import "./App.css";
import { useState, useEffect } from "react";
import Information from "./components/Information";
import Status from "./components/Status";
import False from "./components/False";
import True from "./components/True";
import Alert from "./components/Alert";
import Exit from "./components/Exit";
import Evenements from "./components/Evenements";
import End from "./components/End";
import Refresh from "./components/Refresh";

function App() {
  const alerts: string[] = [
    "撤退有危险。",
    "原地躲藏有危险。",
    "前进有危险。",
    "给导航员的提示会写在这里，章北海看不到。",
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
    `        + 制作人：Ag口、举Fe +
章北海从昏沉中醒来，映入眼帘的是一间舱室——他在长安舰上的办公室。
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
  const [alertt, setAlert] = useState<number>(3);
  const [exit, setExit] = useState(2);
  const [randomN, setRandomN] = useState(1);
  const [indexOfEvent, setIndexOfEvent] = useState<number>(0);
  const [isPregnent, setIsPregnent] = useState(false);
  const [isVouloir, setIsVouloir] = useState(false);
  const [isAnswer, setIsAnswer] = useState(false);
  const [isLie, setIsLie] = useState(false);
  const [isSame, setIsSame] = useState(false); //小章和玩家一不一样
  const [isIntro, setIsIntro] = useState(true);
  const [isFucked, setIsFucked] = useState(false);
  const [userChoice, setChoice] = useState(0);
  const [end, setEnd] = useState(0);
  const [wu, setWu] = useState(0);
  const [chu, setChu] = useState(0);
  const [wei, setWei] = useState(0);
  const [hideEnd, setHideEnd] = useState(false);

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

  const click = (choice: string) => {
    if (choice === "好的" && !isEnd) {
      setRound((prevRound) => prevRound + 1);
      setIsAnswer(false);
      if (round === 0) {
        alert(`⚠双性章 
⚠OOC 
⚠纯虚拟黄油不包含任何影射
⚠应该不恐怖，章只会被操不会被杀
⚠点击确认即确认已满18周岁，不满18请立刻关闭网站 `);
        setTextLines(intros[round + 1].split("\n"));
        setIsWarning(false);
      } else if (round > 0) {
        setIsAnswer(false);
        setIsIntro(false);
        setIsWarning(true);
        setCommand(true);
        if ((isFucked && !isSame) || (isSame && isLie)) {
          if (indexOfEvent === 12 || indexOfEvent === 16) {
            setSin(sin - 1);
          }
          if (indexOfEvent != 12 && indexOfEvent != 3 && indexOfEvent != 10) {
            setSin(sin + 1);
          }
        }
        if (isLie && isSame) {
          setConfidence(confidence - 1);
        } else if (!isSame && isFucked) {
          setConfidence(confidence + 1);
        }
        if (isStringInList("中媚药", state)) {
          if (isStringInList("怀孕", state)) {
            if (wei >= 1 && wu >= 1 && chu >= 1) {
              setRandomN(getRandomInt(0, 16));
            } else {
              setRandomN(getRandomInt(0, 15));
            }
            setIsPregnent(true);
            setIsVouloir(true);
          } else {
            if (wei >= 1 && wu >= 1 && chu >= 1) {
              setRandomN(getRandomInt(1, 16));
            } else {
              setRandomN(getRandomInt(1, 15));
            }
            setIsPregnent(false);
            setIsVouloir(true);
          }
        } else if (isStringInList("怀孕", state)) {
          if (wei >= 1 && wu >= 1 && chu >= 1) {
            setRandomN(getRandomIntWithExlude(0, 16, 15));
          } else {
            setRandomN(getRandomInt(0, 14));
          }
          setIsPregnent(true);
          setIsVouloir(false);
        } else {
          if (wei >= 1 && wu >= 1 && chu >= 1) {
            setRandomN(getRandomIntWithExlude(1, 16, 15));
          } else {
            setRandomN(getRandomInt(1, 14));
          }
          setIsPregnent(false);
          setIsVouloir(false);
        }
        setIndexOfEvent(randomN); // 触发 useEffect
        setAlert(getRandomInt(0, 2));
        if (confidence === 0) {
          setIsSame(false);
          getRandomInt(0, 1) === 0 ? setIsFucked(true) : setIsFucked(false);
        } else if (confidence <= 3) {
          if (getRandomInt(0, 4) === 0) {
            setIsSame(true);
          } else {
            setIsSame(false);
            getRandomInt(0, 1) === 0 ? setIsFucked(true) : setIsFucked(false);
          }
        } else if (confidence <= 6) {
          if (round === 1) {
            setIsSame(true);
          } else if (getRandomInt(1, 2) === 1) {
            setIsSame(true);
          } else {
            setIsSame(false);
            getRandomInt(0, 1) === 0 ? setIsFucked(true) : setIsFucked(false);
          }
        } else if (confidence <= 9) {
          if (getRandomInt(0, 4) === 1) {
            setIsSame(false);
            getRandomInt(0, 1) === 0 ? setIsFucked(true) : setIsFucked(false);
          } else {
            setIsSame(true);
          }
        } else {
          setIsSame(true);
        }
        if (round % 9 === 0) {
          setIsExit(true);
          setExit(getRandomInt(0, 2));
        } else {
          setIsExit(false);
        }
        if (
          (indexOfEvent === 6 || indexOfEvent === 1) &&
          ((isFucked && !isSame) || (isLie && isSame))
        ) {
          if (!isStringInList("怀孕", state)) {
            setState(state.concat("怀孕"));
            setIsPregnent(true);
          }
        }
        if (
          (indexOfEvent === 3 || indexOfEvent === 10) &&
          ((isFucked && !isSame) || (isLie && isSame))
        ) {
          if (!isStringInList("中媚药", state)) {
            setState(state.concat("中媚药"));
            setIsVouloir(true);
          }
        }
        if (indexOfEvent === 15) {
          setState(state.filter((item) => item !== "中媚药"));
          setIsVouloir(false);
        }
        if (indexOfEvent === 0) {
          setState(state.filter((item) => item !== "怀孕"));
          setIsPregnent(false);
        }
        if (indexOfEvent === 14) {
          setChu(chu + 1);
          setCloth("常服下捆绑");
        }
        if (indexOfEvent === 8) {
          setCloth("常服");
          setWu(wu + 1);
          setState([]);
        }
        if (indexOfEvent === 9) {
          setWei(wei + 1);
          setCloth("血仆裙");
          setState([]);
        }
        if (indexOfEvent === 16) {
          setHideEnd(true);
        }
      }
    } else if (!isEnd) {
      setChoice(Number(choice));
      setIsAnswer(true);
      if (Number(choice) === alertt) {
        setIsLie(true);
      } else {
        setIsLie(false);
      }
      setCommand(false);
      if (
        (isExit && exit != alertt && isSame && Number(choice) === exit) ||
        sin >= 10
      ) {
        setIsEnd(true);
        if (sin >= 10) {
          setEnd(1);
        }
      } else {
        setIsEnd(false);
      }
    }
  };

  return (
    <>
      <div className="m-2 p-5  w-90 mx-auto">
        <div id="shangmiande">
          {isExit ? <Exit>{exits[exit]}</Exit> : null}
          <div>{isWarning ? <Alert>警告：{alerts[alertt]}</Alert> : null}</div>
          <div className="m-2 p-3 bg-dark rounded-lg shadow-lg w-100 mx-auto">
            <Status
              state={state}
              cloth={cloth}
              trust={confidence}
              sin={sin}
            ></Status>
          </div>
          <div className="m-5 p-3 bg-dark rounded-lg shadow-lg w-90 mx-auto">
            {!isEnd ? (
              isIntro ? (
                <Information>
                  {textLines.map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </Information>
              ) : (
                <Evenements
                  isExit={isExit}
                  userChoice={userChoice}
                  isFucked={isFucked}
                  alert={alertt}
                  //realChoice={random}
                  isAnswer={isAnswer}
                  isPregnant={isPregnent}
                  isVouloir={isVouloir}
                  indexOfEvent={indexOfEvent}
                  isSameChoice={isSame}
                  isLie={isLie}
                  cloth={cloth}
                  exit={exit}
                />
              )
            ) : (
              <End
                confidence={confidence}
                end={end}
                sin={sin}
                wu={wu}
                wei={wei}
                chu={chu}
                hideEnd={hideEnd}
              ></End>
            )}
          </div>
        </div>
        {!isEnd ? (
          command ? (
            commands
          ) : (
            <True onClick={() => click("好的")}>好的</True>
          )
        ) : (
          <Refresh onClick={() => ReFresh()}>重新开始</Refresh>
        )}
      </div>
    </>
  );
}

export default App;

function ReFresh() {
  window.location.reload();
}

function getRandomInt(min: number, max: number): number {
  if (min > max) {
    throw new Error("最小值不能大于最大值");
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  let result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
}

function isStringInList(target: string, list: string[]): boolean {
  return list.includes(target);
}

function getRandomIntWithExlude(
  min: number,
  max: number,
  exclude: number
): number {
  if (min > max) {
    throw new Error("最小值不能大于最大值");
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  let result: number;
  const range = max - min + 1;
  if (range <= 1 && (min === exclude || max === exclude)) {
    throw new Error("没有足够的数字可以选择");
  }

  do {
    result = Math.floor(Math.random() * range) + min;
  } while (result === exclude);

  return result;
}
