import React, { useState } from "react";
import HabitTracker from "./HabitTracker";

const HabitList = ({ habits, onEditHabit, onDeleteHabit }) => {
  const [selectedHabit, setSelectedHabit] = useState(null);

  const handleSelectHabit = (habit) => {
    setSelectedHabit(habit === selectedHabit ? null : habit);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2
        style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}
      >
        Your Habits
      </h2>
      {habits.map((habit) => (
        <div key={habit.id} style={{ marginBottom: "10px" }}>
          <div
            style={{
              backgroundColor:
                selectedHabit && selectedHabit.id === habit.id
                  ? "#f0f0f0"
                  : "transparent",
              padding: "10px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => handleSelectHabit(habit)}
          >
            <h3>{habit.name}</h3>
          </div>
          {selectedHabit && selectedHabit.id === habit.id && (
            <div style={{ marginTop: "10px" }}>
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
