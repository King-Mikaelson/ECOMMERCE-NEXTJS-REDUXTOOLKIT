"use client"
import { createContext, useState, useContext } from "react";
import { usePathname } from "next/navigation";

type authContextType = {
  show: boolean;
  login: () => void;
  logout: () => void;
  setShow:React.Dispatch<React.SetStateAction<boolean>>
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>

};

const authContextDefaultValues: authContextType = {
  show: false,
  login: () => {},
  logout: () => {},
  setShow: () => {},
  page: "home",
  setPage: () => {},
};


const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
    return useContext(AuthContext);
}


type Props = {
  children: React.ReactNode
};

export function AuthProvider({ children }: Props) {
  const pathname = usePathname()
  const [show, setShow] = useState<boolean>(false);
  const [page, setPage] = useState<string>(pathname);

    const login = () => {
        setShow(true);
    };

    const logout = () => {
      setShow(false);
    };

    const value = {
        show,
        login,
        logout,
        setShow,
        page,
        setPage
    };

  return (
      <>
          <AuthContext.Provider value={value}>
              {children}
          </AuthContext.Provider>
      </>
  );
}