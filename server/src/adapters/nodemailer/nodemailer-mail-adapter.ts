import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "124de8ad6d267a",
    pass: "a26618f4da798b"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData){
      await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Pedro Castro <pedrohenriquealvesc94@gmail.com>',
        subject,
        html: body,
      });
    }
}