import connection from "../connection";
import { RegisterProps, UserProps } from "../typings";

class UserRepository {
    async login(email: string, password: string): Promise<UserProps> {
        // TODO: need to implement bcrypt for match login
        const result: UserProps = await connection("users")
            .select("*")
            .where("email", email)
            .first();
        return result;
    }

    async getUserByEmail(email: string): Promise<UserProps> {
        const result: UserProps = await connection("users")
            .select("*")
            .where("email", email)
            .first();
        return result;
    }

    async register(userData: RegisterProps): Promise<UserProps> {
        const result: UserProps = await connection("users")
            .returning(["id", "title"])
            .insert(userData);
        delete result["password"];
        return result;
    }
}

export default UserRepository;

