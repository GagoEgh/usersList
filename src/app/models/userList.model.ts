export interface User{
    firstName:string;
    lastName: string;
    age: number;
    address: string;
    id:number
}
export type userKeyType= keyof User; 