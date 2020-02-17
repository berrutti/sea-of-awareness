import Link from 'next/link'
import { Section, Card, Content, Title } from 'rbx'
import Layout from '../components/Layout'

const Home = () => (
  <Layout>
    <Section>
      <Card>
        <Card.Content>
          <Content>

          </Content>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Content>

          </Content>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Content>
            <Link href="//github.com/zeit/next.js/tree/canary/packages/create-next-app">
              <a>
                <Title as="h3">Create Next App &rarr;</Title>
                <p>Was this tool helpful? Let us know how we can improve it</p>
              </a>
            </Link>
          </Content>
        </Card.Content>
      </Card>
    </Section>
  </Layout>
)

export default Home
