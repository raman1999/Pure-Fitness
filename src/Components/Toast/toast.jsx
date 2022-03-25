import { useEffect } from "react";
import { useUserContext } from "../../Context/UserDataProvider";
import "./toast.css";
export const Toast = () => {
  const {
    userState: { toastMsg },
    userDispatch,
  } = useUserContext();

  const closeToast = () => {
    userDispatch({ type: "SHOW_TOAST", payload: null });
  };

  useEffect(() => {
    const timeID = setTimeout(closeToast, 2000);
    return () => clearTimeout(timeID);
  }, [toastMsg]);

  return (
    <div className="toast-container">
      <h3 className="toast-message">{toastMsg}</h3>
      <button className="fa fa-times btn-dismiss"></button>
    </div>
  );
};
