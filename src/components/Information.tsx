import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Information(props: Props) {
  let question = ["", "", "", ""];
  let enfuire = ["", "", "", ""];
  let go = ["", "", "", "", ""];
  let hide = ["", "", "", "", ""];
  let end = ["", "", ""];
  let count = 0;
  let rondom = Math.floor(Math.random() * 11);

  return <div className="text-warning">{props.children}</div>;
}

export default Information;
