
export interface iCartObject{
    id: number,
    name: string,
    value: number,
    img: string,
    quantity: number
    category: string
}

export interface iProduct {
    id: number,
    name: string,
    category: string,
    price: number,
    img: string
}

export interface iError {
    error:string
}

export interface iRegister {
    name: string,
    email: string,
    password:string,
    passwordConfirm: string,
}
export interface iUser {
    email:string,
    name:string,
    id:number

}
export interface iRegisterResponse{
    accessToken: string,
    user: iUser
}

export interface iLogin {
    email:string,
    password:string,
}

export interface iLoginResponse{
    accessToken: string,
    user: iUser
}