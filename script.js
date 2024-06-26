document.addEventListener('DOMContentLoaded', function() {
    const formButton = document.querySelector("#formButton");
    formButton.addEventListener("click", getSuggestion);
});

function getSuggestion() {
	var sent = false;
	var x = document.getElementById("feedback").value;
	var f = document.getElementById("feedbackForm");
	var t = document.getElementById("textArea");
	if(x!=null && x!="")
	{
		formButton.removeEventListener("click", getSuggestion);
		let req = new XMLHttpRequest();
		t.innerHTML='<p>'+x+'</p>'
		req.onreadystatechange = () => {
		if (req.readyState == XMLHttpRequest.DONE && !sent) {
			f.innerHTML='<p>Thanks for suggesting!</p>';
			sent = true;
      	var arr = JSON.parse(req.responseText)['record'];


			req.open("PUT", "https://api.jsonbin.io/v3/b/655cc84d0574da7622c9c5eb", true);
			req.setRequestHeader("Content-Type", "application/json");
			req.setRequestHeader("X-ACCESS-Key", "$2a$10$Xn0VvCBkIdlWdh8D/uls3Os88h6ZQZCRvO6vAMPvhSZdGD43NUvXW");
			arr.push({feedback: x});
			req.send(JSON.stringify(arr));
		}
		};
		
		req.open("GET", "https://api.jsonbin.io/v3/b/655cc84d0574da7622c9c5eb/latest", true);
		req.setRequestHeader("X-ACCESS-Key", "$2a$10$Xn0VvCBkIdlWdh8D/uls3Os88h6ZQZCRvO6vAMPvhSZdGD43NUvXW");
		req.send();
	}
}

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

/* TODO
- clean up this js code
*/
