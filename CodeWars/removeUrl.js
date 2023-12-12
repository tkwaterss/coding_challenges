const removeUrlAnchor = url => {
  return url.split('#')[0]
}

console.log(removeUrlAnchor('www.site.com#this is extra'))