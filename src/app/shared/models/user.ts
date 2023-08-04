export interface User {
    _id? :string;
    name: string;
    email: string;
    password?:string; //quitar contrase;a cuando se hagan peticiones
    confirm?: string;
    course: string;
    status: string;
    createdAt?: string;

}
