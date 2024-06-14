import React from "react";

interface Props {
  children: string;
  onClick: (item: string) => void;
}

function Hide(props: Props) {
  return (
    <div className="btn btn-outline-warning bg-dark">{props.children}</div>
  );
}

export default Hide;
