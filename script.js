let card1;
let card2;
let backgroundColor1;
let backgroundColor2;


// Cover cards if their colors are not the same
function coverAgain(card1, card2) {
    setTimeout(
        function(){
            card1.classList.remove('uncovered');
            card2.classList.remove('uncovered');
        },500);
};


// Uncover card and compare colors
function uncover(id) {
    if (!card1) {
        // Uncover first card and get golor
        card1 = document.getElementById(id);
        card1.classList.add('uncovered');
        backgroundColor1 = getComputedStyle(card1).getPropertyValue('background-color');
    } else {
        // Uncover second card and get color
        if (id !== card1.id) {
            card2 = document.getElementById(id);
            card2.classList.add('uncovered');
            backgroundColor2 = getComputedStyle(card2).getPropertyValue('background-color');
        };

        // Compare both colors
        if (backgroundColor1 == backgroundColor2) {
            } else {
                coverAgain(card1, card2);
            };

        // Clear memory
        card1 = undefined;
        card2 = undefined;
    };
};