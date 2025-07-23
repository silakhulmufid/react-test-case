// NavigationHandler.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

export const NavigationHandler = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const path = useAppSelector((state) => state.navigation.path);

  useEffect(() => {
    if (path) {
      navigate(path);
      dispatch({ type: "CLEAR_NAVIGATION" });
    }
  }, [path]);

  return null;
};

export default NavigationHandler;
