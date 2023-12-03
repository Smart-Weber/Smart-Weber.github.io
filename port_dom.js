// DOM vars.
const accordionParents = [document.getElementById('at-1'), document.getElementById('at-2')];
const accordionChildren = [document.getElementById('ac-1'), document.getElementById('ac-2')];
const accordionSymbols = [document.getElementById('as-1'), document.getElementById('as-2')];

// DOM var event listeners.
accordionParents.forEach((accordionParent, index) => {
      accordionParent.addEventListener('click', function() {
            if (accordionChildren[index].className == 'accordion-content' && accordionSymbols[index].textContent == '+') {
                  accordionChildren[index].classList.add('content-active');
                  accordionSymbols[index].textContent = '-';
            } else {
                  accordionChildren[index].classList.remove('content-active');
                  accordionSymbols[index].textContent = '+';
            }
      });
});