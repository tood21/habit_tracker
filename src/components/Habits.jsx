import React, { Component } from "react";
import Habit from "./Habit";
import HabitAddForm from "./HabitAddForm";

class Habits extends Component {
  handleAdd = (name) => {
    this.props.onAdd(name);
  };

  render() {
    console.log("habits");

    return (
      <div>
        <HabitAddForm onAdd={this.handleAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncreament={this.props.onIncreament}
              onDecreament={this.props.onDecreament}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>
          Reset All
        </button>
      </div>
    );
  }
}

export default Habits;
