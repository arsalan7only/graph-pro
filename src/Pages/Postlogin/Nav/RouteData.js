
export const route = [
  {
    path: "/",
    name: "Home",
    icone:  <i class="fa-sharp fa-solid fa-house"></i>,
  },
  {
    path: "/order",
    name: "Order",
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
    path: "/order",
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
    path: "/order",
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
    path: "/order",
    name: "Master Managment",
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
    path: "/order",
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
    path: "/order",
    name: "Apperance",
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
    path: "/order",
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
    path: "/order",
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
    path: "",
    name: "Transaction",
    icone: <i class="fa-solid fa-money-check-dollar"></i>,
  },
 
];
