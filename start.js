const express = require('express');
const { spawn } = require('child_process');

const app = express();
const PORT = process.env.PORT || 3000;

// 1. Web Server HTTP agar Back4App LULUS Health Check
app.get('/', (req, res) => {
  res.send('9Router Cloud Server is Active!');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`[Express] Health check server running on port ${PORT}`);
});

// 2. Jalankan 9Router Service
console.log('[9Router] Starting 9Router process...');
const routerProc = spawn('npx', ['9router', '--host', '0.0.0.0', '--port', '20128'], { stdio: 'inherit' });

routerProc.on('error', (err) => {
  console.error('[9Router Error]:', err);
});
