const db = require('./models');
const { Title, Library} = db;

const TITLES = [
    {id: 1, Name: 'vinland saga', Author: 'yukimura makoto' , Volume: 12}, 
    {id: 2, Name:'berserk', Author: 'miura kentarou', Volume: 5},
    {id: 3, Name:'jojo bizarre adventure', Author: 'araki hirohiko', Volume: 4},
    {id: 4, Name:'one piece', Author: 'oda eiichiro', Volume: 85},
    {id: 5, Name:'naruto', Author: 'masashi kishimoto', Volume: 1},
    {id: 6, Name:'monster', Author: 'urasawa, naoki', Volume: 6},
    {id: 7, Name:'fullmetal alchemist', Author: 'hiromu arakawa', Volume: 4},
    {id: 8, Name:'gintama', Author: 'hideaki sorachi', Volume: 30},
    {id: 9, Name:'attack on titan', Author: 'hajime isayama', Volume: 19},
    {id: 10, Name:'fruits basket', Author: 'natsuki takaya', Volume: 23},
    {id: 11, Name:'tokyo ghoul', Author: 'sui ishida', Volume: 3},
    {id: 12, Name: 'hunter x hunter', Author: 'togashi, yoshihiro', Volume: 95},
    {id: 13, Name: 'haikyuu', Author: 'furudate, haruichi', Volume: 45},
    {id: 14, Name: 'solo leveling', Author: 'chugong', Volume: 37},
    {id: 14, Name: 'one punch man', Author: 'murata, yusuke', Volume: 77},
];

const LIBRARIES = [
    {id: 1, Name: 'queens college library', Address: '65-30 kissena blvd, flushing, ny 11367'},
    {id: 2, Name: 'west hempstead public library', Address: '500 hempstead ave, west hempstead, ny 11552'},
    {id: 3, Name: 'new york city public library', Address: '476 5th ave, new york, ny 10018'},
    {id: 4, Name: 'queens public library', Address: '41-17 main st, flushing, ny 11355'},
    {id: 5, Name: 'brooklyn public library', Address: '203 arlington ave. at, warwick St, brooklyn, ny 11207'}
];

const TITLE_IN_LIBRARY = [
    {titleId: 1, libraryId: 1},
    {titleId: 2, libraryId: 1},
    {titleId: 3, libraryId: 1},
    {titleId: 4, libraryId: 2},
    {titleId: 5, libraryId: 2},
    {titleId: 6, libraryId: 2},
    {titleId: 7, libraryId: 3},
    {titleId: 8, libraryId: 3},
    {titleId: 9, libraryId: 3},
    {titleId: 10, libraryId: 4},
    {titleId: 11, libraryId: 4},
    {titleId: 12, libraryId: 4},
    {titleId: 13, libraryId: 5},
    {titleId: 14, libraryId: 5},
    {titleId: 15, libraryId: 5},
    {titleId: 1, libraryId: 2},
    {titleId: 2, libraryId: 3},
    {titleId: 3, libraryId: 4},
    {titleId: 4, libraryId: 5},
    {titleId: 5, libraryId: 1},
    {titleId: 6, libraryId: 5},
    {titleId: 7, libraryId: 4},
    {titleId: 8, libraryId: 2},
    {titleId: 9, libraryId: 1},
    {titleId: 10, libraryId: 1},
    {titleId: 11, libraryId: 3},
    {titleId: 12, libraryId: 5},
    {titleId: 13, libraryId: 3},
    {titleId: 14, libraryId: 1},
    {titleId: 15, libraryId: 2},
    {titleId: 1, libraryId: 3},
    {titleId: 2, libraryId: 4},
    {titleId: 3, libraryId: 5},
    {titleId: 4, libraryId: 4},
    {titleId: 5, libraryId: 4},
    {titleId: 6, libraryId: 5},
    {titleId: 7, libraryId: 1},
    {titleId: 8, libraryId: 1},
    {titleId: 9, libraryId: 2},
    {titleId: 10, libraryId: 2},
    {titleId: 11, libraryId: 4},
    {titleId: 12, libraryId: 5},
    {titleId: 13, libraryId: 2},
    {titleId: 14, libraryId: 3},
    {titleId: 15, libraryId: 3},
];

const seed = () => {
    return db.sequelize.sync({force: true})
      .then(() => {
        // Create all the entries
        let titlePromises = TITLES.map(g => Title.create(t));
        let libraryPromises = LIBRARIES.map(m => Library.create(l));
        return Promise.all([...titlePromises, ...libraryPromises]);
      })
      .then(() => {
        // Create the associations
        let associationPromises = TITLE_IN_LIBRARY.map(til => {
          let titlePromise = Title.findByPk(til.titleId);
          let libraryPromise = Library.findByPk(til.libraryId);
          return Promise.all([titlePromise, libraryPromise])
            .then(([title, library]) => {
              return title.addLibrary(library);
            })
        });
        return Promise.all(associationPromises);
      }).then(() => {
        /*
          Postgres only fix:
            Since we provided fixed id's for our seed data,
            we have to reset our id sequences in postgres.
            (ONLY do this for Models with autoincrementing id's)
        */
        let titleReset = db.sequelize.query(`select setval('titles_id_seq', (select max(id) from titles), true);`)
        let libraryReset = db.sequelize.query(`select setval('libraries_id_seq', (select max(id) from libraries), true);`)
  
        return Promise.all([titleReset, libraryReset])
      });
  }
  
  module.exports = seed;