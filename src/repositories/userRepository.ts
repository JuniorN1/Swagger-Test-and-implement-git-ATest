import connection from "../connection";

interface UserProps {
    id: number;
    name: string;
    email: string;
    password: string;
    role_id: string;
    created_at: string;
    updated_at: string;
    deleted_at: string;
}
class UserRepository {
    async login(email: string, password: string): Promise<any | unknown> {
        try {
            // TODO: need to implement bcrypt for match login
            const result: UserProps = await connection("users")
                .select("password")
                .where("email", email)
                .first();
            return result;
        } catch (error) {}
    }
}

export default UserRepository;

