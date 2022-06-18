import { Request, Response} from 'express';
import Usuario from '../models/usuario';


//Obtener todos los usuarios
export const getUsuarios= async ( req: Request, res: Response )=> {
    const usuarios= await Usuario.findAll();
    res.json({
        success: true,
        usuarios,
    });
}

// Obtener un usuario por medio de su id
export const getUsuario= async ( req: Request, res: Response )=> {
    const { id }= req.params;
    const usuario= await Usuario.findByPk( id );

    if( usuario ){
        res.json({
            success: true,
            usuario
        });
    }
    else{
        res.status( 404 ).json({
            success: false,
            msg: `No existe el usuario: ${id}`
        })
    }

}

// Crear un usuario
export const postUsuario= ( req: Request, res: Response )=> {
    const { body }= req;

    res.json({
        msg: 'postUsuario',
        body,
    });
}

// Actualizar los datos de un usuario
export const putUsuario= ( req: Request, res: Response )=> {
    const { id }= req.params;
    const { body }= req;

    res.json({
        msg: 'putUsuario',
        body,
        id,
    });
}

// Eliminar un usuario
export const deleteUsuario= ( req: Request, res: Response )=> {
    const { id }= req.params;

    res.json({
        msg: 'deleteUsuario',
        id,
    });
}