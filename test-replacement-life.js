(function() {
    // Find the element to replace using the ID selector
    var oldElement = document.getElementById('widget-insurance-quote-btn');
    
    if (oldElement) {
        // Create the new anchor element
        var newElement = document.createElement('a');
        newElement.href = "https://online.aalife.co.nz/directlife/pub/aalife/ncp/index/";
        newElement.className = "btn btn-default btn-insurance widget-insurance-quote-component__btn widget-insurance-quote-component__btn-js";
        newElement.id = "widget-insurance-quote-btn";
        newElement.style.borderRadius = "3px";
        newElement.textContent = "Get a quote";
        
        // Replace the old element with the new one
        oldElement.parentNode.replaceChild(newElement, oldElement);
    } else {
        console.error('Element with ID "widget-insurance-quote-btn" not found');
    }
})();