import {IEvent} from "./Event";

export interface ICampus {
    _id: string;
    title: string;
    location: string;
    phone: string;
    fax: string;
    email: string;
    image: string;
    events: IEvent[];
}

