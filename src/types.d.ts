export interface DataStructure<T> {
  data: T;
}

export interface GetUsers {
  getAllUsers: User[];
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
