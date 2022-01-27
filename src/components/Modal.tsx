import { FC, useRef } from "react";
import ReactDOM from "react-dom";

type Props = {
  onModalClose?: Function;
};

/**
 *
 * @returns React component that uses portals to implement modal/dialogue window
 */
const Modal: FC<Props> = ({ children, onModalClose, ...rest }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleModalClose = () => {
    onModalClose?.();
  };

  // Function that alowes modal window to be closed by pressing outside of child element
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
