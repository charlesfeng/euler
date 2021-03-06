// project euler: problem 16 (http://projecteuler.net/problem=16)

// (c) 2013 charles feng (https://github.com/charlesfeng)
// shared under the mit license (http://www.opensource.org/licenses/mit)

for (var a = [1], i = 1, j; i <= 1000; i++) {
  a = a.map(function (d) { return d * 2 })
  
  for (j = 0; j < a.length; j++) {
    if (a[j] >= 10) {
      a[j + 1] = (a[j + 1] || 0) + Math.floor(a[j] / 10)
      a[j] %= 10
    }
  }
}

module.exports = a.reduce(function (p, c) { return p + c }, 0)

// answer: 1366
// runtime: 26 ms