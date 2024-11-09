import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Project } from '../types';

const initialState: Project[] = [];

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProject: (state, action: PayloadAction<{ name: string }>) => {
      state.push({
        id: crypto.randomUUID(),
        name: action.payload.name,
        createdAt: new Date(),
        tasks: [],
      });
    },
    updateProject: (state, action: PayloadAction<Partial<Project> & { id: string }>) => {
      const index = state.findIndex(project => project.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
    deleteProject: (state, action: PayloadAction<string>) => {
      return state.filter(project => project.id !== action.payload);
    },
  },
});

export const { addProject, updateProject, deleteProject } = projectsSlice.actions;
export default projectsSlice.reducer; 