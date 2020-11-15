import { Time } from '@angular/common';

export class Doctors {
    id: number;
    first_name: string;
    last_name: string;
    takhasos: string;
    day: string;
    shif: string;
    time: Time;
    changetime: Time;
    price: string;
    number: number
    constructor(id: number,
        first_name: string,
        last_name: string,
        takhasos: string,
        day: string,
        shif: string,
        time: Time,
        changetime: Time,
        price: string,
        number: number) { }
}