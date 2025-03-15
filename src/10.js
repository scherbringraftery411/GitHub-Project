function getRandomCode() {
  const codes = ['001', '002', '003', '004', '005'];
  return codes[Math.floor(Math.random() * codes.length)];
}
