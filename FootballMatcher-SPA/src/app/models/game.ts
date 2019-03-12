import { User } from './user';

export interface Game {
    id: number;
    hostId: number;
    Name: string;
    hostName: string;
    location: string;
    description: string;
    date: Date;
    slots: number;
    participants?: User[];
}
