var detail = document.getElementById("detail")
var add = document.getElementById("add")
var remove = document.getElementById("remove")

add.onclick = function(){
    var newField = document.createElement("input")
    var input_tags = detail.getElementsByTagName("input")
    newField.setAttribute("type", "text")
    newField.setAttribute("name", "detail[]")
    newField.setAttribute("class", "detail")
    newField.setAttribute("size", 50)
    newField.setAttribute("placeholder", "Other Detail")
    detail.appendChild(newField)
    if(input_tags.length >= 2){
        document.getElementById("remove").style.visibility="visible"
    }
}

remove.onclick = function(){
    var input_tags = detail.getElementsByTagName("input")
    if(input_tags.length >= 2){
        detail.removeChild(input_tags[(input_tags.length) -1])
        if(input_tags.length < 2){
            document.getElementById("remove").style.visibility="hidden"
        }
    }
}