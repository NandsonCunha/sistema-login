import Admin from "../models/Admin.js";
import bcrypt from "bcrypt";

export async function listAdmins(req, res) {
  const admins = await Admin.findAll();
  res.json(admins);
}

export async function createAdmin(req, res) {
  const { name, email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const admin = await Admin.create({ name, email, password: hash });
  res.status(201).json(admin);
}
