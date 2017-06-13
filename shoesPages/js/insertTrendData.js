//get the color buttons
var doc = document,
    people = "women",
    origin = "1",
    occasions = "home",
    year = "2017",
    picsURL = "http://118.89.183.92:8080/zappos/Servlet?people="+people+"&origins="+origin+"&occasions="+occasions+"&year="+year;

function insertPics(){
    $.ajax({
       type:"get",
       url: picsURL,
       dataType: "json",
       jsonp: "callback",
        success: function (data) {
            dataSource = data;
            setTrendPics("trend_color1","trend_color2","trend_color3",dataSource.Color);
            setTrendPics("trend_style1","trend_style2","trend_style3",dataSource.ShoeStyle);
            setTrendPics("trend_heelStyle1","trend_heelStyle2","trend_heelStyle3",dataSource.HeelStyle);
            setTrendPics("trend_toeStyle1","trend_toeStyle1","trend_toeStyle1",dataSource.ToeStyle);
            setTrendPics("trend_shoeType1","trend_shoeType2","trend_shoeType3",dataSource.ShoeType);
            //console.log(dataSource.Color.id);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(errorThrown);
        }
    });
}
doc.getElementById("trend_apply").onclick = function () {
    var peopleSelected = doc.getElementById("people"),
        originSelected = doc.getElementById("origins"),
        occasionsSelected = doc.getElementById("occasions"),
        yearSelected = doc.getElementById("year"),
    people = peopleSelected.options[peopleSelected.selectedIndex].text;
    origin = originSelected.options[originSelected.selectedIndex].text;
    occasions = occasionsSelected.options[occasionsSelected.selectedIndex].text;
    year = yearSelected.options[yearSelected.selectedIndex].text;
    var selectedURL = "http://118.89.183.92:8080/zappos/Servlet?people="+people+"&origins="+origin+"&occasions="+occasions+"&year="+year;
    $.ajax({
        type:"get",
        url: selectedURL,
        dataType: "json",
        jsonp: "callback",
        success: function (data) {
            dataSource = data;
            setTrendPics("trend_color1","trend_color2","trend_color3",dataSource.Color);
            setTrendPics("trend_style1","trend_style2","trend_style3",dataSource.ShoeStyle);
            setTrendPics("trend_heelStyle1","trend_heelStyle2","trend_heelStyle3",dataSource.HeelStyle);
            setTrendPics("trend_toeStyle1","trend_toeStyle1","trend_toeStyle1",dataSource.ToeStyle);
            setTrendPics("trend_shoeType1","trend_shoeType2","trend_shoeType3",dataSource.ShoeType);
            console.log(selectedURL);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(errorThrown);
        }
    });
}
doc.getElementById("trend_clear").onclick = function () {
    location.reload();
}

//function for set pictures into btn
function setTrendPics(id1,id2,id3,picSource){
    var div1 = doc.getElementById(id1),
        div2 = doc.getElementById(id2),
        div3 = doc.getElementById(id3),
        group1 = div1.getElementsByTagName("button"),
        group2 = div2.getElementsByTagName("button"),
        group3 = div3.getElementsByTagName("button"),
        imgSource = picSource.src,
        imgId = picSource.id,
        counter = 0;
    for(var i = 0; i<group1.length&counter<imgSource.length; i++){
       if(!group1[i].disabled){
            group1[i].style.backgroundImage = "url(http://"+imgSource[counter]+")";
            group1[i].id = imgId[counter];
           counter++;
        }
    }
    for(var i = 0; i<group2.length&counter<imgSource.length; i++){
        if(!group2[i].disabled){
            group2[i].style.backgroundImage = "url(http://"+imgSource[counter]+")";
            group2[i].id = imgId[counter];
            counter++;
        }
    }
    for(var i = 0; i<group3.length&counter<imgSource.length; i++){
        if(!group3[i].disabled){
            group3[i].style.backgroundImage = "url(http://"+imgSource[counter]+")";
            group3[i].id = imgId[counter];
            counter++;
        }
    }
}

//jump to detail page
function toDetailPage() {
    var btnGroup = doc.getElementById("trend_btnGroup").getElementsByTagName("button");
    for(var i = 0; i<btnGroup.length; i++){
        //btnGroup[i].id = i;
        if(!btnGroup[i].disabled) {
            btnGroup[i].onclick = function () {
                window.location = "detail.html?id="+this.id;
            }
        }
    }
}

addLoadEvent(toDetailPage());
addLoadEvent(insertPics());