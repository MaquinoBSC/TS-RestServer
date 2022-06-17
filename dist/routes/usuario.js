"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_1 = require("../controller/usuarios");
const router = (0, express_1.Router)();
// Obtener todos los usuarios
router.get('/', usuarios_1.getUsuarios);
// Obtener un usuario en especifico
router.get('/:id', usuarios_1.getUsuario);
// Crear un usuario
router.post('/', usuarios_1.postUsuario);
// Actualizar los datos de un usuario en especifico
router.put('/:id', usuarios_1.putUsuario);
// Eliminar un usuario en especifico
router.delete('/:id', usuarios_1.deleteUsuario);
exports.default = router;
//# sourceMappingURL=usuario.js.map