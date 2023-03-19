export interface GenericResponse{
    succeeded:boolean;
    message:string;
}

export interface IGenericResponse<T>{
    data:T;
    succeeded:boolean;
    message:string;
}
export interface LoginResponse{
    data:string;
    succeeded:boolean;
    message:string;
    accesos:string;
}