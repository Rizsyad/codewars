const textin = str => str.replace(/two|too?/gi, '2')

console.log(textin('I love to text'),'I love 2 text',)
console.log(textin('see you tomorrow'),'see you 2morrow',)
console.log(textin('look at that octopus'),'look at that oc2pus',)
console.log(textin('BECAUSE I WANT TO'),'BECAUSE I WANT 2',)