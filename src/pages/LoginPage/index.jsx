import { useForm } from "react-hook-form";
import { FormInput } from "../../components/FormInput";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLoginThunk } from "../../store/modules/user/thunks";


export function LoginPage() {
  let { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function submit(formData) {
    dispatch(userLoginThunk(formData, navigate));
  }
  return (
    <section>
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <form onSubmit={handleSubmit(submit)}>
            <div>
              <h1>Login</h1>
            </div>
            <FormInput
              name="email"
              label="E-mail"
              type="email"
              placeholder="Digite seu e-mail"
              register={register}
            />
            <div>
              <FormInput
                name="password"
                label="Senha"
                type="password"
                placeholder="Digite sua senha"
                register={register}
              />
              <div></div>
            </div>
            <button type="submit">Entrar</button>
          </form>
          <div>
            <p>Ainda não possui uma conta?</p>
            <Link to="/register">
              <button>Cadastre-se</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
