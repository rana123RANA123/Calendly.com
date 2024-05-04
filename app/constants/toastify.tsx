import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type ToastMessageType = "success" | "error" | "info" | "warn";

import "react-toastify/dist/ReactToastify.css";

const Toast: React.FC = () => {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={14000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
};

export const showToast = (message: string, type: ToastMessageType = "info") => {
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "error":
      toast.error(message);
      break;
    case "info":
      toast.info(message);
      break;
    case "warn":
      toast.warn(message);
      break;
    default:
      toast(message);
  }
};

export default Toast;
