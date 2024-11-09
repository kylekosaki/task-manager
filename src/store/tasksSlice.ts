import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../types';

const initialState: Task[] = [];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Omit<Task, 'id' | 'timeBlocks' | 'totalTimeSpent'>>) => {
      state.push({
        id: crypto.randomUUID(),
        timeBlocks: [],
        totalTimeSpent: 0,
        isCompleted: false,
        isArchived: false,
        ...action.payload,
      });
    },
    updateTask: (state, action: PayloadAction<Partial<Task> & { id: string }>) => {
      const index = state.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
    toggleTaskComplete: (state, action: PayloadAction<string>) => {
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.isCompleted = !task.isCompleted;
      }
    },
    archiveTask: (state, action: PayloadAction<string>) => {
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.isArchived = true;
      }
    },
    updateTaskTime: (state, action: PayloadAction<{ taskId: string; timeSpent: number }>) => {
      const task = state.find(task => task.id === action.payload.taskId);
      if (task) {
        task.totalTimeSpent += action.payload.timeSpent;
      }
    },
  },
});

export const { 
  addTask, 
  updateTask, 
  toggleTaskComplete, 
  archiveTask,
  updateTaskTime 
} = tasksSlice.actions;
export default tasksSlice.reducer; 