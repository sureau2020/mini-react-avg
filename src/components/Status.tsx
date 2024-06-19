interface Props {
  state: string[];
  cloth: string;
  trust: number;
  sin: number;
}

function Status(props: Props) {
  let status: string[] = [];
  let stateOfTrust: string = "中立";
  if (props.state.length === 0) {
    status.push("正常");
  } else {
    status = props.state;
  }
  if (props.trust <= 0) {
    stateOfTrust = "完全不信任";
  } else if (props.trust <= 3) {
    stateOfTrust = "不信任";
  } else if (props.trust <= 6) {
    stateOfTrust = "一般信任";
  } else if (props.trust <= 9) {
    stateOfTrust = "非常信任";
  } else if (props.trust >= 10) {
    stateOfTrust = "完全信任";
  }

  return (
    <div>
      <p className="text-light">
        当前状态：<i>{status.join("、")}</i>
        <br />
        当前服装：<i>{props.cloth}</i>
        <br />
        当前信任度：
        {props.trust < 4 ? (
          <b>
            （{props.trust}/10）{stateOfTrust}
          </b>
        ) : (
          <i>
            （{props.trust}/10）{stateOfTrust}
          </i>
        )}
        <br />
        堕落程度：
        {props.sin >= 8 ? <b>（{props.sin}/10）</b> : <i>（{props.sin}/10）</i>}
      </p>
    </div>
  );
}

export default Status;
