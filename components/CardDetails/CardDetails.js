import { DetailsContainer, DetailsInfo } from './style'

const CardDetails = ({ img_url }) => {
  return (
    <DetailsContainer>
      <img src={img_url} />
      <DetailsInfo>
        <h3></h3>
      </DetailsInfo>
    </DetailsContainer>
  )
}

export default CardDetails
