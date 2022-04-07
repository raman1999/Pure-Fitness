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
    const timeID = setTimeout(closeToast, 1800);
    return () => clearTimeout(timeID);
  }, [toastMsg]);

  return (
    <div className="toast-container">
      <h3 className="toast-message">{toastMsg}</h3>
      <button onClick={closeToast} className="fa fa-times btn-dismiss"></button>
    </div>
  );
};
