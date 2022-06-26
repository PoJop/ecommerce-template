import { Base64 } from "js-base64"

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { login, password } = req.body
        if (login === "test",  Base64.decode(password) === "test") {
            setTimeout(() => res.status(200).json({ auth: true }), 3000)
        } else {
            setTimeout(() => res.status(200).json({ auth: false }), 3000)
        }
    } else {
        // Handle any other HTTP method
    }
}