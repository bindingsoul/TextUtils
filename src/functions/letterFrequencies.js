let letterFrequencies = {
  a: 0,
  b: 0,
  c: 0,
  d: 0,
};
export default function letterFrequencies1(text) {
  for (let i = 0; i < text.length; i++) {
    if (text[i] == "a") letterFrequencies.a++;
    else if (text[i] == "b") letterFrequencies.b++;
    else if (text[i] == "c") letterFrequencies.c++;
    else if (text[i] == "d") letterFrequencies.d++;
  }
  return letterFrequencies;
}

