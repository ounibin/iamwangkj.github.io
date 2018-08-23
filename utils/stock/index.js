const data = require('./20171206.json');
// console.log(data);

for (var i = 0; i < data.length; i++) {
	let difference = data[i].trade-data[i].open
	if (difference<0) {//绿十字星
		let rate = Math.abs(difference)/(data[i].high-data[i].low)
		if (rate < 0.1) {
			if (data[i].code[0] !== '3') {
				console.log(data[i].code+'-'+data[i].name+'-'+data[i].changepercent+'%');
			}
			
		}
	}
	// console.log(difference+'\n');
}
