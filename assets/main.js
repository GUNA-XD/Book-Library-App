
 const formEl = document.querySelector('form')

 const lib = new Library()

 formEl.addEventListener("submit",(e)=>{

    e.preventDefault()

  const booktitle  =   document.getElementById('booktitle').value.trim()
  const bookauthor =   document.getElementById('bookauthor').value.trim()

  if(booktitle && bookauthor){

    const addedBook = new Book(booktitle,bookauthor)

      //added book library class
  
      lib.addbook(addedBook)

      renderlibrary()

      //remove the enterde book information

      document.getElementById('booktitle').value = ''
      document.getElementById('bookauthor').value = ''
  }

 })

 function markbookasRead(index){

    lib.getBooks()[index].markasRead()
    renderlibrary()
 }

 function removeBook(index){
    lib.removeBook(index)
    renderlibrary()
 }

 function renderlibrary(){
   const renderlibraryEL =  document.querySelector('#renderedlibrary')

  const bookcountEl = document.querySelector('#bookcount')

  bookcountEl.textContent = lib.bookcount()

//   reseting prevous values
  renderlibraryEL.innerHTML = ''

  lib.getBooks().forEach((book,index) =>{

    
   renderlibraryEL.innerHTML +=  `
   
   <li class="p-3 bg-orange-100 rounded flex justify-between">

         <div  class="${book.isRead() ? 'line-through' : ''
                
             }" > ${book.gettitle()} by ${book.getauthor()} </div>

         <div>
             <button class="px-2 py-1 bg-green-600 text-sm rounded text-white  " onclick="markbookasRead(${index})"   >Mark as Read</button>
             <button class="px-2 py-1 bg-red-600 text-sm rounded text-white"  onclick="removeBook(${index})"  >Remove</button>
        </div>
    </li>         
   `

 })

 }
    