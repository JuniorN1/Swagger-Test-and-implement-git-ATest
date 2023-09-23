export interface PokemonProps{
    id: number,
    name: string,
    image: string,
    description: string,
    season: string,
    type: string
}
export interface DigimonProps{
    id: number,
    name: string,
    image: string,
    description: string,
    season: string,
    type: string
}
export interface PaginateProps{
    offset:number,
    limit:number,     
}


export interface LoginProps{
    email:string,
    password:string,     
}

export interface RegisterProps{
    name: string,
    email:string,
    password:string,      
}

