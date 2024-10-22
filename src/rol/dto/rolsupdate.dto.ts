import { CreateRolsDto } from "./rols.dto";
import { PartialType } from "@nestjs/mapped-types";
export class UpdateRolsDto extends PartialType(CreateRolsDto){}