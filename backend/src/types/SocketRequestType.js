// export enum SocketRequestType {
//     DISCONNECT = 'disconnect',
//     LOBBY_JOIN = 'joinLobby',
//     LOBBY_TOGGLE_READY = 'toggleReady',
//     LOBBY_SWITCH_CAR = 'switchCar',
//     GAME_UPDATE = 'gameUpdate',
// }



export let SocketRequestType

;(function(SocketRequestType) {
  SocketRequestType["DISCONNECT"] = "disconnect"
  SocketRequestType["LOBBY_JOIN"] = "joinLobby"
  SocketRequestType["LOBBY_TOGGLE_READY"] = "toggleReady"
  SocketRequestType["LOBBY_SWITCH_CAR"] = "switchCar"
  SocketRequestType["GAME_UPDATE"] = "gameUpdate"
})(SocketRequestType || (SocketRequestType = {}))
