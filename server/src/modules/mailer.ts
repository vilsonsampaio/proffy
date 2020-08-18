import nodemailer from 'nodemailer';

import mailConfig from '../config/mail';

const { host, port, user, pass } = mailConfig;

const transport = nodemailer.createTransport({
  host,
  port,
  auth: { user, pass },
});

export default transport;