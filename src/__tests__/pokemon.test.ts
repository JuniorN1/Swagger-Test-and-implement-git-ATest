import request from 'supertest'
import  app  from '../app'
describe("Pokemos", ()=>{
    it("Should be able to create a new surveys",async ()=>{
        const response = await request(app)
        .get("/v1/pokemons");        
        expect(response.status).toBe(200);
        // expect(response.body).toHaveProperty("name",);
})
})