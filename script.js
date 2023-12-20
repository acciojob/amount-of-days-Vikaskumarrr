//your JS code here. If required.
function dayOfYear(year) {
	let isyar = false;
	if(year % 2 == 0){
		if(year % 400 === 0 && year % 100 === 0){
			return 366;
		}
	}  return 365;
}