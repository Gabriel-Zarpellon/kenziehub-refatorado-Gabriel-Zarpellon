import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateTechThunk } from "../../../store/modules/tech/thunks";
import { Modal } from "../../Modal";
import { FormInput } from "../../FormInput";

export function EditTechModal({ editTech, setEditTech }) {
  const { register, handleSubmit } = useForm({
    values: {
      title: editTech.title,
      status: editTech.status,
    },
  });

  const dispatch = useDispatch();

  async function submit(formData) {
    dispatch(updateTechThunk(editTech, formData));
    setEditTech(null);
  }

  return (
    <Modal title="Tecnologia Detalhes" setIsOpen={setEditTech} value={null}>
      <form onSubmit={handleSubmit(submit)}>
        <FormInput
          name="title"
          label="Nome"
          type="text"
          placeholder="Tecnologia"
          register={register}
        />
        <div>
          <label htmlFor="status">Status</label>
          <select name="status" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
        </div>
        <button type="submit">Salvar Alterações</button>
      </form>
    </Modal>
  );
}
