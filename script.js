// web variables
const navbar = document.querySelector('navbar');
const mainBody = document.querySelector('m-body');
const usBtn = document.getElementById('us-currency');
const euroBtn = document.getElementById('euro-currency');
const poundBtn = document.getElementById('pound-currency');

// table contents
const page1 = document.getElementById('r1-c1');
const main1 = document.getElementById('r1-c2');

const page2 = document.getElementById('r2-c1');
const main2 = document.getElementById('r2-c2');

const page3 = document.getElementById('r3-c1');
const main3 = document.getElementById('r3-c2');

const page4 = document.getElementById('r4-c1');
const main4 = document.getElementById('r4-c2');

// event listener that blurs the content when the mouse hovers over the navbar
navbar.addEventListener('mouseenter', () => {
      mainBody.style.filter = 'blur(5px)';
});

navbar.addEventListener('mouseleave', () => {
      mainBody.style.filter = 'blur(0)';
});

// usd currency content
const usdPrices = () => {

      page1.textContent = 'USD $90';
      main1.textContent = 'USD $25';

      page2.textContent = 'USD $350';
      main2.textContent = 'USD $90'

      page3.textContent = 'USD $530';
      main3.textContent = 'USD $210';

      page4.textContent = 'USD $800';
      main4.textContent = 'USD $350';

};

const euroPrices = () => {

      page1.textContent = 'EU €83';
      main1.textContent = 'EU €23';

      page2.textContent = 'EU €321';
      main2.textContent = 'EU €83';

      page3.textContent = 'EU €487';
      main3.textContent = 'EU €193';

      page4.textContent = 'EU €734';
      main4.textContent = 'EU €321';

}

const poundPrices = () => {

      page1.textContent = 'GBP £71';
      main1.textContent = 'GBP £20';

      page2.textContent = 'GBP £274';
      main2.textContent = 'GBP £71';

      page3.textContent = 'GBP £416';
      main3.textContent = 'GBP £165';

      page4.textContent = 'GBP £627';
      main4.textContent = 'GBP £274';

}

// event listener for any device underneath 768px
if (window.innerWidth <= 768) {

      navbar.addEventListener('mouseenter', () => {
            mainBody.style.filter = 'blur(0)';
      });

      navbar.addEventListener('mouseleave', () => {
            mainBody.style.filter = 'blur(0)';
      });

}