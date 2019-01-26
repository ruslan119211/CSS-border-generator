
function fun1(){
	// border-radius
	var rtl=document.getElementById('rtl').value;
	var rtr=document.getElementById('rtr').value;
	var rbr=document.getElementById('rbr').value;
	var rbl=document.getElementById('rbl').value;
	var ttl=document.getElementById('ttl');
	var ttr=document.getElementById('ttr');
	var tbr=document.getElementById('tbr');
	var tbl=document.getElementById('tbl');
	var bt=document.getElementById('bt').value;
	var btt=document.getElementById('btt');


	ttl.value=rtl;
	ttr.value=rtr;
	tbr.value=rbr;
	tbl.value=rbl;
	btt.value=bt;
	// border-radiusEND

	// border-color
	var sel=document.getElementById('borderColor').selectedIndex;
	var val =document.getElementById('borderColor').value[sel];


	var red=document.getElementById('red');
	var green=document.getElementById('green');
	var yellow=document.getElementById('Yellow');
	var black=document.getElementById('Black');

	red.style.color='red';
	green.style.color='green';
	yellow.style.color='yellow';
	black.style.color='black';

	var colors=document.getElementById('borderColor').value;

	if (val == [red]) {
	  	colors.style.color ='red';
	} else if (val == [green]) {
	   	colors.style.color ='green';
	} else if (val == [yellow]) {
	   	colors.style.color ='yellow';
	} else if (val == [black]) {
	   	colors.style.color ='black';
	}  
	// border-color END





	// border-style
	var bStyl =document.getElementById('BorderStyle').selectedIndex;
	var bsVal =document.getElementById('BorderStyle').value[sel];

	var bordStyle =document.getElementById('BorderStyle').value;

	if (val == [solid]) {
	  	bordStyle.style.borderStyle ='solid';
	} else if (val == [dashed]) {
	   	bordStyle.style.borderStyle ='dashed';
	} else if (val == [dotted]) {
	   	bordStyle.style.borderStyle ='dotted';
	} else if (val == [double]) {
	   	bordStyle.style.borderStyle ='double';
	}  

	// border-style END





	var block=document.getElementById('block');
	var textCss=document.getElementById('textCss');

	block.style.borderStyle=bordStyle;
	block.style.borderWidth=bt+'px ';
	block.style.borderColor=colors;
	block.style.borderRadius=rtl+'px '+rtr+'px '+rbr+'px '+rbl+'px ';
	textCss.innerHTML='border-radius: '+rtl+'px '+rtr+'px '+rbr+'px '+rbl+'px;'+
	'<br/>'+'border-width: '+bt+'px '+';'+'<br/>'+'border-color: '+colors+';'+'<br/>'+'border-style: '+bordStyle+';';

}










