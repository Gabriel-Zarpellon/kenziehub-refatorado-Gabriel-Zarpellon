import { ImPencil } from "react-icons/im";
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteTechThunk } from "../../../store/modules/tech/thunks";

export function TechCard({ tech, setEditTech }) {
  const dispatch = useDispatch();
  return (
    <li>
      <h3>{techReducer.title}</h3>
      <div>
        <p>{tech.status}</p>
        <div>
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
