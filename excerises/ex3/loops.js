console.log ("----While Loop----")

while (i <= 100) {
console. log(i);
i++;
}

console. log ("----For Loop----");
const n = 100
for (let i = 1; i <= n; i++) {
    console.log(i);
}

console. log ("----For Loop Even #s----");
let num = 1;
while(num <= 100){
	if(num%2 === 0){
		console.log(num);
		};
	num ++;
}

console. log ("----Array List of Names----");
let names = ["Fred", "James", "Robert", "Dan", "Tom", "Walt", "Dilbert", "Sally", "Dana", "Veronica"];
for (let list of names) {
console. log (list);
}