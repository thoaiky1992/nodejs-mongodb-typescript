import { IsEmail, MinLength } from "class-validator"

export class UserDto {
  @MinLength(10)
  name: string;

  @IsEmail({},{
    message: 'Email không đúng định dạng !!!'
  })
  email: string;

  password: string;

}