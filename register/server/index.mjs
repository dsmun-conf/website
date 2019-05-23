import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-body';
import nodemailer from 'nodemailer';

const app = new Koa();
const router = new Router();

app.use(bodyParser());

const invitationCodes = JSON.parse(process.env.INVITATION_CODES);

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.SENDER_EMAIL_PASSWORD
    }
});

router.post('/register', async (ctx) => {
    const form = ctx.request.body;
    console.log(form);

    if (!(invitationCodes.includes(form['invitation-code']))) {
        ctx.redirect('/register/unsuccessful');
        return;
    }

    let mailBody = '';

    for (const key of Object.keys(form)) {
        mailBody += `${key.replace(/-/g, ' ')}: ${form[key]}`;
        mailBody += '\n';
    }

    const info = await transporter.sendMail({
        to: process.env.EMAIL_RECIPIENTS,
        subject: `New Registration: ${form['school-name']}`,
        text: mailBody
    });

    console.log(info);

    ctx.redirect('/register/successful');
});

app.use(router.routes());

app.listen();
