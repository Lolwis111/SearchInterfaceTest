function layout()
{
	doResize();

	window.addEventListener('resize', function(event) {
		doResize();
	}, true);
}

function doResize()
{
	let output = document.getElementById("output");

    if(output === null) return;

	// output.style.minHeight = (window.innerHeight - 300).toString() + "px";
}

function showError()
{
	let output = document.getElementById("error");

    if(output === null) return;

	output.classList.remove("hidden");
	output.classList.add("visible");

	setTimeout(hideError, 5000);
}

function hideError()
{
	let output = document.getElementById("error");

    if(output === null) return;

	output.classList.remove("visible");
	output.classList.add("hidden")		
}

function reset()
{
	const output = document.getElementById("output");

    if(output === null) return;

	output.innerHTML = "";
}

function doRequestKey(event: KeyboardEvent)
{
	if(event.key == "Enter")
	{
		doRequest();
	}
}

function doRequest()
{
	const textBox = document.getElementById("text1") as HTMLInputElement;

    if(textBox === null) return;

	if(textBox.value === "")
	{
		showError();
		return;
	}

	const str: string = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu f`;

	const output = document.getElementById("output");

    if(output === null) return;

	output.innerHTML = "";

	const paths:string[] = [ "cat1.png", "cat2.png", "cat3.png" ];

	let count = Math.floor(Math.random() * 15) + 1;

	for (let i = 0; i < count; i++)
	{
		const randomPath =  "static/images/" + paths[Math.floor(Math.random() * paths.length)];

		const start = Math.floor(Math.random() * (str.length - 300));

		const newDIV = makeOutputDIV(textBox.value, str.substring(start, start+300), randomPath);
		output.appendChild(newDIV);
	}

	textBox.value = "";
}

function makeOutputDIV(headerstr: string, content: string, imgPath: string)
{
	const newDIV = document.createElement("div");
	newDIV.setAttribute("class", "outputdiv");

	const header = document.createElement("span");
	header.setAttribute("class", "headerspan");
	header.innerHTML = headerstr;

	const img = document.createElement("img");
	img.setAttribute("src", imgPath);

	const p = document.createElement("p");
	p.innerText = content;

	newDIV.appendChild(header);
	newDIV.appendChild(document.createElement("br"));
	newDIV.appendChild(img);
	newDIV.appendChild(document.createElement("br"));
	newDIV.appendChild(p);

	return newDIV;
}