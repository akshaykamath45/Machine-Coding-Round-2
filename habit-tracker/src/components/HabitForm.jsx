import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";

const HabitForm = ({ open, onClose, onSave, habitToEdit }) => {
  const [habit, setHabit] = useState({
    name: "",
    goal: "",
    repeat: "",
    timeOfDay: "",
    startDate: "",
  });

  useEffect(() => {
    if (habitToEdit) {
      setHabit(habitToEdit);
    }
  }, [habitToEdit]);

  const handleChange = (e) => {
    setHabit({ ...habit, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onSave(habit);
    setHabit({
      name: "",
      goal: "",
      repeat: "",
      timeOfDay: "",
      startDate: "",
    });
    onClose();
  };

  const handleStartDateChange = (e) => {
    const selectedDate = e.target.value;
    setHabit({ ...habit, startDate: selectedDate });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        {habitToEdit ? "Edit Habit" : "Add a new habit"}
      </DialogTitle>
      <DialogContent>
        <form
          style={{
            backgroundColor: "#262626",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <TextField
            label="Name"
            name="name"
            value={habit.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputLabelProps={{
              style: { color: "white" },
            }}
            InputProps={{
              style: { color: "white" },
            }}
          />
          <TextField
            label="Goal"
            name="goal"
            value={habit.goal}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputLabelProps={{
              style: { color: "white" },
            }}
            InputProps={{
              style: { color: "white" },
            }}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel style={{ color: "white" }}>Repeat</InputLabel>
            <Select
              name="repeat"
              value={habit.repeat}
              onChange={handleChange}
              style={{ color: "white" }}
            >
              <MenuItem value="Once a day">Once a day</MenuItem>
              <MenuItem value="Twice a day">Twice a day</MenuItem>
              <MenuItem value="Once a month">Once a month</MenuItem>
              <MenuItem value="Daily">Daily</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel style={{ color: "white" }}>Time of the Day</InputLabel>
            <Select
              name="timeOfDay"
              value={habit.timeOfDay}
              onChange={handleChange}
              style={{ color: "white" }}
            >
              <MenuItem value="Anytime">Anytime</MenuItem>
              <MenuItem value="Morning">Morning</MenuItem>
              <MenuItem value="Afternoon">Afternoon</MenuItem>
              <MenuItem value="Evening">Evening</MenuItem>
              <MenuItem value="Night">Night</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel style={{ color: "white" }}>Start Date</InputLabel>
            <Select
              name="startDate"
              value={habit.startDate}
              onChange={handleStartDateChange}
              style={{ color: "white" }}
            >
              <MenuItem value="">Select a date</MenuItem>
              <MenuItem value={new Date().toLocaleDateString()}>Today</MenuItem>
              <MenuItem
                value={new Date(
                  new Date().getTime() + 24 * 60 * 60 * 1000
                ).toLocaleDateString()}
              >
                Tomorrow
              </MenuItem>
            </Select>
          </FormControl>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Button onClick={handleSave} color="primary" variant="contained">
              {habitToEdit ? "Save Changes" : "Save"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default HabitForm;
