import { FC, useRef } from "react";
import ReactDOM from "react-dom";

type Props = {
  onModalClose?: Function;
};

const Modal: FC<Props> = ({ children, onModalClose, ...rest }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleModalClose = () => {
    onModalClose?.();
  };

  const handleClickRoot = (event: any) => {
    const rootElement = modalRef.current as HTMLDivElement;
    if (!rootElement.contains(event.target)) {
      handleModalClose();
    }
  };

  return ReactDOM.createPortal(
    <div
      onMouseDown={handleClickRoot}
      className={`absolute inset-0 w-screen h-screen grid place-items-center bg-[#0000009f] overflow-hidden`}
    >
      <div ref={modalRef}>{children}</div>
    </div>,
    document.getElementById("modal") as HTMLElement
  );
};

export default Modal;
