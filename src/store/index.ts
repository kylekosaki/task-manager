import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './projectsSlice';
import tasksReducer from './tasksSlice';
import timeBlocksReducer from './timeBlocksSlice';
import timerReducer from './timerSlice';

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    tasks: tasksReducer,
    timeBlocks: timeBlocksReducer,
    timer: timerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 