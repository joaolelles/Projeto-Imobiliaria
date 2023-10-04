import { Request, Response, NextFunction } from 'express';

const authRole = (req: Request, res: Response, next: NextFunction) => {
    const { role } = req.body;
    if(role !== 'saler' && role !== 'buyer' && role !== 'tenant' && role !=='locator' && role !== 'default') {
        return res.status(401).json({ message: 'Role não autorizado'})
    }
    next();
};

export default authRole;