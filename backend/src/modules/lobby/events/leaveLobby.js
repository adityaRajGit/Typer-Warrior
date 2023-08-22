// import type { DefaultEventProps } from '../../../types/DefaultEventProps';
// import { getLobbyIdOfPlayer, leaveLobby, sendLobbyUpdate } from '../lobbyManager';

// export default (props: DefaultEventProps): void => {
//     const { socket } = props;

//     const lobbyId = getLobbyIdOfPlayer(socket.id);
//     if (!lobbyId) return;

//     leaveLobby(socket.id);
//     sendLobbyUpdate(props, lobbyId);
// };



import {
    getLobbyIdOfPlayer,
    leaveLobby,
    sendLobbyUpdate
  } from "../lobbyManager"
  
  export default props => {
    const { socket } = props
  
    const lobbyId = getLobbyIdOfPlayer(socket.id)
    if (!lobbyId) return
  
    leaveLobby(socket.id)
    sendLobbyUpdate(props, lobbyId)
  }
  