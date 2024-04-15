import { createContext, useState, useContext } from 'react';

type MessageType = "success" | "info" | "warning" | "error"

interface Alert {
  id: string,
  message: string,
  type: MessageType
}

interface AlertContextProps {
  alerts: Alert[],
  addAlert: (message: string, type?: MessageType) => void,
  removeAlert: (id: string) => void,
}

const AlertContext = createContext<AlertContextProps>({
  alerts: [],
  addAlert: () => { },
  removeAlert: () => { }
});


export const AlertProvider = ({ children }: Children) => {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  const addAlert = (message: string, type?: MessageType) => {
    if (type === undefined) {
      type = "success";
    }
    const newAlerts = [...alerts];
    newAlerts.push({ id: Date.now().toString(), message: message, type: type });
    setAlerts(newAlerts);
  };

  const removeAlert = (id: string) => {
    const newAlerts = alerts.filter((alert: Alert) => alert.id !== id);
    setAlerts(newAlerts);
  };

  return (
    <AlertContext.Provider value={{ alerts, addAlert, removeAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext)