import { SignificanceTasks } from "./significance";

export interface Task {
  id: string;
  userId: string;
  text: string;
  title: string;
  significance: SignificanceTasks;
  createdDate: string;
}
export type TaskEdit = Pick<Task, "text" | "title"> & {
  significance: SignificanceTasks | "";
};
