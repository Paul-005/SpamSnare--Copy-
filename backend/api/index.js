const express = require('express');
const { connect } = require('../src/config/database.js');
const { authRouter } = require('../src/routes/auth.js');
const emailRouter = require('../src/routes/email.js');
const inboxRoute = require('../src/routes/inbox.js');
const cors = require('cors');

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use('/', authRouter);
app.use('/', emailRouter);
app.use('/', inboxRoute);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

let dbConnected = false;

// Ensure DB connection only happens once per cold start
async function ensureDbConnection() {
    if (!dbConnected) {
        await connect();
        dbConnected = true;
    }
}

module.exports = async (req, res) => {
    await ensureDbConnection();
    app(req, res);
};
