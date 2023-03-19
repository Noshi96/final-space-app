import { Card, Name, Image } from './style';
import useModal from 'hooks/useModal';
import CardDetailsModal from 'components/CardDetailsModal/CardDetailsModal';

interface CharacterCardProps {
  name: string;
  imgUrl: string;
  id: number;
  singleCharacter: any;
}

const CharacterCard = ({
  name,
  imgUrl,
  id,
  singleCharacter,
}: CharacterCardProps) => {
  const { isOpen, toggle } = useModal();

  return (
    <>
      <Card onClick={toggle} tabIndex={0}>
        <Image src={imgUrl} alt={name} />
        <Name>{name}</Name>
      </Card>
      <CardDetailsModal
        isOpen={isOpen}
        closeModal={toggle}
        id={id}
        singleCharacter={singleCharacter}
      />
    </>
  );
};

export default CharacterCard;
