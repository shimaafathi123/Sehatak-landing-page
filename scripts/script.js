const elements = document.querySelectorAll('.element');

elements.forEach((element) => {
    element.addEventListener('click', function() {
        elements.forEach((el) => {
            el.style.color = '';   
            el.style.fontWeight = '';  
   
        });
        this.style.color = '#D2E0FB';  
        this.style.fontWeight = 'bold';  
    });
});
