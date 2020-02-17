import {
  Section,
  Title,
  Button,
} from 'rbx'
import { Howl, Howler } from 'howler';
import Layout from '../components/Layout'

const play = () => {
  let sound = new Howl({
    src: ['/test-sounds.mp3'],
  });
  sound.play();
};

const GuidedMeditations = () => (
  <Layout>
    <Section>
      <Title as="h2">Guided Meditations</Title>
      <Button color="info" onClick={play}>
        Play
      </Button>
    </Section>
  </Layout>
)

export default GuidedMeditations
