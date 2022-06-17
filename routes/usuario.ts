import { Router } from 'express';
import { getUsuarios, getUsuario, postUsuario, putUsuario, deleteUsuario } from '../controller/usuarios';

const router= Router();

// Obtener todos los usuarios
router.get( '/', getUsuarios );

// Obtener un usuario en especifico
router.get( '/:id', getUsuario );

// Crear un usuario
router.post( '/', postUsuario );

// Actualizar los datos de un usuario en especifico
router.put( '/:id', putUsuario );

// Eliminar un usuario en especifico
router.delete( '/:id', deleteUsuario );


export default router;