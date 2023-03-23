import { FirstItem } from "./firstitem";

export class SecondItem{
    name: string;
    firstItem: FirstItem[];

    constructor(){
        this.name = "samet";
        this.firstItem = [
            {id: 1, ders: "fent", durum: "tamam"},
            {id: 2, ders: "turk", durum: "tamam"},
            {id: 3, ders: "sos", durum: "eksik"},
            {id: 4, ders: "mat", durum: "tamam"}
        ]
    }
}