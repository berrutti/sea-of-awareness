import {
  Section,
  Content,
  Title,
  Field,
  Label,
  Control,
  Input,
  Textarea,
  Button,
} from 'rbx'
import Layout from '../components/Layout'

const ContactPage = () => (
  <Layout>
    <Section>
      <Title as="h2">Contact</Title>
      <Content>If you have any questions, suggestions or you just want to say hi, please do so!</Content>
    </Section>
    <Section>
      <Field>
        <Label>Name</Label>
        <Control>
          <Input type="text" name="name" placeholder="John Doe" />
        </Control>
      </Field>
      <Field>
        <Label>Email</Label>
        <Control>
          <Input type="email" name="email" placeholder="email@example.com" />
        </Control>
      </Field>
      <Field>
        <Label>Message</Label>
        <Control>
          <Textarea name="message" rows={3} placeholder="Your message" />
        </Control>
      </Field>
      <Button.Group align="right">
        <Button color="info" key="submit">
          Submit
        </Button>
      </Button.Group>
    </Section>
  </Layout>
)

export default ContactPage
