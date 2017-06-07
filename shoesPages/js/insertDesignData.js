//get the color buttons
var doc = document;

//function for set pictures into btn
function setPics(id1,id2,picName){
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
setPics("color1","color2","color")
//set style
setPics("style1","style2","style");
//set shoeType
setPics("shoeType1","shoeType2","shoeType");
//set pattern
setPics("pattern1","pattern2","pattern");
//set focus
//setPics("focus1","focus2","focus");
//set Heel
setPics("heel1","heel2","heel");
setPics("material1","material2","material");

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
                    var source = this.style.backgroundImage.replace("url(\"\./","").replace("\")","");
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
window.onload = mutiSelect();