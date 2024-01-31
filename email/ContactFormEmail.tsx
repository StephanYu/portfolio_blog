import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  email: string;
};

const ContactFormEmail = ({ message, email }: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>A message from a new Contact.</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container className="max-w-lg m-auto p-5">
            <Img src="/default-logo.svg" width="32" height="32" alt="Logo" />
            <Section className="bg-white my-10 px-10 py-4 rounded-md border border-gray-200 text-center">
              <Heading className="text-2xl leading-tight mb-4">
                Message from your portfolio pro contact form
              </Heading>
              <Text className="text-left mb-2">{message}</Text>
              <Hr />
              <Text className="text-left">The sender's email is {email}</Text>
            </Section>
          </Container>
          <Text className="text-center text-gray-600 text-sm mt-12">
            Nifty Studios, Inc. ・ Lindengasse 49/19, 1070 ・Vienna, Austria
          </Text>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormEmail;
