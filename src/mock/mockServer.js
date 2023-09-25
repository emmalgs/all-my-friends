const { sampleData } = require("../components/data/inviteCandidates")

const express = require("express");
const app = express();
const port = 4000;

app.get("/invite-candidates", (req, res) => {
  const authCode = req.query.auth;
  console.log(authCode)
  res.json(sampleData);
});

app.post("/invites", (req, res) => {
  const authCode = req.query.auth;
  console.log(authCode)
  const emails = req.body;
  res.json({ message: `Invites sent to ${emails.length} emails` });
});

let server;
const startMockServer = () => {
  server = app.listen(port, () => {
    console.log(`Mock server listening at http://localhost:${port}`);
  });
};
const stopMockServer = () => {
  server.close();
  console.log(`Mock server stopped at http://localhost:${port}`)
};


module.exports = { startMockServer, stopMockServer };
