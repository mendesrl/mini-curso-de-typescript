//accountInfo
//userInfo

type AccountInfo = {
  id: number;
  name: string;
  email?: string;
};

type UserInfo = {
  nickname: string;
  level: number;
};

const account: AccountInfo = {
  id: 1,
  name: "Larissa",
};

const user: UserInfo = {
  nickname: "mendesrl",
  level: 100,
};

type PlayerInfo = AccountInfo & UserInfo;

const player: PlayerInfo = {
  id: 1,
  name: "Larissa",
  nickname: "mendesrl",
  level: 100,
};
