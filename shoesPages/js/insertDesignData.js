//get the color buttons
var doc = document,
    designPeople = "men",
    designOrigins = "1",
    designOccasions = "home",
    designYear = "2017",
    picsURL = "http://118.89.183.92:8080/zappos/Servlet?people="+designPeople+"&origins="+designOrigins+"&occasions="+occasions+"&year="+designYear;

function insertDesignPics(){
    $.ajax({
        type:"get",
        url: picsURL,
        dataType: "json",
        jsonp: "callback",
        success: function (data) {
            dataSource = data;
            setDesignPics("design_color1","design_color2","design_color3",dataSource.Color);
            setDesignPics("design_style1","design_style2","design_style3",dataSource.ShoeStyle);
            setDesignPics("design_heelStyle1","design_heelStyle2","design_heelStyle3",dataSource.HeelStyle);
            setDesignPics("design_toeStyle1","design_toeStyle1","design_toeStyle1",dataSource.ToeStyle);
            setDesignPics("design_shoeType1","design_shoeType2","design_shoeType3",dataSource.ShoeType);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(errorThrown);
        }
    });
}
doc.getElementById("design_apply").onclick = function () {
    var designPeopleSelected = doc.getElementById("designPeople"),
        designOriginsSelected = doc.getElementById("designOrigins"),
        designOccasionsSelected = doc.getElementById("designOccasions"),
        designYearSelected = doc.getElementById("designYear");
    designPeople = designPeopleSelected.options[designPeopleSelected.selectedIndex].text;
    designOrigins = designOriginsSelected.options[designOriginsSelected.selectedIndex].text;
    designOccasions = designOccasionsSelected.options[designOccasionsSelected.selectedIndex].text;
    designYear = designYearSelected.options[designYearSelected.selectedIndex].text;
    var selectedURL = "http://118.89.183.92:8080/zappos/Servlet?people="+designPeople+"&origins="+designOrigins+"&occasions="+designOccasions+"&year="+designYear;
    $.ajax({
        type:"get",
        url: selectedURL,
        dataType: "json",
        jsonp: "callback",
        success: function (data) {
            dataSource = data;
            setDesignPics("design_color1","design_color2","design_color3",dataSource.Color);
            setDesignPics("design_style1","design_style2","design_style3",dataSource.ShoeStyle);
            setDesignPics("design_heelStyle1","design_heelStyle2","design_heelStyle3",dataSource.HeelStyle);
            setDesignPics("design_toeStyle1","design_toeStyle1","design_toeStyle1",dataSource.ToeStyle);
            setDesignPics("design_shoeType1","design_shoeType2","design_shoeType3",dataSource.ShoeType);
            console.log(selectedURL);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(errorThrown);
        }
    });
}
doc.getElementById("design_clear").onclick = function () {
    location.reload();
}

//function for set pictures into btn
function setDesignPics(id1,id2,id3,picSource){
    var div1 = doc.getElementById(id1),
        div2 = doc.getElementById(id2),
        div3 = doc.getElementById(id3),
        group1 = div1.getElementsByTagName("button"),
        group2 = div2.getElementsByTagName("button"),
        group3 = div3.getElementsByTagName("button"),
        counter = 0;
    for(var i = 0; i<group1.length,counter<picSource.length; i++){
        if(!group1[i].disabled){
            group1[i].style.backgroundImage = "url(http://"+picSource[counter]+")";
            counter++;
        }
    }
    for(var i = 0; i<group2.length,counter<picSource.length; i++){
        if(!group2[i].disabled){
            group2[i].style.backgroundImage = "url(http://"+picSource[counter]+")";
            counter++;
        }
    }
    for(var i = 0; i<group3.length,counter<picSource.length; i++){
        if(!group3[i].disabled){
            group3[i].style.backgroundImage = "url(http://"+picSource[counter]+")";
            counter++;
        }
    }
}

//multi-select 
function mutiSelect() {
    var btnGroup = doc.getElementById("btnGroup").getElementsByTagName("button"),
        flag = false;
    var selectedDiv = doc.getElementById("selectedDiv");
    for(var i = 0; i<btnGroup.length; i++){
        btnGroup[i].id = i;
        if(!btnGroup[i].disabled)
            btnGroup[i].flag = false;
            btnGroup[i].onclick = function () {
                this.flag = !this.flag;
                if(this.flag == true) {
                    this.style.borderColor = "yellow";
                    this.style.borderWidth = "3px";
                    this.style.borderStyle = "dashed";
                    //add selected pics to selected div
                    var source = this.style.backgroundImage.replace("url(\"","").replace("\")","");
                    console.log(source);
                    var img = doc.createElement("img");
                    img.src = source;
                    img.id = this.id;
                    selectedDiv.appendChild(img);
                }
                else if(this.flag !== true){
                    this.style.borderColor = "white";
                    this.style.borderWidth = "2px 1px 2px 1px";
                    this.style.borderStyle = "solid";
                    //remove cancel pics from selected div
                    var imgItems = selectedDiv.getElementsByTagName("img");
                    for(var i = 0; i<imgItems.length; i++){
                        if(imgItems[i].id == this.id){
                            selectedDiv.removeChild(imgItems[i]);
                        }
                    }
            }
        }
    }
}

//submit data
function submitData() {
    var btnGroup = doc.getElementById("btnGroup").getElementsByTagName("button"),
        selectedBtn = [];
    for(var i = 0; i<btnGroup.length; i++){
        if(!btnGroup[i].disabled){
            if(btnGroup[i].flag == true){
                selectedBtn.push(btnGroup[i].style.backgroundImage);
            }
        }
    }
    console.log(selectedBtn);
}
addLoadEvent(mutiSelect());
addLoadEvent(insertDesignPics());