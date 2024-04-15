import { createContext, useState, useContext } from 'react';

interface Alert {
  id: string,
  message: string
}

interface AlertContextProps {
  alerts: Alert[],
  addAlert: (message: string) => void,
  removeAlert: (id: string) => void,
}

const AlertContext = createContext<AlertContextProps>({
  alerts: [],
  addAlert: () => { },
  removeAlert: () => { }
});


export const AlertProvider = ({ children }: Children) => {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  const addAlert = (message: string) => {
    const newAlerts = [...alerts];
    newAlerts.push({ id: Date.now().toString(), message });
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