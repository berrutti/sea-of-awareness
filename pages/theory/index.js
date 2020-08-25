import {
  Section,
  Title,
  Menu,
} from 'rbx'
import Layout from '../../components/Layout'
import Link from 'next/link'

const Theory = () => (
  <Layout>
    <Section>
      <Title as="h2">Theory</Title>
    </Section>
    <aside >
      <Menu className="column is-2">
        <Link href="/theory/what-is-awareness"><Menu.Label>What is Awareness?</Menu.Label></Link>
        <Link href="/theory/what-is-meditation"><Menu.Label>What is Meditation?</Menu.Label></Link>
        <Link href="/theory/is-buddhism-true"><Menu.Label>Is Buddhism true?</Menu.Label></Link>
        <Link href="/theory/relation-to-stoicism"><Menu.Label>Relation to Stoicism</Menu.Label></Link>
      </Menu>
    </aside>

  </Layout>
)

export default Theory
