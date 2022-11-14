import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthProvider";
import { useSerQuery } from "./useSerQuery";

export const useFind = () => {
  const [activeUser, setActiveUser] = useState({});

  const { serData, serError, serIsLoading } = useSerQuery();

  const { user } = useAuth();
  const uid = user?.uid;

  useEffect(() => {
    if (!serData) return;

    const singleItem = serData.find((item) => item.userUId === uid);
    setActiveUser({ ...singleItem });
  }, [serData, uid]);

  return { activeUser, serError, serIsLoading };
};
