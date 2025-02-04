class Book {
    constructor(title, desc, pages, read){
        this.title = title;
        this.desc = desc;
        this.pages = pages;
        this.read = read;
    }
}




const cardContainerCollection = document.getElementsByClassName("book-cards")
const cardContainer = cardContainerCollection[0];
const addNewBook = document.getElementsByClassName("add_new_book")
const modalDialog = document.getElementsByClassName("modal")
const add_book_modal = document.getElementsByClassName("add-book-modal")








const book_1 = new Book("Book_1", "dsadjdsj sdajdsa kjd jdsak jdsa ask dsa kas jkdsadjk asjkd dsakj djadsjk asdkj asjk dasjkd", 250, true);
const book_2 = new Book("Book_1", "dsadjdsj sdajdsa kjd jdsak jdsa ask dsa kas jkdsadjk asjkd dsakj djadsjk asdkj asjk dasjkd", 250, true);
const book_3 = new Book("Book_1", "dsadjdsj sdajdsa kjd jdsak jdsa ask dsa kas jkdsadjk asjkd dsakj djadsjk asdkj asjk dasjkd", 250, false);
const book_4 = new Book("Book_1", "dsadjdsj sdajdsa kjd jdsak jdsa ask dsa kas jkdsadjk asjkd dsakj djadsjk asdkj asjk dasjkd", 250, true);
const book_5 = new Book("Book_1", "dsadjdsj sdajdsa kjd jdsak jdsa ask dsa kas jkdsadjk asjkd dsakj djadsjk asdkj asjk dasjkd", 250, false);
const book_6 = new Book("Book_1", "dsadjdsj sdajdsa kjd jdsak jdsa ask dsa kas jkdsadjk asjkd dsakj djadsjk asdkj asjk dasjkd", 250, true);


const book_arr = [book_1, book_2, book_3, book_4, book_5, book_6]



function addBookCard(bookObj){
    const div_card = document.createElement("div");
    div_card.classList.add("book-card")

    if (bookObj.read === true) {
        div_card.style.border = "2px solid green";
    }
    else {
        div_card.style.border = "2px solid red";
    }


    const header = document.createElement("div");
    header.classList.add("header")
    const header_label = document.createElement("label");
    header_label.innerHTML = bookObj.title;
    header.appendChild(header_label);

    /** made divs and labels */
    const information_section = document.createElement("div");
    information_section.classList.add("information-section")
    const book_info = document.createElement("label")
    book_info.innerHTML = "Book-Info"
    const divider = document.createElement("div")
    divider.classList.add("divider")
    const book_desc = document.createElement("p")
    book_desc.innerHTML = bookObj.desc

    /** adding to information section */
    information_section.appendChild(book_info);
    information_section.appendChild(divider)
    information_section.appendChild(book_desc)
    information_section.appendChild(divider)


    /** footer */

    const footer_card = document.createElement("div")
    footer_card.classList.add("footer-card")
    const footer_div = document.createElement("div");
    const label_info = document.createElement("label");
    label_info.classList.add("page-header");
    label_info.innerHTML = "Pages: ";
    const pages = document.createElement("label");
    pages.innerHTML = bookObj.pages;
    footer_div.appendChild(label_info);
    footer_div.appendChild(pages);

    /** action div */

    const action_div = document.createElement("div");
    action_div.classList.add("action")
    const button_action = document.createElement("button")
    button_action.innerHTML = "Delete!"
    button_action.classList.add("delete_button")
    action_div.appendChild(button_action);
    footer_card.appendChild(footer_div);
    footer_card.appendChild(action_div);
    div_card.appendChild(header);
    div_card.appendChild(information_section)
    div_card.appendChild(footer_card)
    cardContainer.appendChild(div_card)
    button_action.addEventListener("click", function () {
        cardContainer.removeChild(div_card)
    })

    div_card.addEventListener("click", function() {
        div_card.style.border = bookObj.read ? "2px solid green" : "2px solid red";
        bookObj.read = !bookObj.read;
    })

}

book_arr.forEach((e) => {
   addBookCard(e);

})

addNewBook[0].addEventListener("click", () => {
   
    modalDialog[0].showModal();
})


add_book_modal[0].addEventListener("click", () => {
    book_title = document.getElementById("book-title");
    book_desc = document.getElementById("book-description");
    book_pages = document.getElementById("book-pages");
    book_read = document.getElementById("book-read");
    const newBook = book_read == 1 ? new Book(book_title.value, book_desc.value, book_pages.value, true) :new Book(book_title.value, book_desc.value, book_pages.value, false)
    addBookCard(newBook);

})


document.querySelectorAll('dialog').forEach(element => 
    element.addEventListener('mousedown', 
        event => (event.target === event.currentTarget) && event.currentTarget.close()
    )
)















