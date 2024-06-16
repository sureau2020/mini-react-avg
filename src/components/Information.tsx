import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Information(props: Props) {
  return <div className="text-warning">{props.children}</div>;
}

export default Information;
