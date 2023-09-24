import jwt, { JwtPayload, Secret } from 'jsonwebtoken';

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
                this.jwtSecret,
                { expiresIn: "1h" }
            );
        } catch (error) {
            console.log(error);
        }
    }

    async verifyToken(token: string): Promise<string | JwtPayload | undefined> {
        // invalid token - synchronous
        try {
            return jwt.verify(token, this.jwtSecret);
        } catch (err) {
            console.log(err);
        }
    }
}

export default JwtToken;

