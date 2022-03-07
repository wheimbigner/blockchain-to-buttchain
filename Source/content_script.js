walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	var tagName = node.tagName ? node.tagName.toLowerCase() : "";
	if (tagName == 'input' || tagName == 'textarea') {
		return;
	}
	if (node.classList && node.classList.contains('ace_editor')) {
		return;
	}

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bblockchain\b/g, "buttchain");
	v = v.replace(/\bBlockchain\b/g, "Buttchain");
	v = v.replace(/\bblock chain\b/g, "butt chain");
	v = v.replace(/\bBlock chain\b/g, "Butt chain");
	v = v.replace(/\bWeb3(\.0)?\b/g, "TripleButt");
	v = v.replace(/\bWeb 3(\.0)?\b/g, "Triple Butt");
	
	textNode.nodeValue = v;
}


