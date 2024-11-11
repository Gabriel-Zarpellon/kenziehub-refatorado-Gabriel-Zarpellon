import { useForm } from "react-hook-form";
import { Modal } from "../../Modal";
import { FormInput } from "../../FormInput";
import { useDispatch } from "react-redux";
import { addTechThunk } from "../../../store/modules/tech/thunks";
import styles from "./style.module.scss";

export function AddTechModal({ setAddTechOpen }) {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  async function submit(formData) {
    dispatch(addTechThunk(formData));
    setAddTechOpen(false);
  }

  return (
    <Modal
      setIsOpen={setAddTechOpen}
      title="Cadastrar Tecnologia"
      value={false}
    >
      <form onSubmit={handleSubmit(submit)} className={styles.formBox}>
        <FormInput
          name="title"
          label="Nome"
          type="text"
          placeholder="Tecnologia"
          register={register}
        />
        <div className={styles.selectBox}>
          <label className="label" htmlFor="status">
            Selecionar Status
          </label>
          <select
            className="select"
            name="status"
            defaultValue={"Iniciante"}
            {...register("status")}
          >
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
        </div>
        <button className="button pink" type="submit">
          Cadastrar Tecnologia
        </button>
      </form>
    </Modal>
  );
}
