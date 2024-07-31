import { useDispatch, useSelector } from "react-redux";
import { IoMdAdd } from "react-icons/io";
import { userLogoutThunk } from "../../store/modules/user/thunks";
import { TechList } from "../../components/TechList";
import { useState } from "react";
import { AddTechModal } from "../../components/TechList/AddTechModal";
import { EditTechModal } from "../../components/TechList/EditTechModal";

export function DashboardPage() {
  const { user, techs } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [addTechOpen, setAddTechOpen] = useState(false);
  const [editTech, setEditTech] = useState(null);
  return (
    <>
      <header>
        <div>
          <img src="" alt="" />
          <button onClick={dispatch(userLogoutThunk)}>Sair</button>
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
            <div>{techs?.length > 0 ? <TechList setEditTech={setEditTech}/> : null}</div>
          </div>
        </section>
        {addTechOpen ? <AddTechModal setAddTechOpen={setAddTechOpen} /> : null}
        {editTech ? <EditTechModal editTech={editTech} setEditTech={setEditTech}/> : null}
      </main>
    </>
  );
}
