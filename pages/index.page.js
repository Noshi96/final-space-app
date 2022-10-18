import Layout from '../components/Layout/Layout'
import {
  Image,
  SectionHero,
  Hero,
  HeroTextBox,
  HeadingPrimary,
  HeroDescription,
  LearnMoreButton
} from './style'
export default function Home () {
  return (
    <Layout title='Final space'>
      <main>
        <SectionHero>
          <Hero>
            <HeroTextBox>
              <HeadingPrimary>
                Check out your <span>favorite</span> heroes from series and play{' '}
                <span>games</span>
              </HeadingPrimary>
              <HeroDescription>
                Learn more about <span>universum</span>
              </HeroDescription>
              <LearnMoreButton>Click here</LearnMoreButton>
            </HeroTextBox>
            <Image
              src='https://images5.alphacoders.com/105/1055769.jpg'
              alt='final-space-wallpaper'
            />
          </Hero>
        </SectionHero>
      </main>
    </Layout>
  )
}
