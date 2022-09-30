import React from "react";
import User from "./component/user";

function App() {
  return (
    <div className="App">
      <User
        name="Nguyen Huu Kien"
        age={18}
        birthday="20/04/1999"
        src="https://znews-photo.zingcdn.me/w660/Uploaded/unvjuas/2021_01_12/106228561_288966105802103_4617392174817760819_n.jpg"
      />
    </div>
  );
}

export default App;
