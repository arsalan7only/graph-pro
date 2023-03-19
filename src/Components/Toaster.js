import { toast } from "react-toastify";

const Toaster = (response, message) => {
  if (response == true) {
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      closeButton: true,
      theme: "colored",
    });
  } else {
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      closeButton: true,
      theme: "colored",
    });
  }
};

export default Toaster;
