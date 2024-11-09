import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { useState, useCallback } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';