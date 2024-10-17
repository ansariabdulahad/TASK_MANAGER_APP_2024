import jwt from 'jsonwebtoken';

export const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers['authorization']?.split(' ')[1];

        if (!token) return res.status(401).json({
            success: false,
            message: "Access denied, Token is required!"
        });

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        // check user loggedin
        if (!decoded?.isLoggedIn) return res.status(401).json({
            success: false,
            message: "Access denied, please login"
        });

        req.user = decoded;
        next();

    } catch (error) {
        next(error);
    }
}