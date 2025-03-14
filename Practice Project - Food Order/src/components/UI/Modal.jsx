import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

/* 모달 컴포넌트
  createPortal을 사용하여 모달을 렌더링
  open prop으로 모달 열림 여부를 설정
  className prop으로 CSS 클래스 추가
  useRef로 dialog 요소에 접근
  useEffect로 open prop 변경 시 showModal 호출
 */
export default function Modal({ children, open, className = "", onClose }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }

    return () => {
      modal.close();
    };
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
