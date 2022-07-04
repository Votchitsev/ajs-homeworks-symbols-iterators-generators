/* eslint-disable no-restricted-syntax */
/* eslint-disable import/extensions */
import Team from './js/task1/Team(with iterator).js';
import TeamWithGenerator from './js/task1/Team(with generator).js';
import Character from './js/task1/Character.js';

const daemon = new Character('Dima', 'Daemon', 100, 1, 20, 50);
const magician = new Character('Ivan', 'magocian', 80, 2, 25, 60);
const archer = new Character('Vasia', 'archer', 50, 2, 90, 60);

const team = new Team();
team.addAll(daemon, magician, archer);

const teamTwo = new TeamWithGenerator();
teamTwo.addAll(daemon, magician, archer);

// TASK 1 RESULT
console.log('TASK ONE');

for (const i of team) {
  console.log(i);
}

// TASK 2 RESULT
console.log('TASK TWO');

for (const i of teamTwo) {
  console.log(i);
}
