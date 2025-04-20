export interface IComment {
  id: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  devId: number;
  user: {
    id: number;
    name: string;
    email: string;
  };
}

export type TCommentCreate = {
  content: string;
  devId: number;
  userId: number;
};
export type TReturnComment = {
  id: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  devId: number;
  userId: number;
};
