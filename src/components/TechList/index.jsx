import { useSelector } from "react-redux";
import { TechCard } from "./TechCard";
import styles from "./style.module.scss";

export function TechList({ setEditTech }) {
  const { techs } = useSelector((state) => state);

  return (
    <ul className={`dashboardContainer ${styles.techList}`}>
      {techs.map((tech) => (
        <TechCard key={tech.title} tech={tech} setEditTech={setEditTech} />
      ))}
    </ul>
  );
}
