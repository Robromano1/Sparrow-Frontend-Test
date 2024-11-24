import { useRef, FC, ReactNode, useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
// import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  useLayoutEffect(() => {
    if (isOpen) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [isOpen]);

  return (
    <dialog
      ref={modalRef}
      onCancel={onClose}
      className="w-5/12 rounded-3xl h-3/5w p-4 outline-none container h-4/6"
    >
      <div className="flex justify-between">
        {children}
        <FontAwesomeIcon
          icon={faXmark}
          onClick={onClose}
          className="hover:cursor-pointer text-2xl pr-2"
        />
      </div>
    </dialog>
  );
};

export default Modal;
