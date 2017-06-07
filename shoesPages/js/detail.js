var doc = document;

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return null;
}

var selectedPic = doc.getElementById("selectedPic"),
    selectedPicId = getQueryString("id");
    if(selectedPicId<11){
        selectedPicId = parseInt(selectedPicId)+1;
        selectedPic.src = "img/dataSource/shoeType"+selectedPicId+".png";
    }
    else{
        console.log()
        selectedPicId = parseInt(selectedPicId)%10;
        console.log(selectedPicId);
        selectedPic.src = "img/dataSource/shoeType"+selectedPicId+".png";
    }

var picTable = doc.getElementById("picTable"),
    col = 11,
    row = 3,
    counter = 1,
    largePic = doc.getElementById("largePic");
    for(var i = 0; i<row; i++){
        var tr = doc.createElement("tr");
        for(var j = 0; j<col; j++,counter++){
            var td = doc.createElement("td"),
                img = doc.createElement("img");
            img.src = "img/detailPics/style"+counter+".png";
            img.onclick = function () {
                largePic.src = this.src;
            }
            td.appendChild(img);
            tr.appendChild(td);
        }
        picTable.appendChild(tr);
    }
