export interface Project {
  id: string;
  name: string;
  createdAt: Date;
  tasks: Task[];
}

export interface Task {
  id: string;
  projectId: string;
  title: string;
  description?: string;
  isCompleted: boolean;
  isArchived: boolean;
  timeBlocks: TimeBlock[];
  totalTimeSpent: number;
}

export interface TimeBlock {
  id: string;
  taskId: string;
  startTime: Date;
  duration: number; // in minutes
  isBreak: boolean;
} 