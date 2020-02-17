import Link from 'next/link'
import {
  Generic,
  Container,
  Content,
  Navbar,
  Section,
  Hero,
  Title,
  Footer,
} from 'rbx'

const Layout = ({ children }) => {
  return (
    <Generic>
      <Navbar fixed="top" color="primary">
        <Navbar.Brand>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Segment align="start">
            <Link href="/theory">
              <Navbar.Item>Theory</Navbar.Item>
            </Link>
            <Link href="/guided-meditations">
              <Navbar.Item>Guided Meditations</Navbar.Item>
            </Link>
            <Link href="/excercises">
              <Navbar.Item>Excercises</Navbar.Item>
            </Link>
            <Link href="/art">
              <Navbar.Item>Art</Navbar.Item>
            </Link>
            <Link href="/contact">
              <Navbar.Item>Contact</Navbar.Item>
            </Link>
          </Navbar.Segment>
        </Navbar.Menu>
      </Navbar>
      <Section>
        <Hero>
          <Hero.Body>
            <Container>
              <Title as="h1" align="center" color="white">
                Sea of Awareness
              </Title>
            </Container>
          </Hero.Body>
        </Hero>
      </Section>
      <Container>
        <Content>{children}</Content>
      </Container>
      <Footer>
        <Content textAlign="centered">
          <p>© {new Date().getFullYear()} Sea of Awareness | All rights reserved.</p>
        </Content>
      </Footer>
    </Generic>
  )
}

export default Layout
