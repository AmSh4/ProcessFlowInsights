const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const { spawn } = require('child_process');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const swaggerUi = require('swagger-ui-express');
const http = require('http');
const socketIo = require('socket.io');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const upload = multer({ dest: 'uploads/' });

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

// Routes
app.use('/api/analysis', require('./routes/analysisRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(require('./controllers/apiDocs')));

io.on('connection', (socket) => {
  console.log('User connected');
});

server.listen(5000, () => console.log('Server running on 5000'));