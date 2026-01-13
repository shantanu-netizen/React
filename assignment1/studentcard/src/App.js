import React from "react";
import Header from "./components/Header";
import StudentCard from "./components/StudentCard";

function App() {
  return (
    <div>
      <Header />

      <StudentCard
        name="Abhijeet"
        branch="CSE"
        year="3rd"
        isPlaced={true}
      />

      <StudentCard
        name="Deewas"
        branch="CSE"
        year="4th"
        isPlaced={true}
      />

      <StudentCard
        name="Shashi"
        branch="CSE"
        year="2nd"
        isPlaced={false}
      />
    </div>
  );
}

export default App;
