export const route = [
  {
    path: "/",
    name: "Home",
    icon: <i class="fa-sharp fa-solid fa-house"></i>

  },
  {
    path: "/order",
    name: "Order",
    icon: <i class="fa-solid fa-bag-shopping"></i>,
    subRoutes: [
      {
        path: "/order/orderList",
        name: "Order List",
        icon: "fa fahome",
      },
    ],
  },
  {
    path: "/order",
    name: "Productr",
    icon: <i class="fa-solid fa-box-archive"></i>,
    subRoutes: [
      {
        path: "/order/orderList",
        name: "Order List",
        icon: "fa fahome",
      },
    ],
  },
  {
    path: "/order",
    name: "Brand",
    icon: <i class="fa-solid fa-bag-shopping"></i>,
    subRoutes: [
      {
        path: "/order/orderList",
        name: "Order List",
        icon: "fa fahome",
      },
    ],
  },
  {
    path: "/order",
    name: "Customer",
    icon: <i class="fa-solid fa-user"></i>,
    subRoutes: [
      {
        path: "/order/orderList",
        name: "Order List",
        icon: "fa fahome",
      },
    ],
  },
  {
    path: "/order",
    name: "Master Management",
    icon: <i class="fa-solid fa-user-gear"></i>,
    subRoutes: [
      {
        path: "/order/orderList",
        name: "Order List",
        icon: "fa fahome",
      },
    ],
  },
  {
    path: "/order",
    name: "Coupon Code",
    icon: <i class="fa-solid fa-tag"></i>,
    subRoutes: [
      {
        path: "/order/orderList",
        name: "Order List",
        icon: "fa fahome",
      },
    ],
  },
  {
    path: "/order",
    name: "Apperance",
    icon: <i class="fa-solid fa-bag-shopping"></i>,
    subRoutes: [
      {
        path: "/order/orderList",
        name: "Order List",
        icon: "fa fahome",
      },
    ],
  },
  {
    path: "/order",
    name: "Media",
    icon: <i class="fa-solid fa-circle-play"></i>,
    subRoutes: [
      {
        path: "/order/orderList",
        name: "Order List",
        icon: "fa fahome",
      },
    ],
  },
  {
    path: "/order",
    name: "Gallery",
    icon:<i class="fa-solid fa-image"></i>,
    subRoutes: [
      {
        path: "/order/orderList",
        name: "Order List",
        icon: "fa fahome",
      },
    ],
  },
  {
    path: "/transaction",
    name: "Transaction",
    icon: <i class="fa-solid fa-money-check"></i>

  },
];
