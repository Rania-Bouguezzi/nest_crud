import { PartialGraphHost } from "@nestjs/core"
import { UserCreate } from "./userCreate.dto"
import { PartialType } from "@nestjs/mapped-types"



export class userUpdate extends PartialType(UserCreate){}