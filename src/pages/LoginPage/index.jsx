import { useForm } from "react-hook-form";
import { FormInput } from "../../components/FormInput";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserThunk, userLoginThunk } from "../../store/modules/user/thunks";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import Logo from "../../assets/Logo.svg";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

export function LoginPage() {
  let { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let [showPassword, setShowPassword] = useState(false);

  async function submit(formData) {
    dispatch(userLoginThunk(formData, navigate));
  }

  useEffect(() => {
    function loadUser() {
      dispatch(getUserThunk(navigate));
    }
    loadUser();
  }, []);

  return (
    <section className={styles.loginSection}>
      <div className="container">
        <div className={styles.logoBox}>
          <img src={Logo} alt="KenzieHub Logo" />
        </div>
        <div className={styles.formBox}>
          <form onSubmit={handleSubmit(submit)}>
            <div className={styles.titleBox}>
              <h1 className="title1">Login</h1>
            </div>
            <FormInput
              name="email"
              label="E-mail"
              type="email"
              placeholder="Digite seu e-mail"
              register={register}
            />
            <div className={styles.passwordBox}>
              <FormInput
                name="password"
                label="Senha"
                type={showPassword ? "text" : "password"}
                placeholder="Digite sua senha"
                register={register}
              />
              <div className={styles.eye}>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <IoEyeOff size={16} /> : <IoEye size={16} />}
                </button>
              </div>
            </div>
            <button className="button pink" type="submit">
              Entrar
            </button>
          </form>
          <div className={styles.loginBottom}>
            <p className="paragraph">Ainda não possui uma conta?</p>
            <Link to="/register">
              <button className="button">Cadastre-se</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
