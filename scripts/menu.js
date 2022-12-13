function openMenu(n) {
    var sections = document.getElementsByClassName('section');
    console.log(sections)
    var actualOpened = document.getElementsByClassName('section-opened')
    console.log(actualOpened)
    actualOpened[0].classList.remove("section-opened")
    sections[n].classList.toggle("section-opened")
}
 