// import type { DefaultEventProps } from '../../../types/DefaultEventProps';
// import { leaveGame, getGameOfPlayer, sendGameUpdate } from '../gameManager';

// export default (props: DefaultEventProps): void => {
//     const { socket } = props;

//     const game = getGameOfPlayer(socket.id);
//     if (!game) return;

//     leaveGame(socket.id);
//     sendGameUpdate(props, game);
// };



import { leaveGame, getGameOfPlayer, sendGameUpdate } from "../gameManager"

export default props => {
  const { socket } = props

  const game = getGameOfPlayer(socket.id)
  if (!game) return

  leaveGame(socket.id)
  sendGameUpdate(props, game)
}
