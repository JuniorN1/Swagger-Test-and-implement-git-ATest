import request from 'supertest'
import  app  from '../app'
describe("Pokemos", ()=>{
    it("if get pokemon?",async ()=>{
        const response = await request(app)
        .get("/v1/pokemons");        
        expect(response.status).toBe(200);
         expect(response.body).toHaveProperty("name");
})
})