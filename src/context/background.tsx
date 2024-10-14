import { createContext, useContext, useState } from "react";

// Create the context
const BackgroundContext = createContext<{
  background: string;
  setBackground: (bgClass: string) => void;
}>({
  background: "linear-gradient(135deg, #ffce4c, #ff6321 75%)",
  setBackground: () => {},
});

// BackgroundProvider component
export const BackgroundProvider = ({ children }: { children: React.ReactNode }) => {
  const [background, setBackground] = useState("linear-gradient(135deg, #ffce4c, #ff6321 75%)");

  return (
    <BackgroundContext.Provider value={{ background, setBackground }}>
      {children}
    </BackgroundContext.Provider>
  );
};

// Custom hook to use the background context
export const useBackground = () => useContext(BackgroundContext);
