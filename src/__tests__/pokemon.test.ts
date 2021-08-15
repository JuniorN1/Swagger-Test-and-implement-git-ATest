import request from 'supertest';

import connection from '../connection';
import  app  from '../app';


describe("Pokemos", ()=>{
    afterAll(async () => {
            connection.destroy();
        }
    );
    it("if get pokemon?",async ()=>{
        const response = await request(app)
        .get("/v1/pokemons");        
        expect(response.status).toBe(200);    
 
    });    
    it("if get especific pokemon?",async ()=>{
        const response = await request(app)
        .get("/v1/pokemon/pokemon");        
        expect(response.status).toBe(200);
        
    });  
})