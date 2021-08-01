import request from 'supertest';

import { getConnection } from 'connect';
import { app } from '../app';
import createConnection from '../database';

describe("Pokemos", ()=>{
    beforeAll(async()=>{
        const connection =await createConnection();
        await connection.runMigrations();
    })
    afterAll(async()=>{
        const connection = getConnection();
        await connection.dropDatabase();
        await connection.close();
    })
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