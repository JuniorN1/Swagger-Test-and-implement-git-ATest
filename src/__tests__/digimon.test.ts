import request from 'supertest';
import  app  from '../app';
import connection from '../connection';



describe("Digimons", ()=>{
    const resultExpective =       
    [
        {
            "id": 1,
            "name": "digimon",
            "image": "https://user-images.githubusercontent.com/23733854/129489911-d647c6f5-11da-4c5a-9c9a-4045b46fa41c.png",
            "description": "Digimon Dejimon, também chamado de Digital Monsters ",
            "season": "season 1",
            "type":"anime",
        }
    ];   
    
    afterAll(async () => {
        connection.destroy();
    }
    );
    it("user can list all digimin with correct params",async ()=>{
        const response = await request(app)
        .get("/v1/digimons")
        .query({limit:10,offset:0});      
        expect(response.status).toBe(200);  
        const result =   JSON.parse(response.text);  
        expect(result).toEqual(resultExpective);      
    });    
    it("user search especifc digimon with correct params",async ()=>{
        const response = await request(app)
        .get("/v1/digimon/digimon");        
        expect(response.status).toBe(200);  
        const result =   JSON.parse(response.text);  
        expect(result).toEqual(resultExpective);  
    });  
    it("user can list all digimin with incorrect params",async ()=>{
        const response = await request(app)
        .get("/v1/digimons")
        .query({limit:"sdadas",offset:"sdsad"}); 
        expect(response.status).toBe(200);       
        expect(response.text).toContain("ValidationError");  
    
    });    
    it("user search a especifc digimon with incorrect params",async ()=>{
        const response = await request(app)
        .get("/v1/digimon/");        
        expect(response.status).toBe(404);  
            
    }); 
    it("user can list all digimons with offset not exist",async ()=>{
        const response = await request(app)
        .get("/v1/digimons")
        .query({limit:10,offset:1000}); 
        expect(response.text).toContain("[]");        

    
    });    
    it("user search a specific digimon whats not exist in database",async ()=>{
        const response = await request(app)
        .get("/v1/digimon/NotExistDigimon");        
        expect(response.status).toBe(200);  
        expect(response.text).toContain("[]");    
            
    }); 
})