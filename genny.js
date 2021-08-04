var genny = function (fn, ln) {
	var fnn = fn.charAt(0);
	var lnn = ln.charAt(0); 
	var head = "", i = 0;
	/* Create the header */
	head = head + fnn.toUpperCase() + lnn.toUpperCase()
	for (i; i < 5; i++) {
		head = head + Math.floor((Math.random() * 10) + 1)
		//data.push(Math.floor((Math.random() * 10) + 1))
	}
	
	//console.log(head);
	
	return head;
}

genny('or', 'big');

