import Team from './js/task1/Team.js';
import Character from './js/task1/Character.js';

const daemon = new Character('Dima', 'Daemon', 100, 1, 20, 50);
const magician = new Character('Ivan', 'magocian', 80, 2, 25, 60);
const archer = new Character('Vasia', 'archer', 50, 2, 90, 60);

const team = new Team();

team.addAll(daemon, magician, archer);

// TASK 2 RESULT

// eslint-disable-next-line no-restricted-syntax
for (const i of team) {
  console.log(i);
}
