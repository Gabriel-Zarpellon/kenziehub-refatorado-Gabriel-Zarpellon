import { useDispatch, useSelector } from "react-redux";
import { IoMdAdd } from "react-icons/io";
import { getUserThunk, userLogoutThunk } from "../../store/modules/user/thunks";
import { TechList } from "../../components/TechList";
import { useEffect, useState } from "react";
import { AddTechModal } from "../../components/TechList/AddTechModal";
import { EditTechModal } from "../../components/TechList/EditTechModal";
import { useNavigate } from "react-router-dom";

export function DashboardPage() {
  const { user, techs } = useSelector((state) => state);

  const dispatch = useDispatch();
  const [addTechOpen, setAddTechOpen] = useState(false);
  const [editTech, setEditTech] = useState(null);
  const navigate = useNavigate();


  return (
    <>
      <header>
        <div>
          <img src="" alt="" />
          <button onClick={() => dispatch(userLogoutThunk(navigate))}>
            Sair
          </button>
        </div>
      </header>
      <main>
        <section>
          <div>
            <h1>{user?.name}</h1>
            <p>{user?.course_module}</p>
          </div>
        </section>
        <section>
          <div>
            <div>
              <h2>Tecnologias</h2>
              <button>
                <IoMdAdd size={20} />
              </button>
            </div>
            <div>
              {techs?.length > 0 ? (
                <TechList setEditTech={setEditTech} />
              ) : null}
            </div>
          </div>
        </section>
        {addTechOpen ? <AddTechModal setAddTechOpen={setAddTechOpen} /> : null}
        {editTech ? (
          <EditTechModal editTech={editTech} setEditTech={setEditTech} />
        ) : null}
      </main>
    </>
  );
}
