"use client";
import { useEffect, useState } from "react";

const ClientCheck = ({ children }: { children: React.ReactNode }) => {
  const [client, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);
  return <>{client ? children : null}</>;
};

export default ClientCheck;
