let list =[];



function addItem() {


let val = {

 firstItem: document.querySelector("#item_1").value,
 secondItem: document.querySelector("#item_2").value,
 thirdItem: document.querySelector("#item_3").value,
 fourItem: document.querySelector("#item_4").value,
 
};
 

console.log(val);
list.push(val);

 document.querySelector("#item_1").value = " "
 document.querySelector("#item_2").value = " "
 document.querySelector("#item_3").value = ""
 document.querySelector("#item_4").value = " "

}

function dispList() {
  
    if(deleter = true) {
        document.querySelector("#class_list").innerHTML = " "
    }

  for(student of list) {

    document.querySelector("#class_list").innerHTML += "<ul>";

    document.querySelector("#class_list").innerHTML += '<li> Name : '+student.firstItem+'</li>'
    document.querySelector("#class_list").innerHTML += '<li> class : '+student.secondItem+'</li>'
    document.querySelector("#class_list").innerHTML += '<li> grade : '+student.thirdItem+'</li>'
    document.querySelector("#class_list").innerHTML += '<li> car type  :'+student.fourItem+'</li>'
  
    document.querySelector("#class_list").innerHTML += "</ul>";

    let deleter = true
}



}

