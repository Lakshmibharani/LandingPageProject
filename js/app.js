/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const topmenu = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');
const activeclass = "your-active-class";
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function sectionList() {
	for (let item of sections) {
        let toplistitem = document.createElement('li');
        toplistitem.className.add= 'menu__link';
        toplistitem.dataset.nav = item.id;
        toplistitem.innerText = item.dataset.nav;
        toplistitem.addEventListener('click', function() {
            item.scrollIntoView({behavior: "smooth" })
            toplistitem.id = "nav-"+item.id;
        })
        topmenu.appendChild(toplistitem);
    };
};


  
// Add class 'active' to section when near top of viewport

function setActive() {
    window.addEventListener('scroll',function(event) {
        for (let i = 1; i <= sections.length; i++) {
            let section = document.getElementById(`section${i}`);
            const itemId= document.getElementById(`nav-section${i}`);
            
            if (section.getBoundingClientRect().top >= 0 &&
            section.getBoundingClientRect().left >= 0 &&
            section.getBoundingClientRect().bottom <=
              (window.innerHeight || document.documentElement.clientHeight) &&
            section.getBoundingClientRect().right <=
              (window.innerWidth || document.documentElement.clientWidth)) 
            {
            itemId.classList.add(activeclass);
            section.classList.add(activeclass);
    
             } else{
            itemId.classList.remove(activeclass);
            section.classList.remove(activeclass);
        }
        }

    
    });
};
// Scroll to anchor ID using scrollTO event
document.addEventListener("scroll", function() {
    setActive();
  });

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
sectionList();
// Scroll to section on link click

// Set sections as active
setActive();
