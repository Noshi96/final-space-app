import { useState } from 'react'

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  function toggle() {
    setIsOpen((prevState) => !prevState)
    if (isOpen) {
      document.body.style.overflow = ''
      document.body.style.marginRight = '0'
    } else {
      document.body.style.overflow = 'hidden'
      document.body.style.marginRight = '18px'
    }
  }

  return { isOpen, toggle }
}

export default useModal
