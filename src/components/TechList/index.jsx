import { useSelector } from "react-redux";
import { TechCard } from "./TechCard";

export function TechList({ setEditTech }) {
  const { techs } = useSelector((state) => state);

  return (
    <ul>
      {techs.map((tech) => (
        <TechCard key={tech.title} tech={tech} setEditTech={setEditTech} />
      ))}
    </ul>
  );
}
