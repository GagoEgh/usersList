export interface User{
    firstName:string;
    lastName: string;
    age: number;
    address: string;
}
export type userKeyType='firstName' | 'lastName'  | 'address'