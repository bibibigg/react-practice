import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref
) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round(1 - remainingTime / (targetTime * 1000)) * 100;

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>You lost</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} second.</strong>
      </p>
      <p>
        You stopped the timer with
        <strong>{formattedRemainingTime} second left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;
// dialog안에 form을 제출하는 버튼이 있기에 버튼을 통해 form을 제출할 수 있음
// dialog는 기본적으로 보이지 않기에 open속성을 추가하여 보이게 할 수 있음
//.toFixed()괄호 안에 숫자만큼 소수점자리를 표기할 수 있음.toFixed(2)는 소수점2자리까지만 표기
