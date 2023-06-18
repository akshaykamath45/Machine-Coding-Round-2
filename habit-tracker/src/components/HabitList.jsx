import React, { useState } from "react";
import HabitTracker from "./HabitTracker";

const HabitList = ({ habits, onEditHabit, onDeleteHabit }) => {
  const [selectedHabit, setSelectedHabit] = useState(null);

  const handleSelectHabit = (habit) => {
    setSelectedHabit(habit === selectedHabit ? null : habit);
  };

  return (
    <div className="habit-list">
      <h2>Your Habits</h2>
      {habits.map((habit) => (
        <div key={habit.id}>
          <div
            className={`habit-list-item ${
              selectedHabit && selectedHabit.id === habit.id ? "selected" : ""
            }`}
            onClick={() => handleSelectHabit(habit)}
          >
            <h3>{habit.name}</h3>
          </div>
          {selectedHabit && selectedHabit.id === habit.id && (
            <div className="habit-details">
              <HabitTracker
                habit={habit}
                onEdit={onEditHabit}
                onDelete={onDeleteHabit}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HabitList;
