
(function() {
 
    
    var dropdowns, 
        dropdownsArray, 
        dropdownsLink, 
        activedDrops, 
        activedDropsArray; 
    
    
    function init() {
      setDom();
      bind();
    }
    
    
    function setDom() {
      dropdowns = document.querySelectorAll('.dropdown'); 
      dropdownsArray = Array.prototype.slice.call(dropdowns, 0); 
    }
    
   
    function bind() {
      
      dropdownsArray.forEach(function(elem) {
          dropdownsLink = elem.querySelector('a[data-toggle="dropdown"]'); 
        dropdownsLink.addEventListener('click', showDropdown); 
        });
    }
    

    function showDropdown(event) {
      event.preventDefault();
      
      if (event.target.nextElementSibling.matches('.sub-nav')) { 
        
       
        activedDrops = document.querySelectorAll('.active'); 
        activedDropsArray = Array.prototype.slice.call(activedDrops, 0); 
        event.target.nextElementSibling.classList.toggle('active')
        
   
        activedDropsArray.forEach(function(elem) {
          if (elem.classList.contains('active')) {
            elem.classList.remove('active');
          }
        });
      }
    }
    
    return {
      init: init 
    }
  })().init(); 


  scrol=setInterval(function(){
    document.getElementById("scroll").scrollBy(1,0);
    }, 33);
    
    