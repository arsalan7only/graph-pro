export const route = [
  {
    path: "/",
    name: "Home",
    icone:  <i className="fa-sharp fa-solid fa-house"></i>,
  },
  {
    path: "/order",
    name: "Order",
    icone:<i className="fa-solid fa-bag-shopping"></i>,
    subRoutes: [
      {
        path: "/order/orderList",
        name: "Order List",
        icone: "fa fahome",
      },
    ],
  },
  {
    path: "/product",
    name: "Product",
    icone: <i className="fa-solid fa-box-archive"></i>,
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
    icone: <i className="fa-sharp fa-solid fa-bag-shopping"></i>,
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
    icone: <i className="fa-solid fa-user"></i>,
    subRoutes: [
      {
        path: "/order/orderList",
        name: "Order List",
        icone: "fa fahome",
      },
    ],
  },
  {
    path: "/master Managment",
    name: "Master Managment",
    icone: <i className="fa-solid fa-user-gear"></i>,
    subRoutes: [
      {
        path: "/order/orderList",
        name: "Order List",
        icone: "fa fahome",
      },
    ],
  },
  {
    path: "/coupen Code",
    name: "Coupen Code",
    icone: <i className="fa-solid fa-tag"></i>,
    subRoutes: [
      {
        path: "/order/orderList",
        name: "Order List",
        icone: "fa fahome",
      },
    ],
  },
  {
    path: "/appereance",
    name: "Appereance",
    icone: <i className="fa-solid fa-palette"></i>,
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
    icone: <i className="fa-solid fa-circle-play"></i>,
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
    icone: <i className="fa-solid fa-image"></i>,
    subRoutes: [
      {
        path: "/order/orderList",
        name: "Order List",
        icone: "fa fahome",
      },
    ],
  },

  {
    path: "/transaction",
    name: "Transaction",
    icone: <i className="fa-solid fa-money-check-dollar"></i>,
  },
 
];