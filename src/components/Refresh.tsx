import React from "react";

// 定义 Refresh 组件的 props 类型
interface TrueProps {
  children: React.ReactNode;
  onClick: () => void;
}

// 自定义 Refresh 组件，接受和传递 onClick 事件
const Refresh: React.FC<TrueProps> = ({ children, onClick }) => {
  return (
    <div className="d-grid gap-2">
      <button
        onClick={onClick}
        className="btn btn-outline-warning bg-dark"
        type="button"
      >
        {children}
      </button>
    </div>
  );
};

export default Refresh;
