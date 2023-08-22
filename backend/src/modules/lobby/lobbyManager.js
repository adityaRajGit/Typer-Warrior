// import type { ILobby } from './types/Lobby';
// import type { IPlayer } from './types/Player';
// import type { DefaultEventProps } from '../../types/DefaultEventProps';
// import { SocketResponseType } from '../../types/SocketResponseType';

// const LOBBY_ID_LENGTH = 5;
// const LOBBY_ID_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// const CAR_AMOUNT = 9;

// let lobbies: ILobby[] = [];

// const generateLobbyId = (): string => {
//     let id = '';

//     for (let i = 0; i < LOBBY_ID_LENGTH; i++)
//         id += LOBBY_ID_ALPHABET[Math.floor(Math.random() * LOBBY_ID_ALPHABET.length)];

//     return id;
// };

// export const getLobby = (lobbyId: string | null): ILobby | null =>
//     lobbies.find(lobby => lobby.lobbyId === lobbyId) ?? null;

// export const getLobbyIdOfPlayer = (socketId: string): string | null =>
//     lobbies.find(lobby => lobby.players.some(player => player.socketId === socketId))?.lobbyId ?? null;

// export const createLobby = (): ILobby => {
//     const lobby: ILobby = {
//         lobbyId: generateLobbyId(),
//         players: [],
//         typedTexts: [],
//     };

//     lobbies.push(lobby);

//     return lobby;
// };

// export const joinLobby = (lobbyId: string, socketId: string, username: string): void => {
//     const player: IPlayer = {
//         socketId,
//         username,
//         isReady: false,
//         isFinished: false,
//         finishTime: 0,
//         carIndex: Math.floor(Math.random() * CAR_AMOUNT),
//         currentTextPosition: 0,
//         typingSpeed: 0,
//     };

//     getLobby(lobbyId)?.players.push(player);
// };

// export const leaveLobby = (socketId: string): void => {
//     const lobby = getLobby(getLobbyIdOfPlayer(socketId));
//     if (!lobby) return;

//     lobby.players = lobby.players.filter(player => player.socketId !== socketId);
//     lobby.players.forEach(player => (player.isReady = false));

//     lobbies = lobbies.filter(lobby => lobby.players.length > 0);
// };

// export const sendLobbyUpdate = ({ io }: DefaultEventProps, lobbyId: string | null): void => {
//     if (!lobbyId) return;
//     io.to(lobbyId).emit(SocketResponseType.LOBBY_UPDATE, getLobby(lobbyId));
// };

// export const getPlayerOfSocket = (socketId: string): IPlayer | null =>
//     getLobby(getLobbyIdOfPlayer(socketId))?.players.find(player => player.socketId === socketId) ?? null;




import { SocketResponseType } from "../../types/SocketResponseType"

const LOBBY_ID_LENGTH = 5
const LOBBY_ID_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

const CAR_AMOUNT = 9

let lobbies = []

const generateLobbyId = () => {
  let id = ""

  for (let i = 0; i < LOBBY_ID_LENGTH; i++)
    id +=
      LOBBY_ID_ALPHABET[Math.floor(Math.random() * LOBBY_ID_ALPHABET.length)]

  return id
}

export const getLobby = lobbyId =>
  lobbies.find(lobby => lobby.lobbyId === lobbyId) ?? null

export const getLobbyIdOfPlayer = socketId =>
  lobbies.find(lobby =>
    lobby.players.some(player => player.socketId === socketId)
  )?.lobbyId ?? null

export const createLobby = () => {
  const lobby = {
    lobbyId: generateLobbyId(),
    players: [],
    typedTexts: []
  }

  lobbies.push(lobby)

  return lobby
}

export const joinLobby = (lobbyId, socketId, username) => {
  const player = {
    socketId,
    username,
    isReady: false,
    isFinished: false,
    finishTime: 0,
    carIndex: Math.floor(Math.random() * CAR_AMOUNT),
    currentTextPosition: 0,
    typingSpeed: 0
  }

  getLobby(lobbyId)?.players.push(player)
}

export const leaveLobby = socketId => {
  const lobby = getLobby(getLobbyIdOfPlayer(socketId))
  if (!lobby) return

  lobby.players = lobby.players.filter(player => player.socketId !== socketId)
  lobby.players.forEach(player => (player.isReady = false))

  lobbies = lobbies.filter(lobby => lobby.players.length > 0)
}

export const sendLobbyUpdate = ({ io }, lobbyId) => {
  if (!lobbyId) return
  io.to(lobbyId).emit(SocketResponseType.LOBBY_UPDATE, getLobby(lobbyId))
}

export const getPlayerOfSocket = socketId =>
  getLobby(getLobbyIdOfPlayer(socketId))?.players.find(
    player => player.socketId === socketId
  ) ?? null
