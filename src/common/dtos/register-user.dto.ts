import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class RegisterUserDTO {
  @IsString()
  @IsNotEmpty()
  username: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  password: string;
  @IsNumber()
  @IsNotEmpty()
  role_id: number;
  @IsString()
  fname: string;
  @IsString()
  lname: string;
}
