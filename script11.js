function mod_data_post(){
	var act;
		act=confirm("ç¢ºå®šé€™äº›è³‡æ–™è¦åšè™•ç†?");
		if(act){
			document.modchk=true;
		}else{
			document.modchk=false;
		}
}

//æª¢æŸ¥æ¬„ä½æ˜¯å¦ç‚ºè‹±æ–‡å­—
function checktexteng(fieldname,msg){
	txt=fieldname.value;
	if(txt!=''){
		if(txt.match(/[^a-z|^A-Z]/g))
		{
			fieldname.focus();
			alert(msg);
			//fieldname.value='';
			//fieldname.focus();
		}
	}
}

function show_day(getdate,pushday){
	 var WeekDay = new Array("æ˜ŸæœŸæ—¥","æ˜ŸæœŸä¸€","æ˜ŸæœŸäºŒ","æ˜ŸæœŸä¸‰","æ˜ŸæœŸå››","æ˜ŸæœŸäº”","æ˜ŸæœŸå…­");
	 if(getdate.value!=''){
	 	pushday.value=WeekDay[parseInt(new Date(getdate.value).getDay())];
	 }
}
function btn_mod_data_post(formname){
	var act;
	act=confirm("ç¢ºå®šè¦åŸ·è¡Œ?");
	if(act){
		document.forms[formname].submit();
		return true;
	}else{
		$.unblockUI();
		return false;
	}
}
//æª¢æŸ¥emailæ ¼å¼
function isEmail(email){
	if (email=="") return true;
	reEmail=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
	return reEmail.test(email);
}
//å°‡æ•¸å­—åšæ ¼å¼åŒ–
function addCommas(nStr)
{
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}
function checkimgtype(filename,typelist){//æª¢æŸ¥åœ–ç‰‡æ ¼å¼,filename æ˜¯æ¬„ä½åç¨±,typelistæ˜¯å¯ä»¥é€šéŽçš„æ ¼å¼ ç”¨ , åˆ†éš”
	if(filename=="" || typelist=="") return false;
	var typelist=typelist.toLowerCase().split(',');
	var pass_status=1;//0æ˜¯no pass 1æ˜¯ pass
	$('INPUT[name="'+filename+'"]').each(function(index, element) {
		if($(this).val()!=""){
			var filename_chg = $(this).val().toLowerCase();
			chk_type_txt="";
			var  setchk="jpg|gif";
			if(typelist.length>0) setchk="";
			if(typelist.length>0) var chk_type_txt=typelist.join("|");
			if(setchk.length>0) setchk="|"+setchk;
			var re = eval("/\.("+chk_type_txt+setchk+")$/i");
			pass_status=0;
			//console.log(re);
			if(re.test(filename_chg))pass_status=1;
			//console.log(pass_status);
		}
    });
	//console.log(pass_status);
	return pass_status;
}
function chk_field_fun(){//æª¢æŸ¥æ¬„ä½æ ¼å¼æ˜¯å¦æœ‰å¡«å¯«æˆ–æ˜¯æ­£ç¢º
	var error=0;
	var errmsg="";
	$(".formTable input").removeProp("style");
	$(".formTable input[data-fieldtype]").each(function(index, element) {
		//console.log($(this).data("fieldtype")+"-"+$(this).data("enter"));
		if($(this).data("enter")=="1" && $(this).val()==""){
			$(this).css({'border' : '#F00 2px solid'});
			errmsg=errmsg+"<br>--"+$(this).parents('.row').find("label").text().replace("ï¼š", "")+"æ¬„ä½å¿…é ˆå¡«å¯«";
			//console.log($(this).parents('.row').find("label").text());
			error=1;
		}else{
			switch($(this).data("fieldtype")){
				case "email":
				if(! isEmail($(this).val())){
					$(this).css({'border' : '#F00 2px solid'});
					errmsg=errmsg+"<br>--"+$(this).parents('.row').find("label").text().replace("ï¼š", "")+"æ¬„ä½å¿…é ˆå¡«å¯«æ­£ç¢ºæ ¼å¼";
					//console.log($(this).parents('.row').find("label").text());
					error=1;
				}
				break;
				case "int_number"://æ•´æ•¸
				if($(this).val().match(/[^0-9]/g)){
					$(this).css({'border' : '#F00 2px solid'});
					errmsg=errmsg+"<br>--"+$(this).parents('.row').find("label").text().replace("ï¼š", "")+"æ¬„ä½å¿…é ˆå¡«å¯«æ•´æ•¸æ•¸å€¼";
					//console.log($(this).parents('.row').find("label").text());
					error=1;
				}
				break;
				case "float_number"://æ•¸å€¼åŒ…å«å°æ•¸
				if($(this).val().match(/[^.|^0-9]/g)){
					$(this).css({'border' : '#F00 2px solid'});
					errmsg=errmsg+"<br>--"+$(this).parents('.row').find("label").text().replace("ï¼š", "")+"æ¬„ä½å¿…é ˆå¡«å¯«æ•¸å€¼";
					//console.log($(this).parents('.row').find("label").text());
					error=1;
				}
				break;
				case "test_eng_num"://æª¢é©—æ¬„ä½é™¤äº†æ•¸å­—åŠè‹±æ–‡ä»¥å¤–ä¸å¯æœ‰å…¶ä»–ç¬¦è™Ÿ
				var re = /^[\d|a-zA-Z0-9]+$/;
				if($(this).val()!=''){
					if(! re.test($(this).val())){
						$(this).css({'border' : '#F00 2px solid'});
						errmsg=errmsg+"<br>--"+$(this).parents('.row').find("label").text().replace("ï¼š", "")+"æ¬„ä½å¿…é ˆå¡«å¯«è‹±æ–‡å­—æ¯æˆ–æ•¸å­—";
						//console.log($(this).parents('.row').find("label").text());
						error=1;
					}
				}
				break;
                case "password_field"://æª¢é©—æ¬„ä½é™¤äº†æ•¸å­—åŠè‹±æ–‡ä»¥å¤–ä¸å¯æœ‰å…¶ä»–ç¬¦è™Ÿ
                var re = /([^A-Za-z0-9!_+*]+)/;
                if($(this).val()!=''){
                    if(re.test($(this).val())){
                        $(this).css({'border' : '#F00 2px solid'});
                        errmsg=errmsg+"<br>--"+$(this).parents('.row').find("label").text().replace("ï¼š", "")+"æ¬„ä½å¿…é ˆå¡«å¯«è‹±æ–‡å­—æ¯æˆ–æ•¸å­—(å¯åŒ…å«!_+*ç¬¦è™Ÿ)";
                        //console.log($(this).parents('.row').find("label").text());
                        error=1;
                    }
                }
                break;
				case "file":
				var file_check_type=$(this).data("fileext")!=""?$(this).data("fileext"):"jpg,png,gif,doc,docx,pdf";
				if(! checkimgtype($(this).prop("name"),file_check_type)){
					$(this).css({'border' : '#F00 2px solid'});
					errmsg=errmsg+"<br>--"+$(this).parents('.row').find("label.col-1").text().replace("ï¼š", "")+"æª”æ¡ˆæ ¼å¼å¿…é ˆç‚º"+file_check_type+"";
					error=1;
				}
				break;
				case "blink":
				// var uri_pattern = /[-\/\\^$*+?.()|[\]{}]/g;
				var re = /[\/\\^$*';:@&=,%#+?.()|[\]! ]/g;
				var error_chr="";
				var check_arr=$(this).val().match(re);
				if(check_arr){
					$(this).css({'border' : '#F00 2px solid'});
					for (var i=0;i<check_arr.length;i++){
						error_chr+=check_arr[i]==" "?"ç©ºç™½ç¬¦è™Ÿ":check_arr[i]+(i<check_arr.length-1?" , ":"");
					}
					errmsg=errmsg+"<br>--"+$(this).parents('.row').find("label").text().replace("ï¼š" , "")+"æ¬„ä½ä¸å¾—æœ‰ç‰¹æ®Šå­—å…ƒï¼š"+error_chr;
					error=1;
				}
				break;
			}
		}
    });
	if(error==1){
		return errmsg;
	}else{
		return "";
	}
}
function errordialog(msg){
	parent.$("#dialogMask h6").html('<i class="fa fa-exclamation-triangle"></i> éŒ¯èª¤è¨Šæ¯');
	parent.$("#dialogMask div.Txt").html(msg);
	parent.$(".dialog_top_pop").trigger("click");
}
var msgtimer = 0;
function msgdialog(msg,times){
    if(times == null || times == undefined || times == '') { times = 1500; }
	if(times>0) { window.clearTimeout(msgtimer); }
	parent.$("#dialogMask h6").html('<i class="fa fa-exclamation-triangle"></i> ç³»çµ±è¨Šæ¯');
	parent.$("#dialogMask div.Txt").html(msg);
	parent.$(".dialog_top_pop").trigger("click");
	if(times>0) { msgtimer = setTimeout($.unblockUI, times); }
}
function checkCreditCard(formValue){
    re = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    if (!re.test(formValue.value))
        alert("ä½ çš„ä¿¡ç”¨å¡è™Ÿç¢¼ä¸ç¬¦åˆã€Œxxxx-xxxx-xxxx-xxxxã€çš„æ ¼å¼ï¼");
}
function checkID(formValue){
	re = /^[AFC][0-9]{9}$/;
    if (!re.test(formValue.value))
        alert("ä½ çš„èº«ä»½è­‰è™Ÿç¢¼æ ¼å¼ä¸å°ï¼");
}
function checkMoblie(formValue){
   	re = /^[09]{2}[0-9]{8}$/;
    if (!re.test(formValue)){
        //alert("ä½ çš„ç™¼ç¥¨è™Ÿç¢¼æ ¼å¼ä¸å°ï¼");
		return false;
	}else{
		return true;
	}
}
function checkinvoice(formValue){//ç™¼ç¥¨è™Ÿç¢¼
	re = /^[A-Za-z]{2}[0-9]{8}$/;
    if (!re.test(formValue)){
        //alert("ä½ çš„ç™¼ç¥¨è™Ÿç¢¼æ ¼å¼ä¸å°ï¼");
		return false;
	}else{
		return true;
	}
}
function eval_int_number(fieldname){
	if(fieldname.value.match(/[^0-9]/g)){
		alert('æ¬„ä½å€¼å¿…é ˆç‚ºæ•¸å­—!!');
		fieldname.value='';
		fieldname.focus();
	}
}
function eval_float_number(fieldname){
	if(fieldname.value.match(/[^.|^0-9]/g)){
		alert('æ¬„ä½å€¼å¿…é ˆç‚ºæ•¸å­—!!');
		fieldname.value='';
		fieldname.focus();
	}
}
