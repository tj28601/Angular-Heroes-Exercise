// import { Hero } from './hero';
// import { InMemoryDbService } from 'angular-in-memory-web-api';
//
// export class InMemoryDataService implements InMemoryDbService {
//   createDb() {
//     const heroes = [
//       { id: 11, name: 'Lebron James' },
//       { id: 12, name: 'Kobe Bryant' },
//       { id: 13, name: 'Kareem' },
//       { id: 14, name: 'JR Smith' },
//       { id: 15, name: 'Kyrie Irving' },
//       { id: 16, name: 'Dirk Nowitzki' },
//       { id: 17, name: 'Manu Ginobili' },
//       { id: 18, name: 'Kawhi Leonard' },
//       { id: 19, name: 'DeMar DeRozan' },
//       { id: 20, name: 'Steph Curry' }
//     ];
//     return {heroes};
//     }
//     genId(heroes: Hero[]): number {
//       return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
//     }
//   }
