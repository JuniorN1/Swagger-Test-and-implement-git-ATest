import { Request, Response } from "express";

import { LoginProps, RegisterProps } from "../../typings";
import UserRepository from "../../repositories/userRepository";
import JwtToken from "../../auth/sing";

class AuthController {
    async login(request: Request, response: Response) {
        const { email, password } = request.body as LoginProps;
        const userRepository = new UserRepository();
        const result = await userRepository.login(email, password);

        const jwtToken = new JwtToken();
        const token = await jwtToken.generateToken(email);
        console.log(token);
        return response.json({ email: email, password: password });
    }

    async register(request: Request, response: Response) {
        const { email, name, password } = request.params
            .name as unknown as RegisterProps;
    }
}
export default AuthController;

