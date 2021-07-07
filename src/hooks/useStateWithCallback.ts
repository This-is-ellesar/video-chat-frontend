import { useCallback, useEffect, useRef, useState } from 'react'

const useStateWithCallback = (initialState: any) => {
  const [state, setState] = useState(initialState)
  const cbRef = useRef()

  const updateState = useCallback((newState: any, cb: any) => {
    cbRef.current = cb

    setState((prev: any) =>
      typeof newState === 'function' ? newState(prev) : newState,
    )
  }, [])

  useEffect(() => {
    if (cbRef.current) {
      // @ts-ignore: Unreachable code error
      cbRef.current(state)
      // @ts-ignore: Unreachable code error
      cbRef.current(null)
    }
  }, [state])

  return [state, updateState]
}

export default useStateWithCallback
