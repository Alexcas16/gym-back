"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const login = (req, res) => {
    const { email, password } = req.body;
    if (email === 'test@example.com' && password === 'password') {
        return res.status(200).json({ message: 'Inicio de sesión exitoso' });
    }
    else {
        return res.status(401).json({ message: 'Credenciales inválidas' });
    }
};
exports.login = login;
