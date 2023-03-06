export const route = [
  {
    path: "/",
    name: "Home",
    icone: "fa fa-home",
  },
  {
    path: "/order",
    name: "Order",
    icone: "fa-solid fa-dolly",
    subRoutes: [
      {
        path: "/order/orderList",
        name: "Order List",
        icone: "fa-solid fa-dolly",
      },
    ],
  },
  {
    path: "/Product",
    name: "Product",
    icone: "fa-brands fa-product-hunt",
    subRoutes: [
      {
        path: "/product/productlist",
        name: "Product List",
      },
      {
        path: "/product/addproduct",
        name: "Add Product",
      },
    ],
  },
  {
    path: "/category",
    name: "Category",
    icone: "fa-solid fa-list-ul",
    subRoutes: [
      {
        path: "/category/categoryList",
        name: "Category List",
      },
      {
        path: "/category/addCategory",
        name: "Add Category",
      },
    ],
  },
  {
    path: "/brand",
    name: "Brand",
    icone: "fa-solid fa-tags",
    subRoutes: [
      {
        path: "/brand/brandList",
        name: "Brand List",
      },
    ],
  },
  {
    path: "/customer",
    name: "Customer",
    icone: "fa-solid fa-user",
    subRoutes: [
      {
        path: "/costomer/costomerList",
        name: "Customer List",
      },
      {
        path: "/costomer/addcustomer",
        name: "Add Customer",
      },
    ],
  },
  {
    path: "/mastermanagment",
    name: "Master Management",
    icone: "fa-solid fa-user-gear",
    subRoutes: [
      {
        path: "/order/orderList",
        name: "Order List",
      },
    ],
  },
  {
    path: "/coupencode",
    name: "Coupen Code",
    icone: "fa-solid fa-gift",
    subRoutes: [
      {
        path: "/coupen/coupencode",
        name: "Coupen Code",
      },
    ],
  },
  {
    path: "/appearance",
    name: "Appearance",
    icone: "fa-solid fa-palette",
    subRoutes: [
      {
        path: "/order/orderList",
        name: "Order List",
      },
    ],
  },
  {
    path: "/media",
    name: "Media",
    icone: "fa-solid fa-circle-play",
    subRoutes: [
      {
        path: "/order/orderList",
        name: "Order List",
      },
    ],
  },
  {
    path: "/gallery",
    name: "Gallery",
    icone: "fa-solid fa-image",
    subRoutes: [
      {
        path: "/gallery/addgallery",
        name: "Add Gallery",
      },
    ],
  },
  {
    path: "/transaction",
    name: "Transaction",
    icone: "fa-solid fa-credit-card",
  },
];
