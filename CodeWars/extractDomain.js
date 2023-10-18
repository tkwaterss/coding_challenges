const domainName = url => {
  url = url.replace('https://', '')
  url = url.replace('http://', '')
  return url.replace('www.', '').split('.')[0];
}

console.log(domainName('http://github.com/carbonfive/raygun'))
console.log(domainName('http://www.zombie-bites.com'))
console.log(domainName('https://www.cnet.com'))