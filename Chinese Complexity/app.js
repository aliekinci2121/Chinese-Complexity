let yil=Number(prompt("Lütfen bir yil giriniz:"))

let sene=Number(prompt("Lütfen element icin bir yil giriniz:"))


let burclar = {
  Fare: [2020, 2008, 1996, 1984, 1972, 1960, 1948, 1936],
  Öküz: [2021, 2009, 1997, 1985, 1973, 1961, 1949, 1937],
  Kaplan: [2022, 2010, 1998, 1986, 1974, 1962, 1950, 1938],
  Tavşan: [2023, 2011, 1999, 1987, 1975, 1963, 1951, 1939],
  Ejderha: [2024, 2012, 2000, 1988, 1976, 1964, 1952, 1940],
  Yılan: [2025, 2013, 2001, 1989, 1977, 1965, 1953, 1941],
  At: [2026, 2014, 2002, 1990, 1978, 1966, 1954, 1942],
  Koyun: [2027, 2015, 2003, 1991, 1979, 1967, 1955, 1943],
  Maymun: [2028, 2016, 2004, 1992, 1980, 1968, 1956, 1944],
  Horoz: [2029, 2017, 2005, 1993, 1981, 1969, 1957, 1945],
  Köpek: [2030, 2018, 2006, 1994, 1982, 1970, 1958, 1946],
  Köstebek: [2031, 2019, 2007, 1995, 1983, 1971, 1959, 1947]
};

let elementler={
  Ağaç:[1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020],
  Ateş :[1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021],
  Toprak :[1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022],
  Metal :[1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023],
  Su:[1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024]
}
     
let bulunanBurc=null
let bulunanElementler=null

for(let burc in burclar){
  if(burclar[burc].includes(yil)){
    bulunanBurc=burc
    break
  }
}
if(bulunanBurc){
  console.log(yil + " yili "+ bulunanBurc + " burcuna sahiptir ")
}else{
  console.log("lütfen gecerli bir yil giriniz")
}
for(element in elementler){
  if(elementler[element].includes(sene)){
    bulunanElementler=element
    break
  }
}
if(bulunanElementler){
  console.log( sene + " senesi "+ bulunanElementler + " elementine sahiptir ")
}{
  console.log("Lütfen gecerli bir sene giriniz")
}