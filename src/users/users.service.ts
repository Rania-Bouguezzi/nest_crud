import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserCreate } from './DTO/userCreate.dto';
import { userUpdate } from './DTO/userUpdate.dto';

@Injectable()
export class UsersService {

constructor(
    @InjectRepository(User) private usersRepository: Repository<User>
){}

findall(){
    return this.usersRepository.find()
}
findOne(id : number){
    return this.usersRepository.findOne({where: {id}})
}

createUser(user: UserCreate){
    const newUser = this.usersRepository.create(user)
    return this.usersRepository.save(newUser)
}

async update(id:number , user: userUpdate): Promise<User>{
const updateUser = await this.usersRepository.findOne({where:{id}})
this.usersRepository.merge(updateUser,user)
return await this.usersRepository.save(updateUser)
/*
await this.usersRepository.update(id,user)
return await this.usersRepository.findOne({where : {id}})
*/
}


delete(id:number){
    return this.usersRepository.delete(id)
}
 }
