// import { DefaultEventProps } from '../../../types/DefaultEventProps';
// import { getGameOfPlayer, sendGameUpdate } from '../gameManager';
// import { getPlayerOfSocket } from '../../lobby/lobbyManager';

// export default (props: DefaultEventProps, currentTextPos: number): void => {
//     const { socket } = props;

//     const game = getGameOfPlayer(socket.id);
//     if (!game || !game.started || game.isFinished || Date.now() < game.gameStartTime) return;

//     const player = getPlayerOfSocket(socket.id);
//     if (!player || player.isFinished) return;

//     if (currentTextPos === game.text.length) {
//         player.isFinished = true;
//         player.finishTime = Date.now();
//     }

//     player.currentTextPosition = currentTextPos;

//     sendGameUpdate(props, game);
// };




import { getGameOfPlayer, sendGameUpdate } from "../gameManager"
import { getPlayerOfSocket } from "../../lobby/lobbyManager"

export default (props, currentTextPos) => {
  const { socket } = props

  const game = getGameOfPlayer(socket.id)
  if (
    !game ||
    !game.started ||
    game.isFinished ||
    Date.now() < game.gameStartTime
  )
    return

  const player = getPlayerOfSocket(socket.id)
  if (!player || player.isFinished) return

  if (currentTextPos === game.text.length) {
    player.isFinished = true
    player.finishTime = Date.now()
  }

  player.currentTextPosition = currentTextPos

  sendGameUpdate(props, game)
}
