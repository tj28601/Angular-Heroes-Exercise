export interface Articles {
    id: any;
    title: any;
    published: any;
}

export class ArticlesObj implements Articles {
  id: any;
  title: any;
  published: any;

    constructor(item?: Articles) {
        if (item != undefined) {
            for (let key in item) {
                try { this[key] = item[key]; }
                catch (e) { }
            }
        }
    }
}
