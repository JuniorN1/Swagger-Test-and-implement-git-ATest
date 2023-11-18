import { NextFunction, Request, Response } from "express";
import * as yup from "yup";

class PaginateRequest {
    async validateRequest(
        request: Request,
        response: Response,
        next: NextFunction
    ) {
        let schema = yup.object().shape({
            offset: yup.number().required().integer(),
            limit: yup.number().required().integer(),
        });
        try {
            await schema.validate(request.query, { abortEarly: false });
            next();
        } catch (err) {
            return response.json(err);
        }
    }
}
export default PaginateRequest;
