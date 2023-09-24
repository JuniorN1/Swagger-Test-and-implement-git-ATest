export interface PokemonProps {
    id: number;
    name: string;
    image: string;
    description: string;
    season: string;
    type: string;
}
export interface DigimonProps {
    id: number;
    name: string;
    image: string;
    description: string;
    season: string;
    type: string;
}
export interface PaginateProps {
    offset: number;
    limit: number;
}

export interface UserProps {
    id: number;
    name: string;
    email: string;
    password?: string;
    role_id: string;
    created_at: string;
    updated_at: string;
    deleted_at: string;
}

export interface LoginProps {
    email: string;
    password: string;
}

export interface RegisterProps {
    name: string;
    email: string;
    password: string;
    role_id?: number;
}

export interface YupErrorProps {
    value: Value;
    errors: string[];
    inner: Inner[];
    name: string;
    message: string;
}

export interface Value {
    email: string;
    password: string;
}

export interface Inner {
    value: string;
    path: string;
    type: string;
    errors: string[];
    params: Params;
    inner: any[];
    name: string;
    message: string;
}

export interface Params {
    value: string;
    originalValue: string;
    path: string;
    min: number;
}

