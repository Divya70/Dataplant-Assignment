import { createContext, useContext, React, useState} from "react";

const TimeContext = createContext();
const TimeProvider = ({ children }) => {

  const [timeState, setTimeState] = useState("");

  return (
    <TimeContext.Provider value={{ timeState, setTimeState }}>
      {children}
    </TimeContext.Provider>
  );
};
const useTime = () => useContext(TimeContext);
export { TimeProvider, useTime };