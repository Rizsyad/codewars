const likes = (names) => ((names.length == 0) ? 'no one' : (names.length <= 1) ? `${names[0]}` : (names.length <= 2) ? `${names[0]} and ${names[1]}` : (names.length <= 3) ? `${names[0]}, ${names[1]} and ${names[2]}` : `${names[0]}, ${names[1]} and ${names.length - 2} others` ) + ` ${names.length >= 2 ? 'like' : 'likes'} this`

console.log(likes([]), 'no one likes this');
console.log(likes(['Peter']), 'Peter likes this');
console.log(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
console.log(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');