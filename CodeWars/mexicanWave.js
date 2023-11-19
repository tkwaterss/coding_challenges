const wave = str => {
  // str = str.split('');
  // let wave = [];
  // for (let i = 0; i < str.length; i++) {
  //   if (str[i] !== ' ') {
  //     str[i] = str[i].toUpperCase();
  //     wave.push(str.join(''));
  //     str[i] = str[i].toLowerCase()
  //   }
  // }
  // return wave;
  let wave = []
  new Array(str.length).fill(str).forEach((item, index) => {
    item = item.split('')
    if (item[index] !== ' ') {
      item[index] = item[index].toUpperCase()
      wave.push(item.join(''));
    }
  })
  return wave;




}

console.log(wave("hello world"))