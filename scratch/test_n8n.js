
const https = require('https');

const data = JSON.stringify({
  test: true
});

const options = {
  hostname: 'n8n.octolade.com',
  port: 443,
  path: '/webhook/806354d1-290e-441b-8b31-939d55c3bc05',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = https.request(options, (res) => {
  console.log(`Status Code: ${res.statusCode}`);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.write(data);
req.end();
