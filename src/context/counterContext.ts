import { createContext, Dispatch, SetStateAction, useContext } from "react";


type CounterContextProps = {
    count: number;
    setCount: (
      Dispatch<SetStateAction<number>>
    );
    countFromObj:number;
    setCountFromObj: (
      Dispatch<SetStateAction<number>>
    );
  };


export const CounterContext = createContext<CounterContextProps>({
    count: 0,
    setCount: () => {},
    countFromObj:10,
    setCountFromObj: () => {},
  });


export const useCounterContext = () => useContext(CounterContext);