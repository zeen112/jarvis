const express = require('express');
const { spawn } = require('child_process');

const app = express();
const PORT = process.env.PORT || 3000;

// 1. Web Server untuk Lulus Health Check di Back4App
app.get('/', (req, res) => {
  res.send('9Router & Hermes Bot is Running!');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`[Express] Server health check aktif di port ${PORT}`);
});

// 2. Jalankan 9Router
console.log('[9Router] Menjalankan 9Router...');
const routerProc = spawn('npx', ['9router', '--host', '0.0.0.0', '--port', '20128'], { stdio: 'inherit' });

// 3. Jalankan Hermes Bot setelah jeda 5 detik
setTimeout(() => {
  console.log('[Hermes] Menjalankan Hermes Bot Telegram...');
  const hermesProc = spawn('hermes', ['telegram', 'start'], { stdio: 'inherit' });
}, 5000);
