import connection from "../connection";
import { DigimonProps } from "../typings";

class DigimonRepository {
    async getDigimons(
        offset: number,
        limit: number
    ): Promise<DigimonProps[] | unknown> {
        try {
            const result: DigimonProps[] = await connection("digimon_type_pivo")
                .innerJoin(
                    "digimons",
                    "digimons.id",
                    "=",
                    "digimon_type_pivo.digimon_id"
                )
                .innerJoin(
                    "digimon_type",
                    "digimon_type.id",
                    "=",
                    "digimon_type_pivo.type_id"
                )
                .select("digimons.*", "digimon_type.type")
                .offset(offset)
                .limit(limit);
            return result;
        } catch (error) {
            return error;
        }
    }

    async getAnDigimon(name: string): Promise<DigimonProps[] | unknown> {
        try {
            const result: DigimonProps[] = await connection("digimon_type_pivo")
                .innerJoin(
                    "digimons",
                    "digimons.id",
                    "=",
                    "digimon_type_pivo.digimon_id"
                )
                .innerJoin(
                    "digimon_type",
                    "digimon_type.id",
                    "=",
                    "digimon_type_pivo.type_id"
                )
                .select("digimons.*", "digimon_type.type")
                .where("name", name);

            return result;
        } catch (error) {
            return error;
        }
    }
}

export default DigimonRepository;

