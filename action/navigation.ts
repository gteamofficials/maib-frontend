import { createReducerContext } from "react-use";

type Action = "landing" | "information" | "about";

const reducer = (_: string, action: Action) => {
  switch (action) {
    case "landing":
      return "landing";
    case "information":
      return "information";
    case "about":
      return "about";
    default:
      throw new Error();
  }
};

export const [useNavigationContext, NavigationContextProvider] =
  createReducerContext(reducer, "landing");
