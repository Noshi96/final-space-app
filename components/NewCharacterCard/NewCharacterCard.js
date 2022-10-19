import { Card, DrawPlus, Vertical, Horizontal, Name } from './style'
import CharacterForm from '../CharacterForm/CharacterForm'
import useModal from '../../hooks/useModal'

const NewCharacterCard = () => {
  const { isOpen, toggle } = useModal()
  return (
    <>
      <Card onClick={toggle} tabIndex={0}>
        <DrawPlus>
          <Vertical />
          <Horizontal />
        </DrawPlus>
        <Name>Add new Character</Name>
      </Card>
      <CharacterForm isOpen={isOpen} closeModal={toggle} />
    </>
  )
}

export default NewCharacterCard
