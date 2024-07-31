import { IoClose } from "react-icons/io5";

export function Modal({ children, title, setIsOpen, value }) {
  return (
    <div>
      <div>
        <div>
          <h3>{title}</h3>
          <button onClick={() => setIsOpen(value)}>
            <IoClose size={20} />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
