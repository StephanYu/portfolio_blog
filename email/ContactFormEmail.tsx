import React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
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
      <Preview>New message from your portfolio pro site.</Preview>
      <Tailwind>
        <Body className="bg-gray-100">
          <Container>
            <Section className="bg-white my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                Message from your portfolio pro site
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender's email is {email}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormEmail;
