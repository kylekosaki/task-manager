import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TimerState {
  currentTaskId: string | null;
  isRunning: boolean;
  isPaused: boolean;
  startTime: number | null;
  elapsedTime: number;
  breakMode: boolean;
}

const initialState: TimerState = {
  currentTaskId: null,
  isRunning: false,
  isPaused: false,
  startTime: null,
  elapsedTime: 0,
  breakMode: false,
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    startTimer: (state, action: PayloadAction<string>) => {
      state.currentTaskId = action.payload;
      state.isRunning = true;
      state.startTime = Date.now();
      state.isPaused = false;
    },
    pauseTimer: (state) => {
      state.isPaused = true;
      state.isRunning = false;
      if (state.startTime) {
        state.elapsedTime += Date.now() - state.startTime;
      }
    },
    resumeTimer: (state) => {
      state.isPaused = false;
      state.isRunning = true;
      state.startTime = Date.now();
    },
    stopTimer: (state) => {
      state.isRunning = false;
      state.isPaused = false;
      state.currentTaskId = null;
      state.startTime = null;
      state.elapsedTime = 0;
    },
    toggleBreakMode: (state) => {
      state.breakMode = !state.breakMode;
    },
  },
});

export const { 
  startTimer, 
  pauseTimer, 
  resumeTimer, 
  stopTimer, 
  toggleBreakMode 
} = timerSlice.actions;
export default timerSlice.reducer; 