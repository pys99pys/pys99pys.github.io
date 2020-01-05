import * as React from 'react';
import { AxiosPromise } from 'axios';

const { useReducer, useCallback } = React;

enum ACTION_TYPES {
  REQUEST = 'REQUEST',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
}

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
type AxiosCreator<T> = (...params: any[]) => AxiosPromise<T>;

type ReturnType<T> = [
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  (...params: any[]) => Promise<T | false>,
  boolean,
  T,
  Error | null,
];

type Action<T> =
  | { type: ACTION_TYPES.REQUEST }
  | { type: ACTION_TYPES.SUCCESS; payload: T }
  | { type: ACTION_TYPES.FAILURE; payload: Error };

interface State<T> {
  pending: boolean;
  data: T;
  error: Error | null;
}

const reducer = <T>() => (state: State<T>, action: Action<T>): State<T> => {
  switch (action.type) {
    case ACTION_TYPES.REQUEST:
      return {
        ...state,
        error: null,
        pending: true,
      };
    case ACTION_TYPES.SUCCESS: {
      return {
        ...state,
        pending: false,
        error: null,
        data: action.payload,
      };
    }
    case ACTION_TYPES.FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    default:
      throw new Error('Unknown action type');
  }
};

export default <T>(
  axiosCreator: AxiosCreator<T>,
  defaultData: T,
): ReturnType<T> => {
  const [state, dispatch] = useReducer(reducer<T>(), {
    pending: false,
    error: null,
    data: defaultData,
  });

  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const onFetch = useCallback(async (...params: any[]) => {
    try {
      dispatch({ type: ACTION_TYPES.REQUEST });
      const { data: payload } = await axiosCreator(...params);
      dispatch({ type: ACTION_TYPES.SUCCESS, payload });
      return payload;
    } catch (e) {
      dispatch({ type: ACTION_TYPES.FAILURE, payload: e });
      return false;
    }
    /* eslint-disable-next-line */
  }, []);

  return [onFetch, state.pending, state.data, state.error];
};
