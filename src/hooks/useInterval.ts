import { useEffect, useRef } from 'react'

const useInterval = (callback: () => void, time: number) => {
  const savedCallback = useRef<() => void>(callback)
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current!()
    }

    if (time) {
      const id = setInterval(tick, time)
      return () => clearInterval(id)
    }
  }, [time])
}

export default useInterval
