import * as yup from "yup";
import { NextFunction, Request, Response } from "express";
import { YupErrorProps } from "../typings";

class LoginRequest {
    async validateRequest(
        request: Request,
        response: Response,
        next: NextFunction
    ) {
        let schema = yup.object().shape({
            email: yup.string().email().required(),
            password: yup.string().min(8).max(16).required(),
        });

        try {
            const teste = await schema.validate(request.body, {
                abortEarly: false,
            });
            console.log(teste);
            next();
        } catch (validateError) {
            const { errors } = validateError as YupErrorProps;
            return response.status(400).json(errors);
        }
    }
}
export default LoginRequest;

