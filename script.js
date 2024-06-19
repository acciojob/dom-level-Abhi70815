//your JS code here. If required.
function getDOMlevel(eId) {
	const tElement=document.getElementById(eId);
	let pElement = tElement'
		let level=0;
	while (pElement && pElement !==document.documentElement){
      pElement=pElement.pElement;
		level++;
	} 
	alert(`The level of the element is: ${level}`);
	{
		
	}
}
getDOMlevel("level");