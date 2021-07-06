module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert(
      'special_badges',
      [
        {
          id: 1,
          name: 'Apprentice',
          badgeImg: 'https://us-central1-grommet-designer.cloudfunctions.net/images/jay-giang-hpe-com/3_workshops_apprentice.jpg',
          title: 'Congratulations on earning your Apprentice badge!',
          description: 'You have been awarded the Apprentice badge for completing 3 HPE DEV Workshops-on-Demand',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: 'Expert',
          badgeImg: 'https://us-central1-grommet-designer.cloudfunctions.net/images/jay-giang-hpe-com/5_workshops_expert.jpg',
          title: 'Congratulations on earning your Expert badge!',
          description: 'You have been awarded the Expert badge for completing 5 HPE DEV Workshops-on-Demand.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: 'Hero',
          badgeImg: 'https://us-central1-grommet-designer.cloudfunctions.net/images/jay-giang-hpe-com/7_workshops_hero.jpg',
          title: 'Congratulations on earning your Hero badge!',
          description: 'You have been awarded the Hero badge for completing 7 HPE DEV Workshops-on-Demand.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: 'Super Hero',
          badgeImg: 'https://us-central1-grommet-designer.cloudfunctions.net/images/jay-giang-hpe-com/10_workshops_superhero.jpg',
          title: 'Congratulations on earning your Super Hero badge!',
          description: 'You have been awarded the Super Hero badge for completing 10 HPE DEV Workshops-on-Demand.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          name: 'Legend',
          badgeImg: 'https://us-central1-grommet-designer.cloudfunctions.net/images/jay-giang-hpe-com/15_workshops_legend.jpg',
          title: 'Congratulations on earning your Legend badge!',
          description: 'You have been awarded the Legend badge for completing 15 HPE DEV Workshops-on-Demand.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {
        returning: true,
      }
    ),

  down: (queryInterface) => queryInterface.bulkDelete('special_badges', null, {}),
};