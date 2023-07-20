export interface userDataTypes {
  user: {
    id: number;
    fullName: string;
    phoneNo: string;
    userName: string;
  };
  login: {
    id: number;
    email: string;
    password: null;
    userRole: number;
    userRoles: string;
    status: string;
  };
}
