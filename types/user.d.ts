type UserData = {
  username: string;
  name: string;
};

type UserDataWithPassword = UserData & { password: string };

type AuthUser = {
  user: UserData;
  isLoggedIn: true;
};
