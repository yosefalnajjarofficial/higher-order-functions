// ARRAY 1
const texasss = [
  {
    name: 'Mike',
    age: 23,
    gender: 'm',
    us: false
  },
  {
    name: 'Liz',
    age: 20,
    gender: 'f',
    us: true
  },
  {
    name: 'Chris',
    age: 102,
    gender: 'm',
    us: true
  },
  {
    name: 'Chuloo',
    age: 27,
    gender: 'm',
    us: false
  },
  {
    name: 'Annie',
    age: 30,
    gender: 'f',
    us: true
  }
];

// Part 1 - Find all users older than 24
const olderThan24 = texasss.filter(user => user.age > 24);
// Part 2 - Find the total age of all users
const totalAge = texasss.reduce((total, user) => total + user.age, 0);
// Part 3 - List all female coders
const females = texasss.filter(user => user.gender === 'f');

// ARRAY 2
const newieyork = [
  {
    name: 'Michelle',
    age: 19,
    coder: true,
    gender: 'f',
    us: true
  },
  {
    name: 'Sam',
    age: 25,
    coder: false,
    gender: 'm',
    us: false
  },
  {
    name: 'Ivy',
    age: 26,
    coder: true,
    gender: 'f',
    us: false
  },
  {
    name: 'Nick',
    age: 32,
    coder: true,
    gender: 'm',
    us: true
  },
  {
    name: 'Jim Beglin',
    age: 65,
    coder: false,
    gender: 'm',
    us: true
  }
];

// Part 1 - List all users in US in descending order
const usersInUs = newieyork.filter(user => user.us === true);
const ascending = usersInUs.sort((a, b) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
});
// Part 2 - Sort all users by age
const sortByAge = newieyork.sort((a, b) => a.age - b.age);
// Part 3 -  List all female coders
const allFemales = newieyork.filter(user => user.gender === 'f');

// ARRAY 3
const vegzas = [
  {
    name: 'Charly',
    age: 32,
    coder: true,
    gender: 'm'
  },
  {
    name: 'Law',
    age: 21,
    coder: true,
    gender: 'm'
  },
  {
    name: 'Rosey',
    age: 42,
    coder: false,
    gender: 'f'
  },
  {
    name: 'Steph',
    age: 18,
    coder: true,
    gender: 'f'
  },
  {
    name: 'Jon',
    age: 47,
    coder: false,
    gender: 'm'
  }
];

// Part 1 - Find the total age of male coders under 25
const malesUnder25 = vegzas.filter(
  user => user.age < 25 && user.gender === 'm'
);
const totalAgeOfMales = malesUnder25.reduce(
  (total, user) => total + user.age,
  0
);
// Part 2 - List all male coders over 30
const maleCodersOver25 = vegzas.filter(
  user => user.coder === true && user.age > 30
);
// Part 3 - Find the total age of everyone in texasss, newieyork and vegzas combined.
const allArrays = [...texasss, ...newieyork, ...vegzas];

const totalOfAllUsers = allArrays.reduce((total, user) => total + user.age, 0);
