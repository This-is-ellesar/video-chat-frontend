export interface IBaseState {
  snackbar: ISnackbar;
}

export interface ISnackbar {
  type: string;
  message: string;
  show: boolean;
}
