import React from "react";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

const False: React.FC<Props> = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className="btn btn-outline-warning bg-dark">
      {children}
    </div>
  );
};

export default False;
