export class CreateAuthDto {
  readonly email: string;
  readonly password: string;
  readonly username: string;
}

export class LoginDto {
  readonly email: string;
  readonly password: string;
}
