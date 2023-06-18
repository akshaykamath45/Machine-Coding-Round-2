import React, { useState } from 'react';
import HabitList from '../components/HabitList';
import HabitForm from '../components/HabitForm';
import habitData from '../data/habitData';


export const LandingPage = () => {
  const [habits, setHabits] = useState(habitData);
  const [isHabitFormOpen, setIsHabitFormOpen] = useState(false);
  const [habitToEdit, setHabitToEdit] = useState(null);

  const handleOpenHabitForm = () => {
    setIsHabitFormOpen(true);
  };

  const handleCloseHabitForm = () => {
    setIsHabitFormOpen(false);
    setHabitToEdit(null);
  };

  const handleSaveHabit = (habit) => {
    if (habitToEdit) {
      const updatedHabits = habits.map((h) => (h.id === habitToEdit.id ? habit : h));
      setHabits(updatedHabits);
    } else {
      const newHabit = { ...habit, id: Date.now().toString() };
      setHabits([...habits, newHabit]);
    }
  };

  const handleEditHabit = (habit) => {
    setHabitToEdit(habit);
    setIsHabitFormOpen(true);
  };

  const handleDeleteHabit = (habitId) => {
    const updatedHabits = habits.filter((h) => h.id !== habitId);
    setHabits(updatedHabits);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Habit Tracker</h1>
        <button className="add-habit-button" onClick={handleOpenHabitForm}>
          Add Habit
        </button>
      </header>
      <HabitList habits={habits} onEditHabit={handleEditHabit} onDeleteHabit={handleDeleteHabit} />
      <HabitForm
        open={isHabitFormOpen}
        onClose={handleCloseHabitForm}
        onSave={handleSaveHabit}
        habitToEdit={habitToEdit}
      />
     
    </div>
  );
};

export default LandingPage;