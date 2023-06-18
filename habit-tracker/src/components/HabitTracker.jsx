import React from "react";

const HabitTracker = ({ habit, onEdit, onDelete }) => {
  const handleEdit = () => {
    onEdit(habit);
  };

  const handleDelete = () => {
    onDelete(habit.id);
  };

  return (
    <div className="habit">
      <h3>{habit.name}</h3>
      <p>Goal: {habit.goal}</p>
      <p>Repeat: {habit.repeat}</p>
      <p>Time of the Day: {habit.timeOfDay}</p>
      <p>Start Date: {habit.startDate}</p>
      <div className="habit-actions">
        <button className="edit-habit-button" onClick={handleEdit}>
          Edit
        </button>
        <button className="delete-habit-button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default HabitTracker;
