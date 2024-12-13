let standard = [
	["I",1]
	["IV",4]
	["V",5]
    ["IX",9]
	["X",10]
	["XL",40]
	["L",50]
	["XC",90]
	["C",100]
	["CD",400]
	["D",500]
	["CM",900]
	["M",1000]
]
function getCloserValue(n) {
	for (let i = 0; i < standard.length; i++) {
		let currentVal = standard[i][1];
		if (currentVal === n) {
			return standard[i][0];
		}
if (currentVal>n) {
	return standard[i-1][0];
	
}
	
	}
		ans = "";
		while (n!=0) {
			let roman = getCloserValue(n);
			ans += roman[0];
			n -= roman[1];
		}
	console.log(ans);
}