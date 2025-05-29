import { useState } from "react";
import axios from "axios";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/users/create", {
        name,
        email,
        password,
        role: "user", // ou admin, se desejar
      });

      alert("Usuário cadastrado com sucesso!");
    } catch (err) {
      alert(err.response?.data?.error || "Erro ao cadastrar");
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h1>Cadastrar-se</h1>
      <h3>Criar uma conta</h3>

      <div>
        <label htmlFor="nome">Seu nome*</label>
        <input
          type="text"
          id="nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

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

      <button type="submit">Cadastrar</button>
    </form>
  );
}