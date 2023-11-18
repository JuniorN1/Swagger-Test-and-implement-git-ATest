import connection from "../connection";
import { UserProps } from "../typings";


class UserRepository {
    async login(email: string, password: string): Promise<UserProps | unknown> {
        // TODO: need to implement bcrypt for match login
        const result: UserProps = await connection("users")
            .select("*")
            .where("email", email)
            .first();
        return result;
    }

    async getUserByEmail(email: string): Promise<UserProps | unknown> {
        const result: UserProps = await connection("users")
            .select("*")
            .where("email", email)
            .first();
        return result;
    }
}

export default UserRepository;

