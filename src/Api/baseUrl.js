//!(Login APIs)//
export const Base_URL = "http://localhost:8000";
//!(Customers APIs)//
export const LOGIN_API = `${Base_URL}/login`;
export const ADD_CUSTOMER_API = `${Base_URL}/addcustomer`;
export const GET_CUSTOMER_API = `${Base_URL}/getcustomer`;
export const CUSTOMER_CHANGESTATUS_API = `${Base_URL}/customer/changestatus`;
export const GET_EDIT_CUSTOMER_API = `${Base_URL}/editcustomer`;
export const ADD_EDIT_CUSTOMER_API = `${Base_URL}/editcustomersave`;
//!(Products APIs)//
export const ADD_GALLERY_API = `${Base_URL}/uploadimage`;
export const GET_GALLERY_API = `${Base_URL}/getgallery`;
export const ADD_PRODUCT_API = `${Base_URL}/addproduct`;
//!(Categories APIs)//
export const GET_CATEGORY_API = `${Base_URL}/getparentcategory`;
export const ADD_CATEGORY_API = `${Base_URL}/addcategory`;
export const GET_CATEGORYS_API = `${Base_URL}/getcategory`;
