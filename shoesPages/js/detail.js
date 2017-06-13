var doc = document,
    detailDataSource = [];

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return null;
}

var selectedPic = doc.getElementById("selectedPic"),
    selectedPicId = getQueryString("id");
    // if(selectedPicId<11){
    //     selectedPicId = parseInt(selectedPicId)+1;
    //     selectedPic.src = "img/dataSource/shoeType"+selectedPicId+".png";
    // }
    // else{
    //     selectedPicId = parseInt(selectedPicId)%10;
    //     //console.log(selectedPicId);
    //     selectedPic.src = "img/dataSource/shoeType"+selectedPicId+".png";
    // }
$.ajax({
    type:"get",
    url: "http://118.89.183.92:8080/zappos/Servlet?id="+selectedPicId,
    dataType: "json",
    jsonp: "callback",
    success: function (data) {
        detailDataSource = data;
        insertDetailPics();
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        alert(errorThrown);
    }
});
function insertDetailPics() {
    selectedPic.src = "http://"+detailDataSource.parent;

    var picTable = doc.getElementById("picTable"),
        picNum = detailDataSource.child.length,
        col = 11,
        row = 3,
        counter = 0,
        largePic = doc.getElementById("largePic");
    largePic.src = "http://"+detailDataSource.child[0];
    for(var i = 0; i<row; i++){
        var tr = doc.createElement("tr");
        for(var j = 0; j<col&counter<picNum; j++,counter++){
            var td = doc.createElement("td"),
                img = doc.createElement("img");
            img.src = "http://"+detailDataSource.child[counter];
            img.onclick = function () {
                largePic.src = this.src;
            }
            td.appendChild(img);
            tr.appendChild(td);
        }
        picTable.appendChild(tr);
    }
}
