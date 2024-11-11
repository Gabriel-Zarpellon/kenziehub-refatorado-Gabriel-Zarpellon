import { useDispatch, useSelector } from "react-redux";
import { IoMdAdd } from "react-icons/io";
import { userLogoutThunk } from "../../store/modules/user/thunks";
import { TechList } from "../../components/TechList";
import { useEffect, useState } from "react";
import { AddTechModal } from "../../components/TechList/AddTechModal";
import { EditTechModal } from "../../components/TechList/EditTechModal";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import styles from "./style.module.scss";
import { getTechsThunk } from "../../store/modules/tech/thunks";

export function DashboardPage() {
  const { user, techs } = useSelector((state) => state);

  const dispatch = useDispatch();
  const [addTechOpen, setAddTechOpen] = useState(false);
  const [editTech, setEditTech] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    function loadTechs() {
      dispatch(getTechsThunk());
    }
    loadTechs();
  }, []);

  return (
    
    <>
      <header>
        <div className={`dashboardContainer ${styles.logoBox}`}>
          <img src={Logo} alt="KenzieHub Logo" />
          <button onClick={() => dispatch(userLogoutThunk(navigate))}>
            Sair
          </button>
        </div>
      </header>
      <main>
        <section className={styles.titleSection}>
          <div className={`dashboardContainer ${styles.titleBox}`}>
            <h1 className="title1">{user?.name}</h1>
            <p className="paragraph">{user?.course_module}</p>
          </div>
        </section>
        <section>
          <div className="dashboardContainer">
            <div className={styles.techTitle}>
              <h2 className="title2">Tecnologias</h2>
              <button onClick={() => setAddTechOpen(true)}>
                <IoMdAdd size={20} />
              </button>
            </div>
            <div className={styles.techListBox}>
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
