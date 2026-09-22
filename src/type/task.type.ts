import type { TaskStatus } from "./enum.type";
import type { TaskPriority} from "./enum.type";
export interface task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority:TaskPriority ;
  project: string;
  assignee?: string;
  createdBy: string;
  dueDate?: string;
  position: number;
  createdAt: string;
  updatedAt: string;
}
