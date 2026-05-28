
export interface Ipassanger{
    id: number;
    fullname: string;
    checkedIn: boolean;
    checkInDate: null | number;
    children: null | IpassChild[]

}

export interface IpassChild{
    name:string;
    age:number;

}