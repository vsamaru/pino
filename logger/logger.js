import pino from 'pino'
import { logflarePinoVercel } from 'pino-logflare'

// create pino-logflare console stream for serverless functions and send function for browser logs
const { stream, send } = logflarePinoVercel({
    apiKey: "68vIfYkFdI7C",
    sourceToken: "253d6007-7f97-4bf9-85bc-4652b216cef4"
});

// create pino loggger
const logger = pino({
    browser: {
        transmit: {
            send: send,
        }
    },
    level: "debug",
    base: {
        processes_str: JSON.stringify(process.versions),
        revision: process.env.VERCEL_GITHUB_COMMIT_SHA,
    },
}, stream);




export default logger
