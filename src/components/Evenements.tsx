import React, { ReactNode } from "react";

interface Props {
  isAnswer: boolean;
  isPregnant: boolean;
  isVouloir: boolean;
  isSameChoice: boolean;
  realChoice: number;
  indexOfEvent: number;
  cloth: string;
}

const Alert = (props: Props) => {
  let textLines: string[] = evenements[props.indexOfEvent].split("\n");
  return (
    <div className="text-warning">
      {textLines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
};

export default Alert;

const evenements = ["生育", "前面出现了一个触手", "出现了一队哥布林", "自慰"];
