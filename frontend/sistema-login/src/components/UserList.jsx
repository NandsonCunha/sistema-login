import { useEffect, useState } from "react";
import axios from "axios";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:3000/user/listAll", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsers(res.data.users);
      } catch (error) {
        alert("Erro ao buscar usuários");
        console.error(error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div className="user-list-container">
      <h1>Lista de Usuários</h1>
      {users.length === 0 ? (
        <p>Nenhum usuário encontrado.</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong>Nome:</strong> {user.name}<br />
              <strong>Email:</strong> {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
