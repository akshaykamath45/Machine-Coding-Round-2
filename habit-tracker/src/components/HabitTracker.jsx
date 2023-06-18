import React from 'react';

const HabitTracker = ({ habit, onEdit, onDelete }) => {
  const handleEdit = () => {
    onEdit(habit);
  };

  const handleDelete = () => {
    onDelete(habit.id);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <h3>{habit.name}</h3>
      <p><strong>Goal:</strong> {habit.goal}</p>
      <p><strong>Repeat:</strong> {habit.repeat}</p>
      <p><strong>Time of the Day:</strong> {habit.timeOfDay}</p>
      <p><strong>Start Date:</strong> {habit.startDate}</p>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
        <button style={{ padding: '5px 10px', background: 'transparent', border: '1px solid #ccc', marginRight: '5px' }} onClick={handleEdit}>
          Edit
        </button>
        <button style={{ padding: '5px 10px', background: 'transparent', border: '1px solid #ccc' }} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default HabitTracker;
