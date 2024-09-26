let bars = document.querySelector(".bars");
let responsive = document.querySelector(".responsive-nav");
bars.addEventListener("click", () => responsive.classList.toggle("active"));

const renderCards = (data, container, templateFn) => container.innerHTML = data.map(templateFn).join("");

const animContainer = document.querySelector(".animCards");
const animcardsData = [
  {
    img: "https://preview.colorlib.com/theme/aroma/img/home/hero-slide1.png",
    h1: "Wireless Headphone",
    desc: "Accessories item",
  },
  {
    img: "https://preview.colorlib.com/theme/aroma/img/home/hero-slide2.png",
    h1: "Wireless Headphone",
    desc: "Accessories item",
  },
  {
    img: "https://preview.colorlib.com/theme/aroma/img/home/hero-slide3.png",
    h1: "Wireless Headphone",
    desc: "Accessories item",
  }
];

const animCards = (item) => {
  return `
   <div class="animCard relative">
      <img src="${item.img}" alt=""/>
      <div class="hidden-box absolute transition opacity-0">
        <a href="#">
          <div>
            <h2>${item.h1}</h2>
            <p>${item.desc}</p>
          </div>
        </a>
      </div>
    </div>`;
};

  renderCards(animcardsData, animContainer, animCards);

let latestCards = document.querySelector(".latestCards");
let lCardsData =[
    {
      img: "https://preview.colorlib.com/theme/aroma/img/blog/blog1.png",
      heading: "The Richland Center Shopping News and Weekly shooper",
      desc: "Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.",
    },
    {
      img: "https://preview.colorlib.com/theme/aroma/img/blog/blog2.png",
      heading: "The Shopping News also offers top-quality printing services",
      desc: "Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.",
    },
    {
      img: "https://preview.colorlib.com/theme/aroma/img/blog/blog3.png",
      heading:
        "Proffessional design staff and efficient equiment you'll find we offer",
      desc: "Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.",
    },
  ];

const latestCard = (item) => {
  return `
    <div class="latest-card vStack cursor-pointer">
      <img src="${item.img}" alt="">
      <div class="hStack">
        <p class="gray">By Admin</p>
        <p class="gray">
          <i class="fa-solid fa-comment-dots"></i>
          2 Comments
        </p>
      </div>
      <a href="">${item.heading}</a>
      <p class="gray">${item.desc}</p>
      <a href="" class="arrow-btn">
        Read More
        <i class="fa-solid fa-arrow-right transition"></i>
      </a>
    </div>`;
};

renderCards(lCardsData, latestCards, latestCard);


let card_container = document.querySelector("#cardList1")
let card_container2 = document.querySelector("#cardList2")

let tCards = [
  {
    img:"https://preview.colorlib.com/theme/aroma/img/product/product1.png",
    head1:"Accessories",
    head2:"Quartz Belt Watch",
    head3:"$150.00"
  },
  {
    img:"https://preview.colorlib.com/theme/aroma/img/product/product2.png",
    head1:"Beauty",
    head2:"Women Freshwash",
    head3:"$150.00"
  },
  {
    img:"https://preview.colorlib.com/theme/aroma/img/product/product3.png",
    head1:"Decor",
    head2:"Room Flash Light",
    head3:"$150.00"
  },
  {
    img:"https://preview.colorlib.com/theme/aroma/img/product/product4.png",
    head1:"Decor",
    head2:"Room Flash Light",
    head3:"$150.00"
  },
  {
    img:"https://preview.colorlib.com/theme/aroma/img/product/product5.png",
    head1:"Accessories",
    head2:"Man Office Bag",
    head3:"$150.00"
  },
  {
    img:"https://preview.colorlib.com/theme/aroma/img/product/product6.png",
    head1:"Kids Toy",
    head2:"Charging Car",
    head3:"$150.00"
  },
  {
    img:"https://preview.colorlib.com/theme/aroma/img/product/product7.png",
    head1:"Accessories",
    head2:"Blutooth Speaker",
    head3:"$150.00"
  },
  {
    img:"https://preview.colorlib.com/theme/aroma/img/product/product8.png",
    head1:"Kids Toy",
    head2:"Charging Car",
    head3:"$150.00"
  },
]
const tCards2 = tCards.filter((item,idx)=>idx<4);
const productData = (item) =>{
  return ` <div class="bx">
  <div class="img-Box">
  <img src="${item.img}" alt="">
  <div class="tCard-icons">
  <i class="fa-solid fa-magnifying-glass"></i>
  <i class="fa-solid fa-cart-shopping"></i>
  <i class="fa-regular fa-heart"></i>
  </div>
  </div>
  <div class="Tcard-contain">
  <h5 class="gray">${item.head1}</h5>
  <h3 class="center-heading">${item.head2}</h3>
  <h4 class="gray">${item.head3}</h4>
  </div>
  </div>`
}


renderCards(tCards,card_container,productData);
renderCards(tCards2,card_container2,productData);









