var d = 0
  , n = 0
  , t
  , i
  , a

while (d < 500) {
  n++
  
  t = n * (n + 1) / 2
  i = 2
  a = []
  
  while (t > 1) {
    if (t % i) i++
    else {
      a[i] = a[i] || 0 + 1
      i = 2
    }
  }
  
  console.log(a)
  
  d = Object.keys(a).reduce(function (p, c) { return p * (a[c] + 1) }, 1)
}