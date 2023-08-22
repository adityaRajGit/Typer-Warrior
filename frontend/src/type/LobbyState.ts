import { Player } from './Player';

export interface LobbyState {
    lobbyId: string;
    players: Player[];
}
