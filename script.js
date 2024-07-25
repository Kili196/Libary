const card_container = document.getElementsByClassName("book-cards")


function Book(title, desc, pages){
    this.title = title;
    this.desc = desc;
    this.pages = pages; 
}


const book_1 = new Book("Book_1", "dsadjdsj sdajdsa kjd jdsak jdsa ask dsa kas jkdsadjk asjkd dsakj djadsjk asdkj asjk dasjkd", 250);
const book_2 = new Book("Book_1", "dsadjdsj sdajdsa kjd jdsak jdsa ask dsa kas jkdsadjk asjkd dsakj djadsjk asdkj asjk dasjkd", 250);
const book_3 = new Book("Book_1", "dsadjdsj sdajdsa kjd jdsak jdsa ask dsa kas jkdsadjk asjkd dsakj djadsjk asdkj asjk dasjkd", 250);
const book_4 = new Book("Book_1", "dsadjdsj sdajdsa kjd jdsak jdsa ask dsa kas jkdsadjk asjkd dsakj djadsjk asdkj asjk dasjkd", 250);
const book_5 = new Book("Book_1", "dsadjdsj sdajdsa kjd jdsak jdsa ask dsa kas jkdsadjk asjkd dsakj djadsjk asdkj asjk dasjkd", 250);
const book_6 = new Book("Book_1", "dsadjdsj sdajdsa kjd jdsak jdsa ask dsa kas jkdsadjk asjkd dsakj djadsjk asdkj asjk dasjkd", 250);


const book_arr = [book_1, book_2, book_3, book_4, book_5, book_6]

book_arr.forEach((e) => {
    const div_card = document.createElement("div");
    div_card.classList.add("book-card")
  
    const header = document.createElement("div");
    const header_label = document.createElement("label");
    header_label.innerHTML = e.title;
    header.appendChild(header_label);

    /** made divs and labels */
    const information_section = document.createElement("div");
    information_section.classList.add("information-section")
    const book_info = document.createElement("label")
    book_info.innerHTML = "Book-Info"
    const divider = document.createElement("div")
    divider.classList.add("divider")
    const book_desc = document.createElement("p")
    book_desc.innerHTML = e.desc

    /** adding to information section */
    information_section.appendChild(book_info);
    information_section.appendChild(divider)
    information_section.appendChild(book_desc)
    information_section.appendChild(divider)
    
  
})

