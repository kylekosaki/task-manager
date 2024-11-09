import { useState } from 'react';
import Sidebar from './Sidebar';
import TaskSection from './TaskSection';
import TimelineSection from './TimelineSection';

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <div className="w-64 border-r">
        <Sidebar />
      </div>

      {/* Middle Task Section */}
      <div className="flex-1 border-r p-4">
        <TaskSection />
      </div>

      {/* Right Timeline Section */}
      <div className="w-96">
        <TimelineSection />
      </div>
    </div>
  );
};

export default Dashboard; 