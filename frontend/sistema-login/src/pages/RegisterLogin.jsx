import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import "../styles/styles.css"; // Certifique-se de que esse caminho está correto

export default function RegisterLogin() {
  return (
    <main className="login-container">
      <section className="form-section">
        <LoginForm />
      </section>

      <section className="form-section">
        <RegisterForm />
      </section>
    </main>
  );
}
