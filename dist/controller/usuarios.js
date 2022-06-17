"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
//Obtener todos los usuarios
const getUsuarios = (req, res) => {
    res.json({
        msg: 'getUsuarios'
    });
};
exports.getUsuarios = getUsuarios;
// Obtener un usuario por medio de su id
const getUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'getUsuario',
        id,
    });
};
exports.getUsuario = getUsuario;
// Crear un usuario
const postUsuario = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'postUsuario',
        body,
    });
};
exports.postUsuario = postUsuario;
// Actualizar los datos de un usuario
const putUsuario = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'putUsuario',
        body,
        id,
    });
};
exports.putUsuario = putUsuario;
// Eliminar un usuario
const deleteUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'deleteUsuario',
        id,
    });
};
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarios.js.map