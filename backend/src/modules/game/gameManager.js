// import type { DefaultEventProps } from '../../types/DefaultEventProps';
// import type { IGame } from './types/Game';
// import type { IGameState } from './types/GameState';
// import type { ILobby } from '../lobby/types/Lobby';
// import { SocketResponseType } from '../../types/SocketResponseType';
// import { chooseRandomText } from '../text/textManager';
// import { sendLobbyUpdate } from '../lobby/lobbyManager';

// const GAME_START_COUNTDOWN_SECONDS = 5.99;

// let games: IGame[] = [];

// export const startGame = (props: DefaultEventProps, lobby: ILobby): void => {
//     if (getGame(lobby.lobbyId) && !getGame(lobby.lobbyId)?.isFinished) return;

//     lobby.players.forEach(player => {
//         player.isFinished = false;
//         player.finishTime = 0;
//         player.currentTextPosition = 0;
//         player.typingSpeed = 0;
//         player.isReady = false;
//     });

//     const text = chooseRandomText(lobby);

//     const game: IGame = {
//         gameStartTime: Date.now() + GAME_START_COUNTDOWN_SECONDS * 1000,
//         started: true,
//         isFinished: false,
//         text,
//         lobby,
//     };

//     games = games.filter(game => game.lobby.lobbyId !== lobby.lobbyId);
//     games.push(game);

//     sendLobbyUpdate(props, lobby.lobbyId);
//     startGameUpdateLoop(props, game);
//     sendGameUpdate(props, game);
// };

// export const getGameOfPlayer = (socketId: string): IGame | null =>
//     games.find(game => game.lobby.players.some(player => player.socketId === socketId)) ?? null;

// export const getGame = (lobbyId: string | null): IGame | null =>
//     games.find(game => game.lobby.lobbyId === lobbyId) ?? null;

// export const sendGameUpdate = ({ io }: DefaultEventProps, game: IGame | null): void => {
//     if (!game) return;

//     const gameState: IGameState = {
//         players: game.lobby.players,
//         gameStartTime: game.gameStartTime,
//         text: game.text,
//         isFinished: game.isFinished,
//     };

//     io.to(game.lobby.lobbyId).emit(SocketResponseType.GAME_UPDATE, gameState);
// };

// export const startGameUpdateLoop = (props: DefaultEventProps, game: IGame): void => {
//     const interval = setInterval(() => {
//         const minutesPassed = (Date.now() - game.gameStartTime) / 60000;

//         game.lobby.players
//             .filter(player => !player.isFinished)
//             .forEach(player => {
//                 player.typingSpeed = Math.floor(player.currentTextPosition / minutesPassed);
//             });

//         if (!game.lobby.players.some(player => !player.isFinished)) {
//             game.isFinished = true;
//             clearInterval(interval);
//         }

//         sendGameUpdate(props, game);
//     }, 1000);
// };

// export const leaveGame = (socketId: string): void => {
//     const game = getGameOfPlayer(socketId);
//     if (!game) return;

//     game.lobby.players = game.lobby.players.filter(player => player.socketId !== socketId);

//     games = games.filter(game => game.lobby.players.length > 0);
// };




import { SocketResponseType } from "../../types/SocketResponseType"
import { chooseRandomText } from "../text/textManager"
import { sendLobbyUpdate } from "../lobby/lobbyManager"

const GAME_START_COUNTDOWN_SECONDS = 5.99

let games = []

export const startGame = (props, lobby) => {
  if (getGame(lobby.lobbyId) && !getGame(lobby.lobbyId)?.isFinished) return

  lobby.players.forEach(player => {
    player.isFinished = false
    player.finishTime = 0
    player.currentTextPosition = 0
    player.typingSpeed = 0
    player.isReady = false
  })

  const text = chooseRandomText(lobby)

  const game = {
    gameStartTime: Date.now() + GAME_START_COUNTDOWN_SECONDS * 1000,
    started: true,
    isFinished: false,
    text,
    lobby
  }

  games = games.filter(game => game.lobby.lobbyId !== lobby.lobbyId)
  games.push(game)

  sendLobbyUpdate(props, lobby.lobbyId)
  startGameUpdateLoop(props, game)
  sendGameUpdate(props, game)
}

export const getGameOfPlayer = socketId =>
  games.find(game =>
    game.lobby.players.some(player => player.socketId === socketId)
  ) ?? null

export const getGame = lobbyId =>
  games.find(game => game.lobby.lobbyId === lobbyId) ?? null

export const sendGameUpdate = ({ io }, game) => {
  if (!game) return

  const gameState = {
    players: game.lobby.players,
    gameStartTime: game.gameStartTime,
    text: game.text,
    isFinished: game.isFinished
  }

  io.to(game.lobby.lobbyId).emit(SocketResponseType.GAME_UPDATE, gameState)
}

export const startGameUpdateLoop = (props, game) => {
  const interval = setInterval(() => {
    const minutesPassed = (Date.now() - game.gameStartTime) / 60000

    game.lobby.players
      .filter(player => !player.isFinished)
      .forEach(player => {
        player.typingSpeed = Math.floor(
          player.currentTextPosition / minutesPassed
        )
      })

    if (!game.lobby.players.some(player => !player.isFinished)) {
      game.isFinished = true
      clearInterval(interval)
    }

    sendGameUpdate(props, game)
  }, 1000)
}

export const leaveGame = socketId => {
  const game = getGameOfPlayer(socketId)
  if (!game) return

  game.lobby.players = game.lobby.players.filter(
    player => player.socketId !== socketId
  )

  games = games.filter(game => game.lobby.players.length > 0)
}
