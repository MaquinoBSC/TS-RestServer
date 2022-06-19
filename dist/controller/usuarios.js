"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
//Obtener todos los usuarios
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield usuario_1.default.findAll({
        where: {
            estado: true
        }
    });
    res.json({
        success: true,
        usuarios,
    });
});
exports.getUsuarios = getUsuarios;
// Obtener un usuario por medio de su id
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_1.default.findByPk(id);
    if (usuario) {
        if (!(usuario === null || usuario === void 0 ? void 0 : usuario.get().estado)) {
            return res.status(404).json({
                success: false,
                msg: `Usuario no acivo. Contacte al admin`
            });
        }
        else {
            res.json({
                success: true,
                usuario
            });
        }
    }
    else {
        res.status(404).json({
            success: false,
            msg: `No existe el usuario: ${id}`
        });
    }
});
exports.getUsuario = getUsuario;
// Crear un usuario
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeEmail = yield usuario_1.default.findOne({
            where: {
                email: body.email
            }
        });
        if (existeEmail) {
            return res.status(400).json({
                success: false,
                msg: `Ya existe un usuario con email ${body.email}`
            });
        }
        const usuario = usuario_1.default.build(body);
        yield usuario.save();
        res.json({
            success: true,
            usuario,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            msg: 'Hable con el admin'
        });
    }
});
exports.postUsuario = postUsuario;
// Actualizar los datos de un usuario
const putUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        // Verificar que exista un usuario que acualizar
        const usuario = yield usuario_1.default.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                success: false,
                msg: `No existe usuario con id: ${id}`
            });
        }
        // Verificar que no se dupliquen los emails en base de datos
        if (body.email) {
            const existeEmail = yield usuario_1.default.findOne({
                where: {
                    email: body.email
                }
            });
            if ((existeEmail === null || existeEmail === void 0 ? void 0 : existeEmail.get().id) != id) {
                return res.status(400).json({
                    success: false,
                    msg: `Ya existe un usuario con email ${body.email}`
                });
            }
        }
        yield usuario.update(body);
        res.json({
            success: true,
            usuario,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            msg: 'Hable con el admin'
        });
    }
});
exports.putUsuario = putUsuario;
// Eliminar un usuario
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const usuario = yield usuario_1.default.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                success: false,
                msg: `No se encontro usuario con el id: ${id}`
            });
        }
        // Eliminacion fisica
        // await usuario.destroy();
        // Eliminacion logica
        yield usuario.update({
            estado: false
        });
        res.json({
            success: true,
            usuario,
        });
    }
    catch (error) {
        res.json({
            success: false,
            msg: 'Hable con el admin',
        });
    }
});
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarios.js.map