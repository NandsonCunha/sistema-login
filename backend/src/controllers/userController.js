import User from "../models/userModel.js";
import bcrypt from "bcrypt";

export class UserController {
  static async createUser(req, res){
    try {
      const {name, email, password, role} = req.body;

      const salt = await bcrypt.genSalt(10)
      const hashPassword = await bcrypt.hash(password, salt)

      const user = await User.create({
        name: name,
        email: email,
        password: hashPassword,
        role: role
      })

      return res.status(200).json({
        message: 'User created sucessfully',
      user})
    } catch (error) {
      console.error("Error creating User", error)
      return res.status(500).json({error: 'Error creating User'})
    }
  }
  static async listUsers(req, res) {
    try {
      const users = await User.findAll()

      return res.status(200).json({users});
    } catch (error) {
      console.error('Error listing all Users', error)
      return res.status(500).json({error: 'Error listing all Users'})
    }
  }

  static async getOneUser(req, res){
    try {
      const user = await User.findByPk(req.params.id)

      if (!user) {
        return res.status(404).json({ error: "User not found." });
        }
      return res.status(200).json({ user });
    } catch (error) {
      console.error('Error listing User', error)
      return res.status(500).json({error: 'Error listing User'})
    }
  }

  static async updateUser(req, res) {
    try {
        const { name, email, password } = req.body

        const user = await User.findByPk(req.params.id);

        if (!user) {
            return res.status(404).json({ error: "Usuário não encontrado." });
        }

        if(req.body?.name){
            user.name = req.body.name
        }
        if(req.body?.email){
            user.email = req.body.email
        }
        if(req.body?.password){
            const salt = await bcrypt.genSalt(10)
            user.password = await bcrypt.hash(password, salt)
        }
        if(req.body?.role){
          user.role = req.body.role
        }

        await user.save();

        return res.status(200).json({ message: "Usuário atualizado com sucesso!", user });
    } catch (error) {
        console.error("Erro ao atualizar 'Usuário'.", error);
        return res.status(500).json({ error: "Erro ao tentar atualizar o usuário." });
      }
    }

  static async deleteUser(req, res) {
    try {
        const user = await User.findByPk(req.params.id);

        if (!user) {
            return res.status(404).json({ error: "Usuário não encontrado." });
        }

        await user.destroy();

        return res.status(200).json({ message: "Usuário deletado com sucesso!" });
    } catch (error) {
        console.error("Erro ao deletar 'Usuário'.", error);
        return res.status(500).json({ error: "Erro ao tentar deletar o usuário." });
      }
    }

    static async login(req, res) {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({ where: { email } });
            if (!user) {
                return res.status(400).json({ message: 'Usuário não encontrado' });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ message: 'Senha incorreta' });
            }

            const token = jwt.sign(
                { id: user.id, email: user.email},
                JWT_SECRET,
                { expiresIn: '1h' }
            );

            return res.status(200).json({ message: 'Login bem-sucedido', token });
        } catch (err) {
            return res.status(500).json({ message: 'Erro ao processar login', error: err.message });
        }
      }
}