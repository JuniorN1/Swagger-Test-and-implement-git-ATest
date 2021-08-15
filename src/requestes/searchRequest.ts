import * as yup from 'yup';
import { NextFunction, Request,  Response} from "express";

class searchRequest{
    async validateRequest(request:Request,response:Response,next:NextFunction) {
        const name = request.params.name as unknown as string;

        let schema = yup.object().shape({
            name: yup.string().required(),
  
        });
        try{
          await schema.validate(request.params,{abortEarly:false});
          next();
         
        }catch(err){
            return response.json(err);           
        }
  
    }
}
export default searchRequest;