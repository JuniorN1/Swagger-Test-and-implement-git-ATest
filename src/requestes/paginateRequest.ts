import * as yup from 'yup';
import { NextFunction, Request,  Response} from "express";

class paginateRequest{
    async validateRequest(request:Request,response:Response,next:NextFunction) {
        const {offset,limit} = request.query;
        let schema = yup.object().shape({
            offset: yup.number().required().integer(),
            limit: yup.number().required().integer(),
        });
        try{
          await schema.validate(request.query,{abortEarly:false});
          next();
         
        }catch(err){
            return response.json(err);           
        }
  
    }
}
export default paginateRequest;