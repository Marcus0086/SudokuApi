const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.API_KEY);
export default async (req, res) => {
    if (req.body != null) {
        const body = JSON.parse(req.body);
        const message = `
            Name: ${body.name}\r\n
            Email: ${body.email}\r\n
            Message: ${body.message}
        `;
        const data = {
            to: 'guptamarcus42@gmail.com',
            from: 'guptamarcus42@gmail.com',
            subject: 'Dosuku Mail',
            text: message,
            html: message.replace(/\r\n/g, '<br>')
        };
        try {
            await mail.send(data);
        } catch (e) {
            console.log(e);
        }
    }
    res.status(200).json({ status: 'OK' });
}