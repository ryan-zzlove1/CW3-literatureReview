
$(document).ready(function() {
    setTimeout(function() {
        selectors.toggleSelector('keywords', 'classical-cnn');
        selectors.toggleSelector('keywords', 'enhanced-cnn');
        selectors.toggleSelector('keywords', 'transformer-based');
        
        page.updateShowPart();
    }, 500); 
});
