import { IoClose } from "react-icons/io5";
import styles from "./style.module.scss";
import { useOutclickModal } from "../../hooks/useOutclickModal";
import { useKeydownModal } from "../../hooks/useKeyDownModal";

export function Modal({ children, title, setIsOpen, value }) {
  let modalRef = useOutclickModal(() => {
    setIsOpen(false);
  });

  let buttonRef = useKeydownModal("Escape", (element) => {
    setIsOpen(false);
  });
  return (
    <div className={styles.modal} role="dialog">
      <div ref={modalRef}>
        <div className={styles.modalTitle}>
          <h3 className="title3">{title}</h3>
          <button ref={buttonRef} onClick={() => setIsOpen(value)}>
            <IoClose size={20} />
          </button>
        </div>
        <div className={styles.modalBox}>{children}</div>
      </div>
    </div>
  );
}
