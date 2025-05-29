import { useState } from "react";
import axios from "axios";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/users/login", {
        email,
        password,
      });

      alert(res.data.message);
      localStorage.setItem("token", res.data.token);
    } catch (err) {
      alert(err.response?.data?.error || "Erro no login");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h1>Entrar</h1>
      <h3>Entrar na conta</h3>

      <div>
        <label htmlFor="email">Seu e-mail*</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password">Sua senha*</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit">Entrar</button>
    </form>
  );
}