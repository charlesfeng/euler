// http://projecteuler.net/problem=19

var m = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  , d = 1
  , n = 0
  , i, j

for (i = 0; i < 12; i++)
  d = (d + m[i]) % 7
  
for (i = 1901; i <= 2000; i++) {
  for (j = 0; j < 12; j++) {
    n += !d
    d = (d + m[j] + (j === 1 && (i % 100 || !(i % 400)) && !(i % 4))) % 7
  }
}

n

// answer: 171
// runtime: 11 ms