import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TimeBlock } from '../types';

const initialState: TimeBlock[] = [];

const timeBlocksSlice = createSlice({
  name: 'timeBlocks',
  initialState,
  reducers: {
    addTimeBlock: (state, action: PayloadAction<Omit<TimeBlock, 'id'>>) => {
      state.push({
        id: crypto.randomUUID(),
        ...action.payload,
      });
    },
    updateTimeBlock: (state, action: PayloadAction<Partial<TimeBlock> & { id: string }>) => {
      const index = state.findIndex(block => block.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
    deleteTimeBlock: (state, action: PayloadAction<string>) => {
      return state.filter(block => block.id !== action.payload);
    },
  },
});

export const { addTimeBlock, updateTimeBlock, deleteTimeBlock } = timeBlocksSlice.actions;
export default timeBlocksSlice.reducer; 