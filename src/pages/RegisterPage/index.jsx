import { useForm } from "react-hook-form";
import { FormInput } from "../../components/FormInput";
import { useDispatch } from "react-redux";
import { userRegisterThunk } from "../../store/modules/user/thunks";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import styles from "./style.module.scss";
import Logo from "../../assets/Logo.svg";

export function RegisterPage() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function submit(formData) {
    if (formData.password == formData.password2) {
      dispatch(userRegisterThunk(formData, navigate));
    } else {
      toast.error("As senhas não correspondem!");
    }
  }

  return (
    <section className={styles.registerSection}>
      <div className="container">
        <div className={styles.logoBox}>
          <img src={Logo} alt="KenzieHub Logo" />
          <Link to="/">
            <button>Voltar</button>
          </Link>
        </div>
        <div className={styles.registerBox}>
          <div className={styles.titleBox}>
            <h1 className="title1">Crie sua conta</h1>
            <p className="paragraph">Rápido e grátis, vamos nessa</p>
          </div>
          <form className={styles.formBox} onSubmit={handleSubmit(submit)}>
            <FormInput
              name="name"
              label="Nome"
              type="text"
              placeholder="Digite aqui seu nome"
              register={register}
            />
            <FormInput
              name="email"
              label="E-mail"
              type="email"
              placeholder="Digite aqui seu e-mail"
              register={register}
            />
            <FormInput
              name="password"
              label="Senha"
              type="password"
              placeholder="Digite aqui sua senha"
              register={register}
            />
            <FormInput
              name="password2"
              label="Confirmar Senha"
              type="password"
              placeholder="Digite novamente sua senha"
              register={register}
            />
            <FormInput
              name="bio"
              label="Bio"
              type="text"
              placeholder="Fale sobre você"
              register={register}
            />
            <FormInput
              name="contact"
              label="Contato"
              type="text"
              placeholder="Opção de contato"
              register={register}
            />
            <div className={styles.selectBox}>
              <label className="label" htmlFor="course_module">
                Selecionar Módulo
              </label>
              <select
                className="select"
                name="course_module"
                defaultValue={"Primeiro módulo (Introdução ao Frontend)"}
                {...register("course_module")}
              >
                <option value="Primeiro módulo (Introdução ao Frontend)">
                  Primeiro módulo (Introdução ao Frontend)
                </option>
                <option value="Segundo módulo (Frontend Avançado)">
                  Segundo módulo (Frontend Avançado)
                </option>
                <option value="Terceiro módulo (Introdução ao Backend)">
                  Terceiro módulo (Introdução ao Backend)
                </option>
                <option value="Quarto módulo (Backend Avançado)">
                  Quarto módulo (Backend Avançado)
                </option>
              </select>
              <button className="button pink" type="submit">
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
