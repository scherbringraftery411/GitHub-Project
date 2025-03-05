  const randomCode = () => {
    let randNum = Math.floor(Math.random() * 10) + 1;
    let randBool = Boolean(Math.round(Math.random()));
    return `const ${randNum} = () => {
      console.log('Hello, world!');
    }`;
  };
