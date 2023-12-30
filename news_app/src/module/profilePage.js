import React from "react";

function ProfilePage() {
  function handleSubmit(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    const formData = new FormData(event.target);
    const fname = formData.get("fname");
    const lname = formData.get("lname");
    const email = formData.get("email");
    alert(`Searching ${fname} ${lname} ${email}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fname">First name:</label><br />
      <input type="text" name="fname" /><br />
      <label htmlFor="lname">Last name:</label><br />
      <input type="text" name="lname" /><br />
      <label htmlFor="email">Email:</label><br />
      <input type="text" name="email" /><br />
      <label htmlFor="password">Password:</label><br />
      <input type="password" name="password" /><br />
      <label htmlFor="age">Age:</label><br />
      <input type="number" name="age" /><br />
      <input type="submit" value="Submit" />

      <p>Already created a profile? Login In!</p>
      <a href="/login" >
        <button type="button">Login</button></a>
    </form>
  );
}

export default ProfilePage;
