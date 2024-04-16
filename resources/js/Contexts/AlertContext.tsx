import { createContext, useState, useContext } from 'react';

type MessageType = "success" | "info" | "warning" | "error"

export interface Alert {
  id: string,
  message: string,
  type: MessageType
}

interface AlertContextProps {
  alerts: Alert[],
  addAlert: (message: string, type?: MessageType) => void,
  removeAlert: (id: string) => void,
  clearAlerts: () => void
}

const AlertContext = createContext<AlertContextProps>({
  alerts: [],
  addAlert: () => { },
  removeAlert: () => { },
  clearAlerts: () => { }
});


export const AlertProvider = ({ children }: Children) => {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  const addAlert = (message: string, type?: MessageType) => {
    if (!message) {
      return
    }
    if (type === undefined) {
      type = "success";
    }
    const newAlerts = [...alerts];
    const alertId = Date.now().toString();
    newAlerts.push({ id: Date.now().toString(), message: message, type: type });
    setAlerts(newAlerts);
    setTimeout(() => {
      setAlerts(alerts.filter(alert => alert.id !== alertId));
    }, 3000);
  };

  const removeAlert = (id: string) => {
    const newAlerts = alerts.filter((alert: Alert) => alert.id !== id);
    setAlerts(newAlerts);
  };

  const clearAlerts = () => {
    setAlerts([])
  }
  return (
    <AlertContext.Provider value={{ alerts, addAlert, removeAlert, clearAlerts }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext)