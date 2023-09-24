import { Request, Response } from "express";

import JwtToken from "../../auth/sing";
import UserRepository from "../../repositories/userRepository";
import { LoginProps, RegisterProps } from "../../typings";

class AuthController {
    async login(request: Request, response: Response) {
        const { email, password } = request.body as LoginProps;
        const userRepository = new UserRepository();
        const result: any = await userRepository.login(email, password);
        if (!result) {
            return response.status(404).json(["Usuario nao encontrado"]);
        }
        delete result["password"];
        const jwtToken = new JwtToken();
        const token = await jwtToken.generateToken(email);
        return response.json({ ...result, token: token });
    }

    async register(request: Request, response: Response) {
        const { email, name, password } = request.params
            .name as unknown as RegisterProps;
    }
}
export default AuthController;

