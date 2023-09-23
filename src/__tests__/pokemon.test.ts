import request from "supertest";

import app from "../app";
import connection from "../connection";

describe("Pokemos", () => {
    afterAll(async () => {
        connection.destroy();
    });
    it("user can list all pokemon with correct params", async () => {
        const response = await request(app)
            .get("/v1/pokemons")
            .query({ limit: 10, offset: 0 });
        expect(response.status).toBe(200);
        const result = JSON.parse(response.text);
        expect(result).toEqual([
            {
                id: 1,
                name: "pokemon",
                image: "https://img.icons8.com/color/512/000000/pokeball-2.png",
                description: "The original Pokémon",
                season: "season 1",
                type: "anime",
            },
        ]);
    });
    it("user search specific pokemon with correct params", async () => {
        const response = await request(app).get("/v1/pokemon/pokemon");
        expect(response.status).toBe(200);
    });
    it("user can list all pokemon with incorrect params", async () => {
        const response = await request(app)
            .get("/v1/pokemons")
            .query({ limit: "sdadas", offset: "sdsad" });
        expect(response.status).toBe(200);
        expect(response.text).toContain("ValidationError");
    });
    it("user search pokemon with incorrect params", async () => {
        const response = await request(app).get("/v1/pokemon/");
        expect(response.status).toBe(404);
    });

    it("user can list all pokemon with offset not exist", async () => {
        const response = await request(app)
            .get("/v1/pokemons")
            .query({ limit: 10, offset: 800 });
        expect(response.status).toBe(200);
        expect(response.text).toContain("[]");
    });
    it("user search a specific pokemon whats not exist in database", async () => {
        const response = await request(app).get("/v1/pokemon/NotExistPokemon");
        expect(response.status).toBe(200);
        expect(response.text).toContain("[]");
    });
});
