import { Request, Response } from 'express';

export const login = (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (email === 'test@example.com' && password === 'password') {
    return res.status(200).json({ message: 'Inicio de sesión exitoso' });
  } else {
    return res.status(401).json({ message: 'Credenciales inválidas' });
  }
};
