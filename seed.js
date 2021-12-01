const db = require('/api/models');
const { Title, Library} = db;

const TITLES = [
    {id: 1, Name: 'Vinland Saga', Author: 'Yukimura Makoto' , Volume: 10}, 
    {id: 2, Name:'Berserk', Author: 'Miura Kentarou', Volume: 5},
    {id: 3, Name:'Jojo Bizarre Adventure Part 7: Steel Ball Run', Author: 'Araki Hirohiko', Volume: 4},
    {id: 4, Name:'One Piece', Author: 'Oda Eiichiro', Volume: 85},
    {id: 5, Name:'Vagabond', Author: 'Inoue Takehiko ', Volume: 1},
    {id: 6, Name:'Monster', Author: 'Urasawa, Naoki', Volume: 6},
    {id: 7, Name:'Fullmetal Alchemist', Author: 'Hiromu Arakawa', Volume: 4},
    {id: 8, Name:'Gintama', Author: 'Hideaki Sorachi', Volume: 30},
    {id: 9, Name:'Shingeki no Kyojin', Author: 'Hajime Isayama', Volume: 19},
    {id: 10, Name:'Fruits Basket', Author: 'Natsuki Takaya', Volume: 23},
    {id: 11, Name:'Tokyo Ghoul', Author: 'Sui Ishida', Volume: 3}
]