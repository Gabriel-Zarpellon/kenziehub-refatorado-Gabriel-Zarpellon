import { ImPencil } from "react-icons/im";
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteTechThunk } from "../../../store/modules/tech/thunks";
import styles from "./style.module.scss";

export function TechCard({ tech, setEditTech }) {
  const dispatch = useDispatch();
  return (
    <li className={styles.cardBox}>
      <h3 className="title3">{tech.title}</h3>
      <div>
        <p className="paragraph">{tech.status}</p>
        <div className={styles.buttonBox}>
          <button onClick={() => setEditTech(tech)}>
            <ImPencil size={16} />
          </button>
          <button onClick={() => dispatch(deleteTechThunk(tech.id))}>
            <FaRegTrashAlt size={16} />
          </button>
        </div>
      </div>
    </li>
  );
}
