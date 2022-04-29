import { RefObject, useEffect } from 'react'

/**
 * Hook that alerts clicks outside of the passed ref
 */

type handler = (clickedOut: boolean) => void

function useClickOutside(handler: handler, refs: RefObject<HTMLElement>[]) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (
        refs.some(
          ref => ref.current && ref.current.contains(event.target as Node)
        )
      ) {
        handler(false)
      } else {
        handler(true)
      }
    }

    document.addEventListener('mouseup', handleClickOutside)

    return () => {
      document.removeEventListener('mouseup', handleClickOutside)
    }
  }, [refs, handler])
}

export default useClickOutside
