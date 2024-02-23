import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";




@Entity()
export class User{

    @PrimaryGeneratedColumn()
    
    id:number;

    @Column()
    username: string

    @Column()
    email:string;
    @Column()
    adress:string;
    @Column()
    phone:string;
}