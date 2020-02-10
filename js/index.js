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
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Task 1
const cta = document.getElementById('cta-img');
cta.setAttribute('src', siteContent['cta']['img-src']);

const middle = document.getElementById('middle-img');
middle.setAttribute('src', siteContent['main-content']['middle-img-src']);

// Task 2
const anchors = Array.from(document.querySelectorAll('a'));
let keyName = 'nav-item-';
let counter = 1;
anchors.forEach(anchor => {
  anchor.textContent = siteContent['nav'][keyName + counter++];
});

// const keys = ['nav-item-1', 'nav-item-2', 'nav-item-3', 'nav-item-4', 'nav-item-5', 'nav-item-6'];
// const anchors = Array.from(document.querySelectorAll('a'));
// for (let i = 0; i < keys.length; i++) {
//   anchors[i].textContent = siteContent['nav'][keys[i]];
// }

const h1Tag = document.querySelector('h1');
h1Tag.textContent = siteContent.cta.h1;

const btn = document.querySelector('button');
btn.textContent = siteContent['cta']['button'];

const h4Keys = ['features-h4', 'about-h4', 'services-h4', 'product-h4', 'vision-h4', 'contact-h4'];
const h4s = Array.from(document.querySelectorAll('h4'));
for (let i = 0; i < h4Keys.length; i++) {
  if (i < 5) {
    h4s[i].textContent = siteContent['main-content'][h4Keys[i]];
  } else {
    h4s[i].textContent = siteContent['contact'][h4Keys[i]];
  }
}

const pKeys = ['features-content', 'about-content', 'services-content', 'product-content', 'vision-content', 'address', 'phone', 'email', 'copyright'];
const pTags = Array.from(document.querySelectorAll('p'));
for (let i =0; i < pKeys.length; i++) {
  if (i < 5) {
    pTags[i].textContent = siteContent['main-content'][pKeys[i]];
  } else if (i < 8) {
    pTags[i].textContent = siteContent['contact'][pKeys[i]];
  } else {
    pTags[i].textContent = siteContent['footer'][pKeys[i]];
  }
}

// Task 3
let nav = document.querySelector('nav');

let newA = document.createElement('a');
newA.setAttribute('src', '#');
newA.textContent = 'New A 1';
nav.prepend(newA);

newA = document.createElement('a');
newA.setAttribute('src', '#');
newA.textContent = 'New A 2';
nav.append(newA);

const anchors2 = Array.from(document.querySelectorAll('a'));
anchors2.forEach(anchor => {
  anchor.style.color = 'green';
});

// Stretch

