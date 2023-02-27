
export const route = [
  {
    path: "/",
    name: "Home",
    icone:  <i  class="fa-sharp fa-solid fa-house"></i>,
  },
   {
    path: "/order",
    name: "Order",
    icone: <i class="fa-sharp fa-solid fa-bag-shopping"></i>,
    subRoutes: [
      {
        path: "/order/orderList",
        name: "Order List",
        icone: "fa fahome",
      },
    ],
  },
  {
    path: "/products",
    name: "Products",
    icone: <i class="fa-sharp fa-solid fa-box-archive"></i>,
    subRoutes: [
      {
        path: "/order/orderList",
        name: "Order List",
        icone: "fa fahome",
      },
    ],
  },
  {
    path: "/brand",
    name: "Brand",
    icone: <i class="fa-sharp fa-solid fa-bag-shopping"></i>,
    subRoutes: [
      {
        path: "/order/orderList",
        name: "Order List",
        icone: "fa fahome",
      },
    ],
  },
  {
    path: "/customer",
    name: "Customer",
    icone: <i class="fa-solid fa-user"></i>,
    subRoutes: [
      {
        path: "/order/orderList",
        name: "Order List",
        icone: "fa fahome",
      },
    ],
  },
  {
    path: "/mastermanagment",
    name: "Master Management",
    icone: <i class="fa-solid fa-user-gear"></i>,
    subRoutes: [
      {
        path: "/order/orderList",
        name: "Order List",
        icone: "fa fahome",
      },
    ],
  },
  {
    path: "/coupencode",
    name: "Coupen Code",
    icone: <i class="fa-solid fa-tag"></i>,
    subRoutes: [
      {
        path: "/order/orderList",
        name: "Order List",
        icone: "fa fahome",
      },
    ],
  },
  {
    path: "/appearance",
    name: "Appearance",
    icone: <i class="fa-solid fa-palette"></i>,
    subRoutes: [
      {
        path: "/order/orderList",
        name: "Order List",
        icone: "fa fahome",
      },
    ],
  },
  {
    path: "/media",
    name: "Media",
    icone: <i class="fa-solid fa-circle-play"></i>,
    subRoutes: [
      {
        path: "/order/orderList",
        name: "Order List",
        icone: "fa fahome",
      },
    ],
  },
  {
    path: "/gallary",
    name: "Gallary",
    icone: <i class="fa-solid fa-image"></i>,
    subRoutes: [
      {
        path: "/order/orderList",
        name: "Order List",
        icone: "fa fahome",
      },
    ],
  },
  {
    path: "transaction",
    name: "Transaction",
    icone: <i class="fa-solid fa-money-check-dollar"></i>,
  },
 
];
