interface TaskShackbarProps {
  open: boolean;
  handleClose: (event: React.SyntheticEvent | Event, reason?: string) => void;
  message: string;
}

export default TaskShackbarProps;
