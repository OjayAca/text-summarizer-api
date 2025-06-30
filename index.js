const express = require('express');
const cors = require('cors');
const summarize = require('./utils/summarize');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Text Summarizer API is running');
});

app.post('/summarize', (req, res) => {
  const { text, sentenceCount } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'Missing "text" in request body.' });
  }
  const summary = summarize(text, sentenceCount || 3);
  res.json({ summary });
});

app.listen(PORT, () => {
  console.log(`Text Summarizer API running on port ${PORT}`);
});
