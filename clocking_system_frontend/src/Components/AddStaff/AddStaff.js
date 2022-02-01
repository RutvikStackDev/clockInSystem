import React, { useState } from "react";

export const AddStaff = () => {
  var [name, setName] = useState();

  const nameUpdate = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = () => {
    const postURL = "http://localhost:4000/newData";
    fetch(postURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
      }),
    }).then((res) => {
      console.log(res);
      alert("You have been added to the system!");
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Full Name:</label>
        <input required onChange={nameUpdate}></input>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddStaff;
