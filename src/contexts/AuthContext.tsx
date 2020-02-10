import { createContext, Dispatch, useReducer, useContext } from "react";

export type Auth = {
  isAuthenticated: boolean;
  token: string | null;
};

type AuthState = Auth;

const AuthStateContext = createContext<AuthState | undefined>(undefined);

type Action = { type: "LOG_IN"; token: string } | { type: "LOG_OUT" };

type AuthDispatch = Dispatch<Action>;

const AuthDispatchContext = createContext<AuthDispatch | undefined>(undefined);

function authReducer(state: AuthState, action: Action): AuthState {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        isAuthenticated: true,
        token: action.token
      };
    case "LOG_OUT":
      return {
        ...state,
        isAuthenticated: false,
        token: null
      };
    default:
      throw new Error("Unhandled action");
  }
}

export function AuthContextProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [auth, dispatch] = useReducer(authReducer, {
    isAuthenticated: false,
    token: null
  });

  return (
    <AuthDispatchContext.Provider value={dispatch}>
      <AuthStateContext.Provider value={auth}>
        {children}
      </AuthStateContext.Provider>
    </AuthDispatchContext.Provider>
  );
}

export function useAuthState() {
  const state = useContext(AuthStateContext);
  if (!state) throw new Error("AuthProvider not found");
  return state;
}

export function useAuthDispatch() {
  const dispatch = useContext(AuthDispatchContext);
  if (!dispatch) throw new Error("AuthProvider not found");
  return dispatch;
}
