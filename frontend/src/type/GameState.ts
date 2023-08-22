import { Player } from './Player';

export interface GameState {
    text: string;
    players: Player[];
    gameStartTime: number;
    isFinished: boolean;
}
