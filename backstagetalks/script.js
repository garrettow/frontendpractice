const issuefive = document.getElementById("issue5");
const issuefour = document.getElementById("issue4");
const issuethree = document.getElementById("issue3");
const issuetwo = document.getElementById("issue2");
const issueone = document.getElementById("issue1");

const elements = [issuefive, issuefour, issuethree, issuetwo, issueone];

const colors = ["#00c1b5", "#ffbe00", "#e30512", "#ff651a", "#1d3fbb"]

for(const element in elements) {
    console.log(elements[element].offsetTop);
}

window.debouce = false;

let currentBookNumber = 5;

window.location = `#issue${currentBookNumber}`;
        
const maxBooks = 5;


function checkBackgroundColor() {
    for(const element in elements) {
        const height = elements[element].clientHeight;
        const offsetTop = elements[element].offsetTop;

        if(window.scrollY >= offsetTop - (height / 3) && window.scrollY < offsetTop + (height / 3 * 2)) {
            console.log(offsetTop);
            document.body.style.backgroundColor = colors[element];
        }
    } 
}

checkBackgroundColor();

window.addEventListener('scroll', () => {
    checkBackgroundColor();
})

window.addEventListener('wheel', (e) => {
    if(window.debouce) return;
    window.debouce = true;
   
    console.log("scroll called", window.debouce);

   if(e.deltaY > 0) { //scroll down
        console.log("Does it make it her?")
        if(currentBookNumber === 1) {
                
            return
        }
        
        window.debouce = true;
        currentBookNumber -= 1;

        window.location = `#issue${currentBookNumber}`;
        
   } else if (e.deltaY < 0) { //scroll up 
    console.log("Does it make it her?")
        if(currentBookNumber === 5) {
            window.debouce = false;
            return
        };
        window.debouce = true;

        currentBookNumber += 1;

        window.location = `#issue${currentBookNumber}`;
    }

    console.log(window.scrollY); 

    setTimeout(() => window.debouce = false, 700);
});
