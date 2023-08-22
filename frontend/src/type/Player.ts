import 'vite/client'
export interface Player {
    socketId: string;
    username: string;
    isReady: boolean;
    isFinished: boolean;
    finishTime: number;
    carIndex: number;

    currentTextPosition: number;
    typingSpeed: number;
}
