import Link from 'next/link'
import Head from 'next/head'

import {
  Generic,
  Container,
  Content,
  Navbar,
  Button,
  Section,
  Hero,
  Title,
  Footer,
} from 'rbx'

const Layout = ({ children }) => {
  return (
    <Generic>
      <Head>
        <title>Sea of Awareness</title>
      </Head>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <Link href="/">
              <Navbar.Item>
                <img
                  src="/logo.png"
                  alt="Sea of Awareness"
                  role="presentation"
                />
              </Navbar.Item>
            </Link>
            <Link href="/">
              <Navbar.Item>Home</Navbar.Item>
            </Link>
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

              <Navbar.Item dropdown>
                <Navbar.Link>More</Navbar.Link>
                <Navbar.Dropdown>
                  <Link href="/about">
                    <Navbar.Item>About</Navbar.Item>
                  </Link>
                  <Link href="/contact">
                    <Navbar.Item>Contact</Navbar.Item>
                  </Link>
                  <Navbar.Divider />
                  <Navbar.Item href="https://github.com/berrutti/sea-of-awareness/issues">Report an issue</Navbar.Item>
                </Navbar.Dropdown>
              </Navbar.Item>
            </Navbar.Segment>

            <Navbar.Segment align="end">
              <Navbar.Item>
                <Button.Group>
                  <Button color="info">
                    <strong>Sign up</strong>
                  </Button>
                  <Button color="light">Log in</Button>
                </Button.Group>
              </Navbar.Item>
            </Navbar.Segment>
          </Navbar.Menu>

        </Container>
      </Navbar>
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
