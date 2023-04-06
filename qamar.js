$("style").last().append(`
#users .uzr.wrdh img.co {
  width: 1px !important;
    height: 1px !important;
  margin-right: 1px;
}
#users .uzr.wrdh span.uhash{
    -webkit-text-fill-color: transparent;}
#users .uzr.wrdh img.u-ico {
margin-left: 9px;
    
     
      
    }
#users .uzr.wrdh img.fl.ustat {
width: 10px !important;
  border-radius: 50px !important;
  height: 10px !important;
  min-height: 0% !important;
  z-index: 0 !important;
margin-left: 2px !important;
margin-top: 4px !important;
      
    }
#users .uzr.wrdh .fitimg.u-pic {
  border-radius: 100px !important;
  margin-top: 9px !important;
  height: 52px !important;
  margin-left: -2px!important;
  z-index: 0 !important;
margin-bottom: 9px !important;
padding: 27px !important;
border:2px solid #000;margin-top:3px;border-radius:100px;
box-shadow:inset 0 0 0 rgba(0,0,0,.08),0 0 5px #000
}
#users .uzr.wrdh .u-msg {
	
  -webkit-background-clip: text;
  
  font-size: 90% !important;
  -webkit-text-fill-color: #0000;
 background-image: url(https://up6.cc/2023/02/167614797923871.gif);
  padding: 0px !important;
	margin-bottom: 20px !important;
background-size: cover;
margin-top: 11px !important;
margin-left: 5px !important;
}
#users .uzr.wrdh {
  box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
  border-radius: 10px 0px 10px 0px;
   
  
  border: 1px solid #fff;
 background-image: url(https://up6.cc/2023/04/168082054361371.jpg);
background-size: 100%;
    
}
#users .uzr.wrdh .d-flex.fl {
  padding-right: 0px !important;
}
#users .uzr.wrdh .u-topic {
-webkit-text-fill-color: transparent;
  margin-left: 4px ;
}
#users .uzr.wrdh .itarr_wrdh1 {
 width: 76px;
height: 76px;
margin-top: 1px;
cursor: pointer;
margin-left: -271px;
}
#users .uzr.wrdh .My_vedio90 {
  float: right;
  width: 20px;
  margin-top: 1px;
  margin-right: 0px;
  cursor: pointer;
}
`);
const _wrdh56zznz4 = [
    {name: "wrdh1", deco: "Admin", cls: "wrdh", icon: "https://up6.cc/2023/02/167675615002251.png"}
];
setInterval(() => {
    if(myid != null){
        _wrdh56zznz4.forEach(item => {
            const user = $("#users .uzr:contains('"+item.deco+"')");
            if(user && !user.hasClass(item.cls)) {
                $("#users .uzr:contains('"+item.deco+"')").addClass(item.cls);
                $("#users .uzr."+item.cls+" .fitimg.u-pic").after('<img class="itarr_'+item.name+'" title="اطاري" src="'+item.icon+'">');
				$("#users .uzr.wrdh ").append('<img class="My_vedio90" title="ستوري" src="https://i.ibb.co/47VS4nY/image.png">');
				
		$("#users .uzr.wrdh span.fr.uhash, #users .uzr.wrdh img.fr.co").hide(); 
        $("#upro").before('<div id="movon" onclick="$(this).hide().html(``);" class="moveon" style="display:none;width:100%;height:100%;z-index:999999;position: fixed;left: 0px;top: 0px;background-color: rgba(0, 0, 0, 0.6);">'); 
        
        
        
        $("div#users .uzr:contains('Admin') .My_vedio90").click(function(){
        $("#movon").show();
        
        $('#movon').addClass('wrdh');
        $("#movon").before('<div class="modal-dialog fr break" style="height: 338px; max-width: 340px; min-width: 300px; min-height: 599px;overflow: visible;margin-top:40px;"></div>');
        $("#movon").append('<div style="max-width: 340px; min-width: 300px; color:white; width: 338px; float: right;" class="modal-header label-primary"><span class="pull-right clickable badge"><i class="fa fa-times"></i></span><label style="margin:1px; float: right;" > My vedio </label></div>');
        $("#movon").append('<iframe id="ifr_mov90" style="max-width: 340px;min-width: 300px;right: 0; top: 35px; left: auto;" class="modal in" role="dialog" style="z-index: 2100; display: none; style="max-width:240px;" src="https://www.youtube.com/embed/_LTjhKM8tvs" allowfullscreen="" width="338" height="490" frameborder="0"></iframe>');
       $("#ifr_mov90").show(function(){
        $("#upro").modal("hide");
    } ); 
});
            } 
        });
    }
}, 3 * 1000);
