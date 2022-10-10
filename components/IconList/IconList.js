import { List, IconListElement, StyledIcon } from './style'

const IconList = ({ origin, status, species, occurrence }) => {
  return (
    <List>
      <IconListElement>
        <StyledIcon name="public" />
        {origin !== 'Unknown' ? `Born on ${origin}` : 'Unknown'}
      </IconListElement>
      <IconListElement>
        {status === 'Alive' ? (
          <StyledIcon status={status} name="favorite" />
        ) : status === 'Deceased' ? (
          <StyledIcon status={status} name="heart_broken" />
        ) : (
          <StyledIcon name="question_mark" />
        )}
        Is {status.toLowerCase()}
      </IconListElement>
      <IconListElement>
        <StyledIcon name="group" />
        {species ?? 'Unknown'}
      </IconListElement>
      <IconListElement>
        <StyledIcon name="video_file" />
        Was seen in {occurrence} chapters
      </IconListElement>
    </List>
  )
}

export default IconList
