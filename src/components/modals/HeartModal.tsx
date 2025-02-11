import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const HeartModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Attribution" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Bongle is created by Theodore Bong and every day's word is manually set by yours truly. 
        Credits to the Original Wordle & React-Wordle for inspiration and guidance.
        All code is under a MIT license and can be found at my github: {' '}
        <a
          href="https://github.com/TheoBong"
          className="font-underline font-bold"
        >
          click here
        </a>{' '}
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">Copyright © bongbong.com</p>
    </BaseModal>
  )
}
