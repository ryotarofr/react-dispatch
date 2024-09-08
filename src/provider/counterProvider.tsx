import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { CounterContext } from "../context/counterContext";


// ユーティリティ関数と型定義
export type State<T> = [T, Dispatch<SetStateAction<T>>];
export type StateObj<T> = { get: T; set: Dispatch<SetStateAction<T>> };
export type StateArgs<T> = State<T> | StateObj<T>;


export const State = (() => {
    return {
        from: <T,>(args: StateArgs<T>): State<T> => {
        if (Array.isArray(args)) return args;
        return [args.get, args.set];
        },
    };
})();


export const Skic18001Provider = ({ children }: { children: ReactNode }) => {
    const countState = useState<number>(0);
    const [countObj, setCountObj] = useState<number>(10);

    // ユーティリティ関数で状態を取得
    const [count, setCount] = State.from(countState); // タプル形式
    const [countFromObj, setCountFromObj] = State.from({
        get: countObj,
        set: setCountObj,
    }); // オブジェクト形式を useState に変換
    
    return (
      <CounterContext.Provider value={{
        count: count,
        setCount,
        countFromObj:countFromObj,
        setCountFromObj,
      }}
      >
        {children}
      </CounterContext.Provider>
    );
  };
