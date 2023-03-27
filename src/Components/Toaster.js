import { toast } from "react-toastify";

const Toaster = (response, message) => {
  if (response == true) {
    toast.success(message, {
      position: "top-center",
      autoClose: 3000,
      closeButton: true,
      theme: "colored",
    });
  } else {
    toast.error(message, {
      position: "top-center",
      autoClose: 3000,
      closeButton: true,
      theme: "colored",
    });
  }
};

export default Toaster;
