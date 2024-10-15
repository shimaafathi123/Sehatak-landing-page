const elements = document.querySelectorAll('.element');

elements.forEach((element) => {
    element.addEventListener('click', function() {
        elements.forEach((el) => {
            el.style.color = '';   
            el.style.fontWeight = '';  
            el.style.opacity='';
   
        });
        this.style.color = 'rgb(50, 98, 174)';  
        this.style.fontWeight = 'bold';  
        this.style.opacity='1';
    });
});
