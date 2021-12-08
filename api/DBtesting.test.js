//tests for functions 
const { Title, Library, sequelize } = require('./models');
const seed = require('./seed');

const {
//   getTitleId2,
  getAllTitle,
//   getInfo
} = require('./Dbtesting');



describe('Sequelize Model Usage', () => {
  beforeAll(() => {
    return seed();
  })

  afterAll(() => {
    return sequelize.close();
  })


  test('get all titles', async () => {
    expect((await getAllTitle()).sort()).toEqual([
        "vinland saga", "berserk", "jojo bizarre adventure", 
        "one piece", 'naruto', 'monster', 'fullmetal alchemist', 
        'gintama', 'attack on titan','fruits basket', 'tokyo ghoul', 
        'hunter x hunter', 'haikyuu','solo leveling','one punch man'
    ].sort());
  })


})
