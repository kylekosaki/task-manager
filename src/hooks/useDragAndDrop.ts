import { useState, useCallback } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { TimeBlock } from '../types';

export const useDragAndDrop = () => {
  const [draggingTask, setDraggingTask] = useState<string | null>(null);

  const handleDragStart = useCallback((taskId: string) => {
    setDraggingTask(taskId);
  }, []);

  const handleDragEnd = useCallback(() => {
    setDraggingTask(null);
  }, []);

  const handleTimeBlockDrop = useCallback((time: Date) => {
    if (!draggingTask) return;

    // Round to nearest 15 minutes
    const minutes = time.getMinutes();
    const roundedMinutes = Math.round(minutes / 15) * 15;
    const roundedTime = new Date(time);
    roundedTime.setMinutes(roundedMinutes);

    return {
      taskId: draggingTask,
      startTime: roundedTime,
      duration: 30, // Default 30-minute block
    };
  }, [draggingTask]);

  return {
    draggingTask,
    handleDragStart,
    handleDragEnd,
    handleTimeBlockDrop,
  };
}; 