import { toast } from "react-toastify";

const Toaster = (responce, messege) => {
  if (responce == true) {
    toast.success(messege, {
        position:"top-right",
        autoClose:5000,
        closeButton:true,
        theme:"colored"
    });
  } else {
    toast.error(messege, {
        position:"top-right",
        autoClose:5000,
        closeButton:true,
        theme:"colored"
    });
  }
};
export default Toaster
