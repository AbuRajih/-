if(game_data.player.premium == false) {
    UI.InfoMessage('السكربت يحتاج عضوية خاصة', 3000, true);
    end();
}
   
function calcular() {
    if(document.getElementById('bt1').value.match(/[0-9]{2}\:[0-9]{2}\:[0-9]{2}/) != null && document.getElementById('bt2').value.match(/[0-9]{2}\:[0-9]{2}\:[0-9]{2}/) != null) {
    var timeArray = document.getElementById('bt1').value.split(':');
    var travArray = document.getElementById('bt2').value.split(':');
    var result;
       
    //Back Time
    var h = parseInt(timeArray[0], 10) + parseInt(travArray[0], 10);
    var m = parseInt(timeArray[1], 10) + parseInt(travArray[1], 10);
    var s = parseInt(timeArray[2], 10) + parseInt(travArray[2], 10);
   
    if (s > 60) {
        m += 1;
        s -= 60;
    }
    if (m > 60) {
        h += 1;
        m -= 60;
    }
    if (h >= 24) {
        h -= 24;
    }
    if (s < 10) {
        s = '0' + s;
    }
    if (m < 10) {
        m = '0' + m;
    }
    if (h < 10) {
        h = '0' + h;
    }
    result = h + ':' + m + ':' + s;
    $("#resultado").html("قوات المهاجم سترجع في:&nbsp; " + result + ".");
       
    //قنص
    var H = parseInt(timeArray[0], 10) - parseInt(travArray[0], 10);
    var M = parseInt(timeArray[1], 10) - parseInt(travArray[1], 10);
    var S = parseInt(timeArray[2], 10) - parseInt(travArray[2], 10);
       
    if(S < 0) {S = 60 - (S * -1);M --;}
    if(M < 0) {M = 60 - (M * -1);H --;}
    if(H < 0 ) {H = 24 - (H * -1);if(H>10) {H = 'Ontem às ' + H;}else if(H<10) {H = 'Ontem às ' + H;}}
    if(S<10) {S = '0' + S;}
    if(M<10) {M = '0' + M;}
    if(H<10) {H = '0' + H;}  
       
    result = H + ':' + M + ':' + S;
    $("#resultado").html($("#resultado").html() + "<br />قنص: " + result);
    $("#resultado").fadeIn("slow");
    } else {
        $("#resultado").html("<p style='color: Blue;'>قم بوضع التوقيت <br />بهذا الشكل: HH:MM:SS</p> ");
        $("#resultado").fadeIn("slow");
    }
}
   
var conteudo = '<div style=max-width:600px;>' +
'<center><h2 class="popup_box_header"><h4>المعرب:<a style="color:MediumBlue" href="https://forum.tribalwars.ae/member.php?u=38997">Abu.Rajih</a></h4></div></h2><center><img src="http://v.3bir.net/imgcache/2015/08/13735103871918-1.gif"></img></center></center>' +
'<p><div style="text-align: center;">وقت وصول الهجمه<br /><input type="text" id="bt1"><br />سرعة الوحده المتجهة إلينا<br /><input type="text" id="bt2"><br /><br /><input onClick="calcular()" style="padding-center: 28px; background: #6C4824 url(https://brtwscripts.com/calc-icon.png) no-repeat 10px" class="btn" type="submit" value="إحسب"></div></p>' +
'<div id="resultado" style="display: none;">Back:&nbsp; xx:xx:xx<br />قنص: xx:xx:xx</div>' +
'</div>';
   
Dialog.show('bt_snipe_calc', conteudo);