export interface IProps {
  showSnackbar: (arg0: any) => void;
}
export interface IState {
  rooms: IRoom[];
}

export interface IRoom {
  id: number | null;
  name: string;
  avatar: string;
  users: IPeople[];
}

export interface IPeople {
  id: number | null;
  firts_name: string | null;
  last_name: string | null;
}
