import connection from '../connection';

interface Paginate{
       offset:number;
       limit:number; 
}
interface PokemonProps{
    id:number;
    name:string;
    image:string;
    description:Text;
    season:string;

}

class pokemonRepository{

    getPokemons = async (offset:number,limit:number)=>  {
       
        try{
            
            const result:PokemonProps[] = await  connection('pokemons')
            .innerJoin('pokemon_type', 'pokemon_type.id', '=', 'pokemons.type')
            .select('pokemons.*','pokemon_type.type')
            .offset(offset)
            .limit(limit);  
       
            return result;

        }catch(error){

            return error;    
        
        }
        
    }

    getAnPokemon = async (name:string)=>{
        try{
            
            const result:PokemonProps[] = await  connection('pokemons')
            .innerJoin('pokemon_type', 'pokemon_type.id', '=', 'pokemons.type')
            .select('pokemons.*','pokemon_type.type')
            .where('name',name);  
       
            return result;

        }catch(error){

            return error;    
        
        }
    }

}

export default pokemonRepository;