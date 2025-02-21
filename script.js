
    document.addEventListener('DOMContentLoaded', () => {
        const dropdowns = document.querySelectorAll('.dropdown');

        dropdowns.forEach(dropdown => {
            const link = dropdown.querySelector('a');
            const dropdownItem = dropdown.querySelector('.dropdown-item');

            dropdownItem.style.display = 'none'; 

            link.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent default link action

                // Hide all other dropdowns
                dropdowns.forEach(otherDropdown => {
                    if (otherDropdown !== dropdown) {
                        const otherDropdownItem = otherDropdown.querySelector('.dropdown-item');
                        if (otherDropdownItem) {
                            otherDropdownItem.style.display = 'none';
                        }
                    }
                });

                // Toggle visibility of the current dropdown
                if (dropdownItem.style.display === 'none') {
                    dropdownItem.style.display = 'block';
                } else {
                    dropdownItem.style.display = 'none';
                }
            });
        });
    });








    //for nav hide and show


    let nav = document.getElementById('nav');
    let bar = document.getElementById('bar');

    bar.addEventListener('click',function(){
       if(nav.classList.contains('md:hidden')){
        nav.classList.remove('md:hidden')
       }
       else{
        nav.classList.add('md:hidden')
       }
    })

    









    //for accroding ........................

 
document.addEventListener('DOMContentLoaded', function(){

    let accordions = document.querySelectorAll('.according-item h2');
     
    accordions.forEach((accordion)=>{
        accordion.addEventListener('click',function(){
            let parentItem = accordion.parentElement;
            let para = parentItem.querySelector('p');

            parentItem.classList.toggle('open');
            para.classList.remove('hidden');
        });

    });
});







// for slider.....................
document.addEventListener("DOMContentLoaded", function() {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const slider = document.querySelector('.slider');
    const sliderItem = document.querySelector('.slider-item');

    
            // Get the width of one slider item
            const sliderItemWidth = sliderItem.offsetWidth + parseInt(window.getComputedStyle(sliderItem).marginRight);

    // Scroll to the left (previous item)
    prevButton.addEventListener('click', function() {
        slider.scrollBy({
            left: -(sliderItemWidth + 80),  // Scroll one full slider width to the left
            behavior: 'smooth'          // Smooth scrolling
        });
    });

    // Scroll to the right (next item)
    nextButton.addEventListener('click', function() {
        slider.scrollBy({
            left: (sliderItemWidth + 80) ,   // Scroll one full slider width to the right
            behavior: 'smooth'          // Smooth scrolling
        });
    });
});









//...........for seach icon.........

let searchIcon = document.getElementById('search-icon').addEventListener('click', function(){
     console.log('click')
    let searchInput = document.getElementById('search-input');
    let nav = document.getElementById('nav');
    
    if(searchInput.classList.contains('hidden')){
          searchInput.classList.add('flex');
          searchInput.classList.remove('hidden');
          nav.classList.add('hidden');
    }
    else{
        searchInput.classList.add('hidden');
        nav.classList.remove('hidden');
        
    }
})