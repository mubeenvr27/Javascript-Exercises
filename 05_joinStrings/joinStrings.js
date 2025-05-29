let firstName = "Carlos";
let lastName = "Stevenson";
let thisYear = 1965;
let birthYear = 1947;
// At first, greeting may look like this:
// const greeting = "Hello! My name is " + firstName + " " + lastName + " and I am " + (thisYear - birthYear) + " years old.";

const fullName = firstName + " " + lastName;
const age = thisYear - birthYear;
// At the end of the exercise, greeting may look like this:
const greeting = "Hello! My name is " + fullName + " and I am " + age + " years old.";





module.exports = {
  firstName: typeof firstName === 'undefined' ? undefined : firstName,
  lastName: typeof lastName === 'undefined' ? undefined : lastName,
  thisYear: typeof thisYear === 'undefined' ? undefined : thisYear,
  birthYear: typeof birthYear === 'undefined' ? undefined : birthYear,
  greeting: typeof greeting === 'undefined' ? undefined : greeting,
  fullName: typeof fullName === 'undefined' ? undefined : fullName,
  age: typeof age === 'undefined' ? undefined : age
}
