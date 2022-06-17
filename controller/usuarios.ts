import { Request, Response} from 'express';


//Obtener todos los usuarios
export const getUsuarios= ( req: Request, res: Response )=> {
    res.json({
        msg: 'getUsuarios'
    });
}

// Obtener un usuario por medio de su id
export const getUsuario= ( req: Request, res: Response )=> {
    const { id }= req.params;

    res.json({
        msg: 'getUsuario',
        id,
    });
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