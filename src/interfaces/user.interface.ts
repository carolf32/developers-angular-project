export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

export type TRegisterUser = Omit<IUser, 'id' | 'createdAt'>;
export type TLoginUser = Pick<IUser, 'email' | 'password'>;
export type TUpdateUser = Partial<Pick<IUser, 'name' | 'email' | 'password'>>;

export type TUserReturn = Omit<IUser, 'password'>;
export type TUserWithToken = {
  acessToken: string;
  user: TUserReturn;
};
