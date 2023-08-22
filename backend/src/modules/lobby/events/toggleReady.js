// import type { DefaultEventProps } from '../../../types/DefaultEventProps';
// import { getLobby, getLobbyIdOfPlayer, getPlayerOfSocket, sendLobbyUpdate } from '../lobbyManager';
// import { startGame } from '../../game/gameManager';

// export default (props: DefaultEventProps): void => {
//     const { socket } = props;

//     const player = getPlayerOfSocket(socket.id);
//     if (!player) return;

//     player.isReady = !player.isReady;

//     const lobbyId = getLobbyIdOfPlayer(socket.id);
//     const lobby = getLobby(lobbyId);
//     if (!lobby) return;

//     sendLobbyUpdate(props, lobbyId);

//     if (lobby.players.length >= 1 && !lobby.players.some(player => !player.isReady)) {
//         startGame(props, lobby);
//     }
// };



import {
    getLobby,
    getLobbyIdOfPlayer,
    getPlayerOfSocket,
    sendLobbyUpdate
  } from "../lobbyManager"
  import { startGame } from "../../game/gameManager"
  
  export default props => {
    const { socket } = props
  
    const player = getPlayerOfSocket(socket.id)
    if (!player) return
  
    player.isReady = !player.isReady
  
    const lobbyId = getLobbyIdOfPlayer(socket.id)
    const lobby = getLobby(lobbyId)
    if (!lobby) return
  
    sendLobbyUpdate(props, lobbyId)
  
    if (
      lobby.players.length >= 1 &&
      !lobby.players.some(player => !player.isReady)
    ) {
      startGame(props, lobby)
    }
  }
  