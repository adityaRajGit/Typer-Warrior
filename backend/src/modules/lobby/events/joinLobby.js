// import type { DefaultEventProps } from '../../../types/DefaultEventProps';
// import { SocketResponseType } from '../../../types/SocketResponseType';
// import { createLobby, getLobby, joinLobby, sendLobbyUpdate } from '../lobbyManager';
// import { getGame } from '../../game/gameManager';

// export default (props: DefaultEventProps, username: string, lobbyId: string | null): void => {
//     const { socket } = props;

//     if (!username.match(/^.{1,30}$/)) {
//         socket.emit(SocketResponseType.LOBBY_ERROR_INCORRECT_USERNAME);
//         return;
//     }

//     if (lobbyId && lobbyId.length > 0 && !getLobby(lobbyId)) {
//         socket.emit(SocketResponseType.LOBBY_ERROR_NOT_FOUND);
//         return;
//     }

//     if (getGame(lobbyId) && !getGame(lobbyId)?.isFinished) {
//         socket.emit(SocketResponseType.LOBBY_ERROR_GAME_ONGOING);
//         return;
//     }

//     const lobby = getLobby(lobbyId) ?? createLobby();
//     joinLobby(lobby.lobbyId, socket.id, username);

//     socket.join(lobby.lobbyId);

//     sendLobbyUpdate(props, lobby.lobbyId);
// };



import { SocketResponseType } from "../../../types/SocketResponseType"
import {
  createLobby,
  getLobby,
  joinLobby,
  sendLobbyUpdate
} from "../lobbyManager"
import { getGame } from "../../game/gameManager"

export default (props, username, lobbyId) => {
  const { socket } = props

  if (!username.match(/^.{1,30}$/)) {
    socket.emit(SocketResponseType.LOBBY_ERROR_INCORRECT_USERNAME)
    return
  }

  if (lobbyId && lobbyId.length > 0 && !getLobby(lobbyId)) {
    socket.emit(SocketResponseType.LOBBY_ERROR_NOT_FOUND)
    return
  }

  if (getGame(lobbyId) && !getGame(lobbyId)?.isFinished) {
    socket.emit(SocketResponseType.LOBBY_ERROR_GAME_ONGOING)
    return
  }

  const lobby = getLobby(lobbyId) ?? createLobby()
  joinLobby(lobby.lobbyId, socket.id, username)

  socket.join(lobby.lobbyId)

  sendLobbyUpdate(props, lobby.lobbyId)
}
