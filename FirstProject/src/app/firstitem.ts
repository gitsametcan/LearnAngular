// export class FirstItem{
    
//     //property zorunlu değil, constructor içinde halledilebilir
//     id: number;
//     ders: string;
//     durum: string;

//     // constructor istemiyorsak tsconfigde strictnullcheck icin false vermemiz gerekiyor
//     constructor(id: number, ders: string, durum :string){
//         this.id = id;
//         this.ders = ders;
//         this.durum = durum;
//     }
// }

export interface FirstItem{
    id: number,
    ders: string,
    durum: boolean
}


