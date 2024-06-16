import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Exit = (props: Props) => {
  return (
    <div className="alert alert-success" role="alert">
      {props.children}
    </div>
  );
};

export default Exit;
