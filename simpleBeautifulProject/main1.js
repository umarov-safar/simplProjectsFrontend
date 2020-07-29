var btnDelete = document.getElementsByClassName("delete");
var addBtn = document.querySelector('#add-book');
var inputAdd = document.querySelector("#inputAdd");
var searchInput = document.forms[0].elements[0];
const nameBooke = document.querySelectorAll("li .name");
const list = document.querySelector("#book-list ul");



list.addEventListener("click", (e) => {
    if(e.target.classList == "delete"){
        const li = e.target.parentElement;
        li.classList = 'test'
        li.addEventListener("transitionend", () => {
            li.parentElement.removeChild(li)
        })
       
    }
})



//Listner for search input

searchInput.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName("li");
   
    Array.from(books).forEach(function(book) {
        if(term != "") {
        const title = book.firstElementChild.textContent;

        if(title.toLowerCase().indexOf(term) != -1) {
            book.style.display = ''
        } else {
            book.style.display = 'none'
        }
    } else {
        book.style.display = ''
    }
   
    })
    
})

// Add Listner to add Button
addBtn.addEventListener("click", addFunction);


//  add listner for delete item
function deleteItem(e){
    var pro = confirm("are you really want to delete this book?");
    if(pro){
    const parents = e.target.parentElement;
    parents.parentNode.removeChild(parents);
    } 
}

// add listner add new item
function addFunction() {
    if (inputAdd.value != "" && inputAdd.value.length >= 3) {

        var newLi = document.createElement("li");
        var spanName = document.createElement("span");
        spanName.classList.add("name");
        spanName.textContent = inputAdd.value;
        var spanDelete = document.createElement("span")
        spanDelete.classList.add("delete");
        spanDelete.textContent = "Удалить"
       
        //Add name Sapan
        newLi.appendChild(spanName);
        newLi.appendChild(spanDelete);

        document.querySelector("ul").appendChild(newLi);
        inputAdd.value = ""
} else {
    var showMessege = document.getElementsByClassName("show-messege")[0];
    showMessege.innerHTML = "Please fill input"
    setTimeout(()=>{
       showMessege.innerHTML = ""
   }, 3000)
}
}




var a = document.getElementsByName("check")[0]
a.addEventListener("change", e => {
    if(e.target.checked) {
        list.style.transition = '3s'
        list.style.display = 'none'
    } else {
        list.style.display = ''
    }
})