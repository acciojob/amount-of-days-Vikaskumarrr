//your JS code here. If required.
function dayOfYear() {
	if(dayOfYear % 2 == 0){
		if(dayOfYear % 400 === 0 && dayOfYear % 100 === 0){
			return 366;
		}
	}  return 365;
}