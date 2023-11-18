import { NextFunction, Request, Response } from "express";
import * as yup from "yup";

class SearchRequest {
    async validateRequest(
        request: Request,
        response: Response,
        next: NextFunction
    ) {
        let schema = yup.object().shape({
            name: yup.string().required(),
        });
        try {
            await schema.validate(request.params, { abortEarly: false });
            next();
        } catch (err) {
            return response.json(err);
        }
    }
}
export default SearchRequest;
