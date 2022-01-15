

function imageOn(imgName) {

	document[imgName].src = eval(imgName + "2.src");

}


function imageOff(imgName) {

	document[imgName].src = eval(imgName + "1.src");

}


function jre_header_c(path,size) {

	var push=size;

	b_close1 = new Image(); b_close1.src = path+'img/b_close_01.gif';
	b_close2 = new Image(); b_close2.src = path+'img/b_close_02.gif';

	document.write('<table border="0" cellpadding="0" cellspacing="0" width="'+push+'">');
	document.write('<tr>');
	document.write('<td><a href="http://www.jreast.co.jp/"><img src="'+path+'img/jr_logo.jpg" width="263" height="48" border="0" alt="JR“Œ“ú–{"></a></td>');
	document.write('<td align="right"><a href="javascript:window.close();" onmouseover="imageOn(\'b_close\');" onmouseout="imageOff(\'b_close\');"><img src="'+path+'img/b_close_01.gif" width="55" height="17" border="0" alt="•Â‚¶‚é" name="b_close"></a><img src="'+path+'img/_.gif" width="10" height="1" border="0" alt=""></td>');
	document.write('</tr>');
	document.write('<tr><td colspan="2" background="'+path+'img/line_header_ber.gif" align="right"><img src="'+path+'img/line_header_ber_c.gif" width="8" height="6" border="0" alt=""></td></tr>');
	document.write('</table>');
}
