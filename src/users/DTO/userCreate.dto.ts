import { IsEmail, IsNumber, IsString } from "class-validator";






export class UserCreate{
   
       id:number;

 @IsString()
    username: string

   @IsEmail()
    email:string;
   @IsString()
    adress:string;
    @IsString()
    phone:string;
}