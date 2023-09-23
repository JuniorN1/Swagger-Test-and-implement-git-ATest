import jwt, { JwtPayload, Secret } from "jsonwebtoken";

class JwtToken {
    private readonly jwtSecret: Secret;
    constructor() {
        this.jwtSecret = process.env.JWT_SECRET ?? "default";
    }

    async generateToken(email: string): Promise<string | undefined> {
        try {
            return jwt.sign(
                {
                    id: email,
                },
                "secret",
                { expiresIn: "1h" }
            );
        } catch (error) {
            console.log(error);
        }
    }

    async verifyToken(token: string): Promise<string | JwtPayload | undefined> {
        // invalid token - synchronous
        try {
            return jwt.verify(token, "wrong-secret");
        } catch (err) {
            console.log(err);
        }
    }
}

export default JwtToken;

