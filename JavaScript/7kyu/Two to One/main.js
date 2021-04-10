longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

console.log(longest("are they here", "yes they are here"), "aehrsty")
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
console.log(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")