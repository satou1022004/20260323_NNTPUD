const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    secure: false,
    auth: {
        user: "fd6121e7586b23",
        pass: "91fde680732029",
    },
});

module.exports = {
    sendMail: async function (to, url) {
        const info = await transporter.sendMail({
            from: 'admin@heha.com',
            to: to,
            subject: "Reset Password email",
            text: "click vao day de reset password",
            html: "click vao <a href=" + url + ">day</a> de reset password",
        });
    },

    sendMailPassword: async function (to, password) {
        await transporter.sendMail({
            from: 'admin@heha.com',
            to: to,
            subject: "Thong tin tai khoan cua ban",
            text: `Mat khau cua ban la: ${password}`,
            html: `
                <h2>Chao mung ban den voi he thong!</h2>
                <p>Tai khoan cua ban da duoc tao thanh cong.</p>
                <p>Mat khau: <strong>${password}</strong></p>
                <p>Vui long doi mat khau sau khi dang nhap.</p>
            `,
        });
    }
}