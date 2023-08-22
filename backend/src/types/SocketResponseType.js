// export enum SocketResponseType {
//     LOBBY_UPDATE = 'lobbyState',
//     LOBBY_ERROR_INCORRECT_USERNAME = 'errorIncorrectUsername',
//     LOBBY_ERROR_NOT_FOUND = 'errorLobbyNotFound',
//     LOBBY_ERROR_GAME_ONGOING = 'errorLobbyGameOngoing',

//     GAME_UPDATE = 'gameState',
// }



export let SocketResponseType

;(function(SocketResponseType) {
  SocketResponseType["LOBBY_UPDATE"] = "lobbyState"
  SocketResponseType["LOBBY_ERROR_INCORRECT_USERNAME"] =
    "errorIncorrectUsername"
  SocketResponseType["LOBBY_ERROR_NOT_FOUND"] = "errorLobbyNotFound"
  SocketResponseType["LOBBY_ERROR_GAME_ONGOING"] = "errorLobbyGameOngoing"
  SocketResponseType["GAME_UPDATE"] = "gameState"
})(SocketResponseType || (SocketResponseType = {}))
