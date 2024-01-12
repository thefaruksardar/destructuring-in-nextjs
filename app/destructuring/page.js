import React from "react";

export default function Page() {
  // Object
  //   const days = {
  //     monday: "faruk",
  //     tueday: "yasmin",
  //     wenesday: "john",
  //     thursday: "crystal",
  //     friday: "tenn",
  //   };
  //   const { friday, thursday, tueday } = days;

  // Array

  const names = ["faruk", "yasmin", "john", "crystal", "tenn"];
  const [user, cat, dog, pig] = names;
  console.log(dog);

  return <div>About Destructuring</div>;
}
