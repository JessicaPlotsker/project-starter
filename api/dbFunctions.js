const { Title } = require('./models');
const { Library } = require('./models');


export function getTitle(input) {
    if (Title.findAll({where: {Name : input}})) return true;
    else return false;
}

export function getInfo(input) {
    (await Title.getLibraries()).Name;
}
// function getAssos(input) {
//     if (getTitle(input)) {
//         return (Title.findOne({ where:  {Name : input},  include: 
//             {Library.findAll(where:)}
//         }))
//     }
// }

// (await Title.getLibraries()).Name

// function getAssos(input) {
//     if (getTitle(input)) {
//         search the TitleInLibrary adn return the library its at
//     }
// }