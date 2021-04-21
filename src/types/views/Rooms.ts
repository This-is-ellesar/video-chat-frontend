export interface IRooms {
    id: number | null
    name: string | null
    peoples: IPeople[]
}

export interface IPeople {
    id: number | null
    firts_name: string | null
    last_name: string | null
}