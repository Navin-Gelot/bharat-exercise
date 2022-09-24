let line = 5;

for (let start = 1; start <= line; start++) {
  for (let x = 1; x <= start; x++) {
    document.write("*");
  }
  document.write("<br/>");
}

/*
- boundary case:
 - starting = 0
 - ending = 5 

 - 
  1:
   start = 1
   1 <= 5 = true
  2:
   start = 2
   2 <= 5 = true
  3:
   start = 3
   3 <= 5 = true
  4:
   start = 4
   4 <= 5 = true
  5:
   start = 5
   5 <= 5 = true
  6:
   start = 6
   6 <= 5 = false
*/
