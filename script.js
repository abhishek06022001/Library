

const myLibrary = [];
function Book(title, pages,read) {
  // the constructor...
  this.book_name = title;
  this.pages= pages;
  this.read = read;

}
Book.prototype.toggleRead = function()
{
    this.read = !this.read;
 
}
let newBookbtn = document.querySelector("#new-book-btn");
newBookbtn.addEventListener('click',function(event){
    // alert("hey");
    toggleModal();
})
function addBookToLibrary() {
  // do stuff here
  toggleModal();
  let Title= document.querySelector("#title").value;
  let Pages= document.querySelector("#pages").value;
  let Read= document.querySelector("#read").checked;
  let newBook = new Book(Title,Pages,Read);
     myLibrary.push(newBook);
     render();
  console.log(myLibrary);
}
function toggleModal()
{
    
    let modal = document.querySelector("#new-book-form");
    if(modal.style.display === "none")
    {
        modal.style.display= "block";
    }else{
        modal.style.display = "none";
    }
}
document.querySelector("#new-book-form").addEventListener('submit',function(event){
    event.preventDefault();
    // console.log(event);
    alert("submit pressed");

    addBookToLibrary();
})
function removeBtn(index)
{
    myLibrary.splice(index,1);
    render();
}

function render()

{
    var show = document.querySelector(".show");
    while(show.firstChild)
    {
        show.removeChild(show.firstChild);
    }
      for( let i = 0 ; i < myLibrary.length ; i ++)
      {

        let e = myLibrary[i];
        const card = document.createElement("div");
         card.setAttribute("class", "card");
        card.innerHTML= `
        <div class = "card-header">
        <h5 class ="card-title">Title:${e.book_name}</h5>
        </div>
        <div class "card-body">
        <h3 class = "card-body">Pages :${e.pages}</h3>         
            <button id ="red" class = "read-status" onclick = "toggleread(${i})" >  ${e.read ? "Read " : "Not yet Read"} </button>
            <button class="remove-btn"  onclick = "removeBtn(${i})"> Delete </button>
           
        </div>

        ` 
        show.appendChild(card);
      }

   
}

function toggleread(index)
{
 myLibrary[index].toggleRead();

 render();
    
}

document.addEventListener("DOMContentLoaded",function(){
    render();
})