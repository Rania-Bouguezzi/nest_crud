import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { UserCreate } from './DTO/userCreate.dto';
import { userUpdate } from './DTO/userUpdate.dto';

@Controller('users')
@UsePipes(new ValidationPipe({whitelist:true})) //n'accepte pas d'autre attribut
export class UsersController {


constructor(private readonly userService : UsersService){}


@Get()
finAll(){
    return this.userService.findall()
}

@Get(':id')
findOne(@Param('id') id : number){
  const user=  this.userService.findOne(id)
  if(!user){
    throw new HttpException('User with '+id +'Not Found !', 404)
  
}
return this.userService.findOne(id)  }

@Post('add')
createUser(@Body() user:UserCreate){
    return this.userService.createUser(user)
}


@Patch(':id')
updateUser(@Param ('id') id:number, @Body() user: userUpdate){
  const newuser = this.userService.findOne(id)

  if(!newuser){
    throw new HttpException('user not found', 404)
  }

  return this.userService.update(id,user)  
}

@Delete(':id')
deleteUser(@Param('id') id : number){
    const user = this.userService.findOne(id)
    if (!user) {
        throw new HttpException('User not found ', 404)
    
    }
   return this.userService.delete(id)
}


}
