// from https://codesandbox.io/s/react-checkbox-3-xz9ol?file=/src/App.js
// and https://dev.to/tomdohnal/custom-checkbox-in-react-animated-and-accessible-3jk9

import React, { useState } from "react";
import {
  animated,
  useSpring,
  config,
  useSpringRef,
  useChain
} from "react-spring";
import classNames from "classnames";

function Task(props) {
  const [isCompleted, setIsCompleted] = useState(props.isCompleted);
  const [text, setText] = useState(props.text);
  const [shouldTruncate, setShouldTruncate] = useState(props.shouldTruncate);
  const checkboxAnimationRef = useSpringRef();
  const checkboxAnimationStyle = useSpring({
    backgroundColor: isCompleted ? "#808" : "#fff",
    borderColor: isCompleted ? "#808" : "#ddd",
    config: config.gentle,
    ref: checkboxAnimationRef
  });

  const [checkmarkLength, setCheckmarkLength] = useState(null);

  const checkmarkAnimationRef = useSpringRef();
  const checkmarkAnimationStyle = useSpring({
    x: isCompleted ? 0 : checkmarkLength,
    config: config.gentle,
    ref: checkmarkAnimationRef
  });

  useChain(
    isCompleted
      ? [checkboxAnimationRef, checkmarkAnimationRef]
      : [checkmarkAnimationRef, checkboxAnimationRef],
    [0, 0.1]
  );

  return (
    <label className={classNames('task', { truncate: shouldTruncate })}>
      <input
        type="checkbox"
		defaultChecked={isCompleted}
        onChange={() => {
          setIsCompleted(!isCompleted);
        }}
      />
      <animated.svg
        style={checkboxAnimationStyle}
        className={`checkbox ${isCompleted ? "checkbox--active" : ""}`}
        // This element is purely decorative so
        // we hide it for screen readers
        aria-hidden="true"
        viewBox="0 0 15 11"
        fill="none"
      >
        <animated.path
          d="M1 4.5L5 9L14 1"
          strokeWidth="2"
          stroke="#fff"
          ref={(ref) => {
            if (ref) {
              setCheckmarkLength(ref.getTotalLength());
            }
          }}
          strokeDasharray={checkmarkLength}
          strokeDashoffset={checkmarkAnimationStyle.x}
        />
      </animated.svg>
	  <span className={classNames('taskText', {truncate: shouldTruncate})}>
		{text}
	  </span>
    </label>
  );
}

export default Task;
