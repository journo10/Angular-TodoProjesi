//1.YOL
export class TodoItem {
  id: number;
  description: string;
  action: boolean;

  constructor(id: number, description: string, action: boolean) {
    this.id = id;
    this.description = description;
    this.action = action;
  }
}

//2.YOL
// export class TodoItem {
//  constructor(public description:string,public action:string){
//      this.description=description;
//      this.action=action;
//  }
// }

//3.YOL
// export interface TodoItem{
//     id:number;
//     description:string;
//     action:string;
// }
