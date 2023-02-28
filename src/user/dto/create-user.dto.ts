import { IsNotEmpty, IsString } from "@nestjs/class-validator";
export class CreateUserDto{
      @IsString()
      @IsNotEmpty()
      public "first name": string;

      @IsString()
      @IsNotEmpty()
      public "last name": string;

      @IsString()
      @IsNotEmpty()
      public password: string;

      @IsString()
      @IsNotEmpty()
      public username: string;

      @IsString()
      public role: string;
}
