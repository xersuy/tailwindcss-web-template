import React from 'react';
import {useDebounce} from 'react-use';

function useDebounceState(initialValue:any, delay = 700) {
  const [state, setState] = React.useState(initialValue);
  const [debouncedState, setDebouncedState] = React.useState(initialValue);
  const [isReady, cancel] = useDebounce(
    () => {
      setDebouncedState(state);
    },
    delay,
    [state],
  );

  return [state, setState, debouncedState, isReady, cancel];
}

export default useDebounceState;
