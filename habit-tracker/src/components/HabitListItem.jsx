import React from 'react';

const HabitListItem = ({ habit, onEdit, onDelete }) => {
  const handleEdit = (e) => {
    e.stopPropagation();
    onEdit(habit);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete(habit.id);
  };

  return (
    <div className="habit-list-item" onClick={(e) => { e.stopPropagation(); }}>
      <h3>{habit.name}</h3>
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

export default HabitListItem;
