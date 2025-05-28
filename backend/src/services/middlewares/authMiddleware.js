import "dotenv/config"
import jwt from "jsonwebtoken";

export function UserVerifyToken(req, res, next) {
  try {
    const authorization = req.headers.authorization;
    if (!authorization)
      return res.status(401).json({ auth: false, message: 'Token não fornecido.' });

    const token = authorization.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ auth: false, message: 'Token inválido.' });
      }

      // Salva as infos no req
      req.userId = decoded.id;
      req.userEmail = decoded.email;
      req.userRole = decoded.role;
      next();
    });

  } catch (err) {
    return res.status(500).json({
      err: err.message,
      message: "Erro na verificação de Token."
    });
  }
}

export function isAdmin(req, res, next) {
  if (req.userRole !== 'admin') {
    return res.status(403).json({ message: 'Acesso restrito a administradores.' });
  }
  next();
}