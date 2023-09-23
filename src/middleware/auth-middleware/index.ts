import { NextFunction, Request, Response } from "express";
import jwt, { Jwt } from "jsonwebtoken";

import UserRepository from "../../repositories/userRepository";

class AuthMiddleware {
    async verifyToken(
        request: Request,
        response: Response,
        next: NextFunction
    ): Promise<any> {
        const userRepository = new UserRepository();
        const bearerAuth = request?.headers?.authorization;
        try {
            if (!bearerAuth) {
                return response.status(403).json({ message: "Faça login" });
            }
            const token = bearerAuth?.split(" ")[1];

            if (!process.env.JWT_SECRET) {
                return new Error("Jwt secret is required");
            }

            const payload: any = jwt.verify(token, process.env.JWT_SECRET);
            if (!payload) return;

            await userRepository.getUserByEmail(payload?.id);

            next();
        } catch (error) {
            return response.status(403).json({ message: "Token invalido" });
        }
    }
}

export default AuthMiddleware;

