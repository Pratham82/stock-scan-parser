import React from "react";
import noop from "lodash/noop";

interface IButtonProps {
  actions: {
    onClick: () => void;
  };
}

const BackButton = (props: IButtonProps) => {
  const { actions } = props;
  const { onClick = noop } = actions || {};
  return (
    <button
      type="button"
      className="text-md my-4 rounded-md bg-slate-500 px-4 py-3 text-white shadow-md hover:shadow-sm active:translate-x-0"
      onClick={onClick}
    >
      <div className="flex">
        <div className="mr-3 w-6">
          <svg
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.707 14.707a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414L5.414 9H17a1 1 0 1 1 0 2H5.414l2.293 2.293a1 1 0 0 1 0 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <span>Go Back</span>
      </div>
    </button>
  );
};

export default BackButton;
