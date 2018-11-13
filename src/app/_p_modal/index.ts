export interface Players {
    id: any;
    name: any;
}

export class PlayersObj implements Players {
  id: any;
  name: any;

    constructor(item?: Players) {
        if (item != undefined) {
            for (let key in item) {
                try { this[key] = item[key]; }
                catch (e) { }
            }
        }
    }
}
