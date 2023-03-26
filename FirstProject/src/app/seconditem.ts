import { FirstItem } from "./firstitem";

export class SecondItem{
    name: string;
    firstItem: FirstItem[];

    constructor(){
        this.name = "samet";
        this.firstItem = [
            {id: 1, ders: "fent", durum: true},
            {id: 2, ders: "turk", durum: true},
            {id: 3, ders: "sos", durum: false},
            {id: 4, ders: "mat", durum: true}
        ]
    }
}