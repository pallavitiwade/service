
export interface Istd{
    Fullname: string;
    Email: string;
    contact: string;
    IsActive: boolean;
    id: string;
}

export interface IstdRes{
    msg:string;
    data:Istd
}

export interface IRes<T>{
    msg:string
    data:T
}