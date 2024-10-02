import { FC, ReactNode } from "react";
import { Provider } from "react-redux";

import { StateSchema } from "../config/StateSchema";
import { useNavigate } from "react-router-dom";
import { createReduxStore } from "../config/store";
import { ReducersMapObject } from "@reduxjs/toolkit";

interface StoreProviderProps {
  children: ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: ReducersMapObject<StateSchema>;
}

const StoreProvider: FC<StoreProviderProps> = ({
  children,
  initialState,
  asyncReducers,
}) => {
  const navigate = useNavigate();
  const store = createReduxStore(
    navigate,
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>,
  );

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
