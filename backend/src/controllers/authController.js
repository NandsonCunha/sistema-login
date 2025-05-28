import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/userModel.js"

const UserAuthentication = async (req,res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!user ||!isPasswordValid) {
            return res.status(401).json({ error: "Invalid email or password." });
        }

        const token = jwt.sign({ 
            id: user.id, email: user.email, role: user.role }, // ⬅ inclui o role
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
            );

        return res.status(200).json({ 
            message: "Authenticated successfully!", 
            user: { id: user.id, email: user.email, role: user.role },
            token,
        });
    } catch (error) {
        console.error("Error authenticating user.", error);
        return res.status(500).json({ error: "Error trying to authenticate user." });
    }
}

export default UserAuthentication;