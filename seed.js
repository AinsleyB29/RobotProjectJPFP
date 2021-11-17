const { green, red } = require('chalk');
const { db, Project, Robot } = require('./server/db');

const robots = [
  {
    name: 'Mia',
    fuelType: 'electric',
    fuelLevel: 92,
    imageUrl:
      'https://images6.fanpop.com/image/photos/39900000/Mia-in-S1E1-humans-39967119-1200-707.jpg',
  },
  {
    name: 'Sonny',
    fuelType: 'diesel',
    fuelLevel: 100,
    imageUrl:
      'https://i.pinimg.com/474x/9b/28/70/9b28700f1b73e41f6a4c661c80cdb857.jpg',
  },
  {
    name: 'Terminator',
    fuelType: 'gas',
    fuelLevel: 85,
    imageUrl: 'https://miro.medium.com/max/3840/1*SSABfkBUeXyoqAArPfuHNg.jpeg',
  },
];

const projects = [
  {
    title: 'JPFP',
    deadline: 'November 21, 2020',
    priority: 10,
    completed: false,
    description:
      'Junior Phase final project that will determine whether I get into Senior Phase',
  },
  {
    title: 'Boxing',
    deadline: 'April 9, 2065',
    priority: 7,
    completed: false,
    description:
      'Become a better boxer and master both the southpaw and orthodox stance',
  },
  {
    title: 'Comedy Cellar',
    deadline: 'November 15, 2021',
    priority: 3,
    completed: true,
    description: 'Comedy show with Godfrey & Aziz Ansari',
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all(
      robots.map((robot) => {
        return Robot.create(robot);
      })
    );
    await Promise.all(
      projects.map((project) => {
        return Project.create(project);
      })
    );
  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'));
      db.close();
    })
    .catch((err) => {
      console.error(red('Oh noes! Something went wrong!'));
      console.error(err);
      db.close();
    });
}
