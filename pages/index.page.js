import { getCharacters } from '../services/external-api'
import dummy from '../dummy.json'
import CharacterList from '../components/CharacterList/CharacterList'

export default function Home() {
  return <CharacterList characters={dummy}></CharacterList>
}

// export async function getServerSideProps() {
//   const resData = await getCharacters()

//   return {
//     props: {
//       characters: resData.data,
//     },
//   }
// }
