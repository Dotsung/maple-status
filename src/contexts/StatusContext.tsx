import { createContext, Dispatch, useReducer, useContext } from "react";

export type Status = {
  level: number;
  class: "히어로" | "데몬어벤져";
  weapon: "한손검" | "두손검";
  buffMainStat: number;
  realMainStat: number;
  subStat: number;
  heroBuffLev: number;

  unionSTR: number;
  unionDEX: number;
  unionINT: number;
  unionLUK: number;

  statATK: number;
  DAM: number;
  bossDAM: number;
  finalDAM: number;
  ignoreDEF: number;
  critical: number;
  criticalDAM: number;
  itemATKPer: number;
  arcaneForce: number;
  abilityStat: number;
  hyperStat: number;

  updateStat: number;
  updateStatPer: number;
  updateATK: number;
  updateATKPer: number;
  updateDAM: number;
  updateBossDam: number;
  updateFinalDAM: number;
  updateIgnoreDEF: number;
  updateCritical: number;
  updateCriticalDAM: number;
};

type StatusState = Status;

const StatusStateContext = createContext<StatusState | undefined>(undefined);

type Action = { name: string; value: string };

type StatusDispatch = Dispatch<Action>;

const StatusDispatchContext = createContext<StatusDispatch | undefined>(
  undefined
);

function statusReducer(state: StatusState, action: Action): StatusState {
  return {
    ...state,
    [action.name]: action.value
  };
}

export function StatusContextProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [status, dispatch] = useReducer(statusReducer, {
    level: 0,
    class: "히어로",
    weapon: "두손검",
    buffMainStat: 0,
    realMainStat: 0,
    subStat: 0,
    heroBuffLev: 0,

    unionSTR: 0,
    unionDEX: 0,
    unionINT: 0,
    unionLUK: 0,

    statATK: 0,
    DAM: 0,
    bossDAM: 0,
    finalDAM: 0,
    ignoreDEF: 0,
    critical: 0,
    criticalDAM: 0,
    itemATKPer: 0,
    arcaneForce: 0,
    abilityStat: 0,
    hyperStat: 0,

    updateStat: 0,
    updateStatPer: 0,
    updateATK: 0,
    updateATKPer: 0,
    updateDAM: 0,
    updateBossDam: 0,
    updateFinalDAM: 0,
    updateIgnoreDEF: 0,
    updateCritical: 0,
    updateCriticalDAM: 0
  });

  return (
    <StatusDispatchContext.Provider value={dispatch}>
      <StatusStateContext.Provider value={status}>
        {children}
      </StatusStateContext.Provider>
    </StatusDispatchContext.Provider>
  );
}

export function useStatusState() {
  const state = useContext(StatusStateContext);
  if (!state) throw new Error("AuthProvider not found");
  return state;
}

export function useStatusDispatch() {
  const dispatch = useContext(StatusDispatchContext);
  if (!dispatch) throw new Error("AuthProvider not found");
  return dispatch;
}
