import request from 'supertest';


import  app  from '../app';


describe("Pokemos", ()=>{
 
    it("if get pokemon?",async ()=>{
        const response = await request(app)
        .get("/v1/pokemons");        
        expect(response.status).toBe(200);       
    });    
    it("if get especific pokemon?",async ()=>{
        const response = await request(app)
        .get("/v1/pokemon/Caden");        
        expect(response.status).toBe(200);       
    });  
})