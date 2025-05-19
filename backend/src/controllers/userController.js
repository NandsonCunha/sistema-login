import User from "../models/User.js";
import bcrypt from "bcrypt";

export async function listUsers(req, res) {
  const users = await User.findAll();
  res.json(users);
}

export async function updateUser(req, res) {
  const { name, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  await User.update({ name, password: hashed }, { where: { id: req.user.id } });
  res.json({ message: "User updated" });
}

export async function deleteUser(req, res) {
  await User.destroy({ where: { id: req.user.id } });
  res.json({ message: "User deleted" });
}
