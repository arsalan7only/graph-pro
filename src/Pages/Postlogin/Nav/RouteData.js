export const route = [
  {
    path: "/",
    name: "Home",
    icone: "fa fa-home",
  },
  {
    path: "/order",
    name: "Order",
    icone: "fa-solid fa-bag-shopping",
    subRoutes: [
      {
        path: "/order/orderList",
        name: "Order List",
      },
    ],
  },
  {
    path: "/Product",
    name: "Product",
    icone: "fa-sharp fa-solid fa-box-archive",
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
    icone: "fa-sharp fa-solid fa-box-archive",
    subRoutes: [
      {
        path: "/category/categorylist",
        name: "Category List",
      }]},
  {
    path: "/brand",
    name: "Brand",
    icone: "fa-solid fa-bag-shopping",
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
        path: "/customer/customerlist",
        name: "Customer List",
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
    icone: "fa-solid fa-tag",
    subRoutes: [
      {
        path: "/order/orderList",
        name: "Order List",
      },
    ],
  },
  {
    path: "/appearance",
    name: "Appearance",
    icone: "fa-solid fa-bag-shopping",
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
        path: "/gallery/galleryList",
        name: "Gallery List",
      },
    ],
  },
  {
    path: "/transaction",
    name: "Transaction",
    icone: "fa-solid fa-money-check",
  },
];
