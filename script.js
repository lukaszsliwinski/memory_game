function uncover(id) {
    let card = document.getElementById(id)
    if (card.classList.contains('uncovered')) {
        console.log('uncovered');
    } else {
        card.classList.add('uncovered');
    };
};