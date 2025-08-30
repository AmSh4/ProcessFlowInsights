const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const io = require('../server').io; // Assuming io exported

exports.analyze = (req, res) => {
  const filePath = req.file.path;
  const pythonProcess = spawn('python', [process.env.PYTHON_SCRIPT_PATH, filePath]);

  pythonProcess.stdout.on('data', (data) => {
    // Parse data and emit via socket for real-time
    io.emit('analysis_progress', data.toString());
  });

  pythonProcess.on('close', (code) => {
    if (code === 0) {
      const resultPath = path.join(__dirname, '../../analysis_scripts/result.json');
      const result = JSON.parse(fs.readFileSync(resultPath));
      res.json(result);
    } else {
      res.status(500).json({ error: 'Analysis failed' });
    }
  });
};