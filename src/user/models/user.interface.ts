export interface User {
    id?: number,
    name?: string,
    username?: string,
    email?: string,
    role?: UserRole,
    password?: string
}

export enum UserRole {
    ADMIN = "admin",
    EDITOR = "editor",
    CHIEFEDITOR = "chiefeditor",
    USER = "user"
}