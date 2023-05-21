import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");

  const onChangeEventHandler = (event) => {
    const value = event.target.value;
    setValue(value);
  };

  console.log(value);
  return (
    <div>
      {value}
      <input
        type="text"
        onChange={onChangeEventHandler}
        placeholder="이름을 입력해주세요"
      />
    </div>
  );
};

export default App;
