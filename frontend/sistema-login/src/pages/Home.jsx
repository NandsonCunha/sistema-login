import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="home-container">
      <h1>Bem-vindo!</h1>
      <p>Escolha uma opção abaixo:</p>

      <div className="home-buttons">
        <button onClick={() => navigate("/list")}>Listar Usuários</button>
        <button onClick={() => navigate("/update")}>Atualizar Usuários</button>
      </div>
    </div>
  );
}
