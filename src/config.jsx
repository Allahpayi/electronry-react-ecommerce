const visa = require("./assets/images/bank/visa.png");
const paypal = require("./assets/images/bank/paypal.png");
const western = require("./assets/images/bank/western.png");
const master = require("./assets/images/bank/master.png");
const discover = require("./assets/images/bank/discover.png");
const circus = require("./assets/images/bank/circus.png");
const american = require("./assets/images/bank/american.png");

module.exports = {
  navLinks: [
    {
      name: "home",
      children: [],
      icon: "",
      url: "/",
    },
    {
      name: "products",
      children: [],
      icon: "",
      url: "/products",
    },
    {
      name: "categories",
      children: [
        {
          name: "Accessories & Supplies",
          children: [],
          icon: "",
          url: "/Women",
        },
        {
          name: "Camera & Photo",
          children: [],
          icon: "",
          url: "/Women",
        },
        {
          name: "Car & Vehicle Electronics",
          children: [],
          icon: "",
          url: "/Women",
        },
        {
          name: "Cell Phones & Accessories",
          children: [],
          icon: "",
          url: "/Women",
        },
        {
          name: "Computers & Accessories",
          children: [],
          icon: "",
          url: "/Women",
        },
        {
          name: "GPS & Navigation",
          children: [],
          icon: "",
          url: "/Women",
        },
        {
          name: "Headphones",
          children: [],
          icon: "",
          url: "/Women",
        },
        {
          name: "Home Audio",
          children: [],
          icon: "",
          url: "/Women",
        },
        {
          name: "Office Electronics",
          children: [],
          icon: "",
          url: "/Women",
        },
      ],
      icon: true,
      url: "/women",
    },
    {
      name: "fags",
      children: [],
      icon: "",
      url: "/fags",
    },
    {
      name: "about",
      children: [],
      icon: "",
      url: "/about",
    },
    {
      name: "contact",
      children: [],
      icon: "",
      url: "/contact",
    },
  ],
  categories: [
    {
      name: "Accessories & Supplies",
      categoryId: 1,
      icon: "",
      url: "/women",
    },
    {
      name: "Camera & Photo",
      categoryId: 2,
      icon: "",
      url: "/women",
    },
    {
      name: "Car & Vehicle Electronics",
      categoryId: 3,
      icon: "",
      url: "/women",
    },
    {
      name: "Cell Phones & Accessories",
      categoryId: 4,
      icon: "",
      url: "/women",
    },
    {
      name: "Computers & Accessories",
      categoryId: 5,
      icon: "",
      url: "/women",
    },
    {
      name: "GPS & Navigation",
      categoryId: 6,
      icon: "",
      url: "/women",
    },
    {
      name: "Headphones",
      categoryId: 7,
      icon: "",
      url: "/women",
    },
    {
      name: "Home Audio",
      categoryId: 8,
      icon: "",
      url: "/women",
    },
    {
      name: "Office Electronics",
      categoryId: 9,
      icon: "",
      url: "/women",
    },
  ],
  contactInfo: [
    {
      name: "685 Market Street",
      icon: "",
      link: "/",
    },
    {
      name: "Cosmopolis, CA 94105, United States",
      icon: "",
      link: "/",
    },
    { name: "1.800.000.6690", icon: "fas fa-phone", link: "/" },
    {
      name: "support@electronry.com",
      icon: "fas fa-envelope",
      link: "/",
    },
  ],
  furtherInfo: [
    { name: "About", icon: "", link: "/" },
    {
      name: "Customer Service",
      icon: "",
      link: "/",
    },
    {
      name: " Reward Program",
      icon: "",
      link: "/",
    },
    {
      name: "Shipping & Returns",
      icon: "",
      link: "/",
    },
    { name: "Privacy Policy", icon: "", link: "/" },
    { name: "Bulk Editor", icon: "", link: "/" },
    { name: "Blog", icon: "", link: "/" },
  ],
  brands: [
    { name: " Anna", icon: "", link: "/" },
    {
      name: "Benjamin Button",
      icon: "",
      link: "/",
    },
    { name: "Burberry", icon: "", link: "/" },
    { name: "Carhart", icon: "", link: "/" },
    { name: "Chanel", icon: "", link: "/" },
    { name: "Coco Lee", icon: "", link: "/" },
    { name: "Collette", icon: "", link: "/" },
  ],
  paymentMethods: [
    {
      id: 1,
      name: "Visa",
      icon: visa,
    },
    {
      id: 2,
      name: "PayPal",
      icon: paypal,
    },
    {
      id: 3,
      name: "Western",
      icon: western,
    },
    {
      id: 4,
      name: "Master",
      icon: master,
    },
    {
      id: 5,
      name: "Discover",
      icon: discover,
    },
    {
      id: 6,
      name: "Circus",
      icon: circus,
    },
    {
      id: 7,
      name: "American",
      icon: american,
    },
  ],
};
