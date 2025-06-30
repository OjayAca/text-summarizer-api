function summarize(text, sentenceCount = 3) {
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
  return sentences.slice(0, sentenceCount).join(' ').trim();
}

module.exports = summarize;
