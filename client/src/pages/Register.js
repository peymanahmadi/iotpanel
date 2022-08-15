import FormRow from "../components/FormRow";
import Logo from "../components/Logo";

const Register = () => {
  return (
    <section className="register-page full-page">
      <form className="form">
        <Logo />
        <h3>Login</h3>
        <FormRow name="email" type="email" />
        <FormRow name="password" type="password" />
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </section>
  );
};

export default Register;
