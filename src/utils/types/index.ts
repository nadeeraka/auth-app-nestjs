export interface user {
  id: number;
  email: string;
  password: string;
  createdAt: string;
  age: string;
  isAdmin: boolean;
  updatedAt: string;
  username: string;
}

export interface userLogin {
  email: string;
  password: string;
}

export interface userRegister {
  email: string;
  password: string;
  username: string;
  age: string;
}
