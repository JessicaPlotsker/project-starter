const db = require('./models');
const { Title, Library} = db;

const TITLES = [
    {id: 1, Name: 'Vinland Saga', Author: 'Yukimura Makoto' , Volume: 12}, 
    {id: 2, Name:'Berserk', Author: 'Miura Kentarou', Volume: 5},
    {id: 3, Name:'Jojo Bizarre Adventure Part 7: Steel Ball Run', Author: 'Araki Hirohiko', Volume: 4},
    {id: 4, Name:'One Piece', Author: 'Oda Eiichiro', Volume: 85},
    {id: 5, Name:'Vagabond', Author: 'Inoue Takehiko ', Volume: 1},
    {id: 6, Name:'Monster', Author: 'Urasawa, Naoki', Volume: 6},
    {id: 7, Name:'Fullmetal Alchemist', Author: 'Hiromu Arakawa', Volume: 4},
    {id: 8, Name:'Gintama', Author: 'Hideaki Sorachi', Volume: 30},
    {id: 9, Name:'Shingeki no Kyojin', Author: 'Hajime Isayama', Volume: 19},
    {id: 10, Name:'Fruits Basket', Author: 'Natsuki Takaya', Volume: 23},
    {id: 11, Name:'Tokyo Ghoul', Author: 'Sui Ishida', Volume: 3},
    {id: 12, Name: 'Hunter X Hunter', Author: 'Togashi, Yoshihiro', Volume: 95},
    {id: 13, Name: 'Haikyuu', Author: 'Furudate, Haruichi', Volume: 45},
    {id: 14, Name: 'Solo Leveling', Author: 'Chugong', Volume: 37},
    {id: 14, Name: 'One Punch Man', Author: 'Murata, Yusuke', Volume: 77},
];

const LIBRARIES = [
    {id: 1, Name: 'Queens College Library', Address: '65-30 Kissena Blvd, Flushing, NY 11367'},
    {id: 2, Name: 'West Hempstead Public Library', Address: '500 Hempstead Ave, West Hempstead, NY 11552'},
    {id: 3, Name: 'New York City Public Library', Address: '476 5th Ave, New York, NY 10018'},
    {id: 4, Name: 'Queens Public Linbrary', Address: '41-17 Main St, Flushing, NY 11355'},
    {id: 5, Name: 'Brooklyn Public Library', Address: '203 Arlington Ave. at, Warwick St, Brooklyn, NY 11207'}
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