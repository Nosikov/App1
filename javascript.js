	let regB=document.getElementById("regB");
	regB.addEventListener("click", onClick);

	function onClick() {
		let nameinput = document.getElementById("nameinput");
		if (nameinput.value !="")
		{
	     alert ("Send!");
		}
		else 
		{
			alert ("Error!");
		}
	}
	