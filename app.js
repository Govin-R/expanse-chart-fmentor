let graph_area= document.getElementById("graph");

/**fetch("./data.json", {mode:"no-cors"})
	.then(res => res.json())
	.then((data) => (data=this.data))**/

let dat;
async function data(){
	const request = new Request("./data.json");
	const response = await fetch(request);
	const dataVal = await response.json();
	//console.log(dataVal, dataVal.length);
	let days=[];
	let percentage=[];
	//dataVal.forEach(a=>(days.push(a.day),percentage.push(a.amount)));	
	//console.log(days,percentage)
	draw_graph(dataVal)
}

data();

function draw_graph(val){
	console.log(val);
	let val2 =[];
	val.forEach(a=>(val2.push(a.amount)));
	val2= val2.sort();
	console.log(val2);
	for(let i=0; i<val.length; i++){
		let graph = document.createElement('dd');
		let spanH = document.createElement("span");
		let spanT = document.createElement("span");
		let spanTText = document.createElement("h4");
		spanT.setAttribute('id','sphover');

		if(val2<60){
				spanH.style.height= String(((val[i].amount)/100)*15)+"rem";
		}
		else{
						spanH.style.height= String(((val[i].amount)/100)*10)+"rem";
		}
		
		spanTText.textContent=val[i].amount;
		spanT.append(spanTText);
		graph.textContent= val[i].day;
		graph.appendChild(spanH);
		graph.appendChild(spanT);
		graph_area.appendChild(graph);
	}
}

	
