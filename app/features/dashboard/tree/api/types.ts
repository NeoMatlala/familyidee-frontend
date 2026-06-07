export type PersonNodeType = {
    name: string
    surname: string
    yearOfBirth: string
    yearOfDeath: string | null
}

export type TreenNodeType = {
    id: string
    type: string
    position: { x: number; y: number }
    data: PersonNodeType
}