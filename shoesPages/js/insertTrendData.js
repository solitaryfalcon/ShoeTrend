//get the color buttons
var doc = document;

//function for set pictures into btn
function setTrendPics(id1,id2,picName){
    var div1 = doc.getElementById(id1),
        div2 = doc.getElementById(id2),
        group1 = div1.getElementsByTagName("button"),
        group2 = div2.getElementsByTagName("button"),
        disCount1 = 0,
        disCount2 = 0;
    for(var i = 0; i<group1.length; i++){
        if(group1[i].disabled){
            disCount1 ++;
        }
        else if(!group1[i].disabled){
            group1[i].style.backgroundImage = "url(./img/dataSource/"+picName+(i-(disCount1-1))+".png)";
        }
    }
    for(var i = 0; i<group2.length; i++){
        if(group2[i].disabled){
            disCount2 ++;
        }
        if(!group2[i].disabled){
            group2[i].style.backgroundImage = "url(./img/dataSource/" + picName + (i + (7-disCount1)-disCount2-1) + ".png)";
        }
    }
}

//set color
setTrendPics("trend_color1","trend_color2","color")
//set style
setTrendPics("trend_style1","trend_style2","style");
//set shoeType
setTrendPics("trend_shoeType1","trend_shoeType2","shoeType");
//set pattern
setTrendPics("trend_pattern1","trend_pattern2","pattern");
//set focus
//setTrendPics("focus1","focus2","focus");
//set Heel
setTrendPics("trend_heel1","trend_heel2","heel");
setTrendPics("trend_material1","trend_material2","material");

//jump to detail page
function toDetailPage() {
    var btnGroup = doc.getElementById("trend_btnGroup").getElementsByTagName("button");
    for(var i = 0; i<btnGroup.length; i++){
        btnGroup[i].id = i;
        if(!btnGroup[i].disabled) {
            btnGroup[i].onclick = function () {
                window.location = "detail.html?id="+this.id;
            }
        }
    }
}

window.onload = toDetailPage();