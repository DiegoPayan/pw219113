var i = 0;

async function cuenta(){
	i = i + 1;
	postMessage(i);
	await setTimeout("cuenta()",5);
}
cuenta();