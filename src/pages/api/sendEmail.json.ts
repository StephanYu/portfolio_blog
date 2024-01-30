import type { APIRoute } from "astro"
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  if (request.method !== 'POST') {
    return new Response(null, { status: 405, statusText: 'Method Not Allowed' });
  }

  if (request.headers.get("Content-Type")?.includes("application/json")) {
    try {
      const body = await request.json();
      const { name, email, message } = body;

      if (!name || !email || !message) {
        return new Response(JSON.stringify({ error: 'Missing required fields' }), {
          status: 400,
          statusText: 'Bad Request',
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }

    
      const send = await resend.emails.send({
        from: "Stephan Yu <onboarding@resend.dev>",
        to: "stephan.yu@gmail.com",
        subject: `Message from ${name}`,
        html: `<h1>You have a new message</h1><p>${message}</p>`,
        text: `You have a new message from ${name}: ${message}`,
      });
    
      if (send.data) {
        return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
          status: 200,
          headers: {
            'Content-Type': 'application/json'
          }
        });
      } else {
        throw new Error(send.error?.message || JSON.stringify(send.error));
      }
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Failed to send email' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  } else {
    return new Response(JSON.stringify({ error: 'Invalid Content-Type' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
