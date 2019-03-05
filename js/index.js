const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Nav
//Class selector
const navClass = document.querySelectorAll('nav')
//Anchor selector
const navText = document.querySelectorAll('a');

//change all nav text to green
for (let i = 0; i < navText.length; i++) {
  navText[i].style.color = "green";
}
/* or change all nav text to green this way
navText.forEach ((currentValue) => currentValue.style.color = 'green')
*/

  //Item content
  navText[0].textContent = siteContent['nav']['nav-item-1'];
  navText[1].textContent = siteContent['nav']['nav-item-2'];
  navText[2].textContent = siteContent['nav']['nav-item-3'];
  navText[3].textContent = siteContent['nav']['nav-item-4'];
  navText[4].textContent = siteContent['nav']['nav-item-5'];
  navText[5].textContent = siteContent['nav']['nav-item-6'];

//create two new elements
let firstAnchor = document.createElement('a');
firstAnchor.href = '#';
firstAnchor.textContent = 'First';
firstAnchor.style.color = 'green';

let lastAnchor = document.createElement('a')
lastAnchor.href = '#';
lastAnchor.textContent = 'Last';
lastAnchor.style.color = 'green';

//append new elements

navText.appendChild(firstAnchor);
navText.prepend(firstAnchor);

//Cta
//Class selector
const ctaClass = document.querySelectorAll('.cta')
console.log("Cta: ", ctaClass);

  //H1
  const ctaH1 = document.querySelector('h1');
  ctaH1.textContent = siteContent['cta']['h1'];
  console.log(ctaH1);

  //Button
  const ctaButton = document.querySelector('button');
  ctaButton.textContent = siteContent['cta']['button'];
  console.log(ctaButton);

  //Img
  const ctaImg = document.querySelector("#cta-img");
  ctaImg.src= siteContent["cta"]["img-src"];
  console.log(ctaImg);

//Main-content 
//Class selector
const mainClass = document.querySelectorAll('.main-content')
//Heading selector
const mainHeading = document.querySelectorAll('.main-content h4');
//Content selector
const mainParagraphs= document.querySelectorAll('.main-content p');
//Image selector
const middleImg = document.querySelector('#middle-img');

  //Heading
  mainHeading[0].textContent = siteContent['main-content']['features-h4'];
  mainHeading[1].textContent = siteContent['main-content']['about-h4'];
  mainHeading[2].textContent = siteContent['main-content']['services-h4'];
  mainHeading[3].textContent = siteContent['main-content']['product-h4'];
  mainHeading[4].textContent = siteContent['main-content']['vision-h4'];
  console.log("Main Content Headings: ", mainHeading);

  //Content
  mainParagraphs[0].textContent = siteContent['main-content']['features-content'];
  mainParagraphs[1].textContent = siteContent['main-content']['about-content'];
  mainParagraphs[2].textContent = siteContent['main-content']['services-content'];
  mainParagraphs[3].textContent = siteContent['main-content']['product-content'];
  mainParagraphs[4].textContent = siteContent['main-content']['vision-content'];
  console.log("Main Content P: ", mainParagraphs);

  //Img
  middleImg.src = siteContent["main-content"]["middle-img-src"];
  console.log(middleImg);

//Contact
//Class selector
const contactClass = document.querySelectorAll('.contact')
console.log("Contact: ", contactClass);
//Heading selector
const contactH1 = document.querySelector('.contact h4');
//Content selector
const contactParagraphs = document.querySelectorAll('.contact p')

  //Heading
  contactH1.textContent = siteContent['contact']['contact-h4'];

  //Content
  contactParagraphs[0].textContent = siteContent['contact']['address']
  contactParagraphs[1].textContent = siteContent['contact']['phone']
  contactParagraphs[2].textContent = siteContent['contact']['email']

//Footer
//Content selector
const footerParagraphs = document.querySelector('footer p')

  //Content
  footerParagraphs.textContent = siteContent['footer']['copyright']






