var view={showColor:function(o,e){document.getElementById(o).style.color=e},showText:function(o,e){document.getElementById(o).innerHTML=e}},model={FonOffBoole:!0,FMoshiBoole:!1,FRewuBoole:!1,FuserdefineBoole:!1,FMoshiNum:3,FMoshi:["智能模式","极净模式","自定义模式"],FRewu:["铺热关闭","铺热开启"],FMRU:[{location:"FonOff",pigment:"#ee9434 "},{location:"FMoshi",pigment:"#459234"},{location:"FRewu",pigment:"#c7270d "},{location:"Fuserdefine",pigment:"#1ceaf7"}]},controller={},onoffclick=document.getElementById("FonOff"),moshiclick=document.getElementById("FMoshi"),rewuclick=document.getElementById("FRewu"),userdefineclick=document.getElementById("Fuserdefine"),index=1;onoffclick.onclick=function(){model.FonOffBoole?(view.showColor("FonOff","#ee9434"),view.showColor("FMoshi","#459234"),view.showColor("iconMoshi","#fff"),view.showColor("moshi","#fff"),model.FonOffBoole=!1,model.FMoshiBoole=!0,model.FRewuBoole=!0,model.FuserdefineBoole=!0):(view.showColor("FonOff","#525252"),view.showColor("FMoshi","#525252"),view.showColor("FRewu","#525252"),view.showColor("Fuserdefine","#525252"),view.showColor("iconMoshi","#ced8cd"),view.showColor("moshi","#ced8cd"),view.showColor("iconRewu","#ced8cd"),view.showColor("Rewu","#ced8cd"),model.FonOffBoole=!0,model.FMoshiBoole=!1,model.FRewuBoole=!1,model.FuserdefineBoole=!1)},moshiclick.onclick=function(){model.FMoshiBoole&&!model.FonOffBoole&&(view.showText("moshi",model.FMoshi[index]),++index==model.FMoshiNum&&(index=0))},rewuclick.onclick=function(){if(model.FRewuBoole&&!model.FonOffBoole)view.showColor("FRewu","#c7270d"),view.showColor("iconRewu","#fff"),view.showColor("Rewu","#fff"),view.showText("Rewu",model.FRewu[1]),model.FRewuBoole=!1;else{if(model.FonOffBoole)return!1;view.showColor("FRewu","#525252"),model.FonOffBoole||view.showText("Rewu",model.FRewu[0]),model.FRewuBoole=!0}},userdefineclick.onclick=function(){if(model.FuserdefineBoole&&!model.FonOffBoole)view.showColor("Fuserdefine","#1ceaf7"),model.FuserdefineBoole=!1;else{if(model.FonOffBoole)return!1;view.showColor("Fuserdefine","#525252"),model.FuserdefineBoole=!0}};