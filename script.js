let inputs = document.getElementById("inp");
 let text =document.querySelector(".text");

function Add(){
	if(inputs.value ==""){
		alert("please Enter Task");
	}else{
		let newEle = document.createElement("ul");
	newEle.innerHTMl='${inputs.value}<i class="fa-soid fa-trash"></i>';
		text.appendChild(newEle);
		inputs.value="";
		newEle.querySelector("i").addEventListener("click",remove);
		function remove(){
		}
	}
	}
