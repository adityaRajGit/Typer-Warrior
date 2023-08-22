// import { TEXTS } from './data/texts';
// import { ILobby } from '../lobby/types/Lobby';

// export const chooseRandomText = (lobby: ILobby): string => {
//     if (lobby.typedTexts.length === TEXTS.length) {
//         lobby.typedTexts = [];
//     }

//     let index;
//     do {
//         index = Math.floor(Math.random() * TEXTS.length);
//     } while (lobby.typedTexts.includes(index));

//     lobby.typedTexts.push(index);

//     return TEXTS[index] ?? '';
// };



import { TEXTS } from "./data/texts"

export const chooseRandomText = lobby => {
  if (lobby.typedTexts.length === TEXTS.length) {
    lobby.typedTexts = []
  }

  let index
  do {
    index = Math.floor(Math.random() * TEXTS.length)
  } while (lobby.typedTexts.includes(index))

  lobby.typedTexts.push(index)

  return TEXTS[index] ?? ""
}
