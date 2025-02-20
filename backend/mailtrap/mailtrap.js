import {MailtrapClient} from "mailtrap";
import "dotenv/config";

export const mailtrapClient = new MailtrapClient({
  token:process.env.MAILTRAP_TOKEN
});

export const sender = {
  email: "hello@demomailtrap.com",
  name: "Gbogboade Adegbenga",
};
// const recipients = [
//   {
//     email: "allcrownworks@gmail.com",
//   }
// ];

// client
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     html: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);