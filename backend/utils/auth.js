import jwt from "jsonwebtoken"
import { createError } from "./createError.js";
export const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return next(createError("Unauthorized: No token provided", 401));

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return next(createError("Unauthorized: Invalid token", 403));
        req.user = decoded;
        next();
    });
};
export const isAdmin = (req, res, next) => {
    if (!req.user || !req.user.isAdmin) {
        return next(createError("Forbidden: Admin access required", 403));
    }
    next();
};
export const verifyUser = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        }
        else {
            return next(createError("You're not authorized", 403))
        }
    })
}
export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        }
        else {
            return next(createError("Forbidden: Admin access required", 403))
        }
    })
}