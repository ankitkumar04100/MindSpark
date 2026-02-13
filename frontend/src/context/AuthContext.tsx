import React, { createContext, useContext, useState, useEffect } from "react";

type Role = "student" | "teacher" | "admin";

interface User {
  id: string;
  name: string;
  role: Role;
}

interface AuthContextType {
  user: User | null;
  login: (role: Role) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("mindspark_user");
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  const login = (role: Role) => {
    const mockUser: User = {
      id: crypto.randomUUID(),
      name:
        role === "student"
          ? "Aisha Patel"
          : role === "teacher"
          ? "Mr. Sharma"
          : "Admin User",
      role,
    };

    localStorage.setItem("mindspark_user", JSON.stringify(mockUser));
    setUser(mockUser);
  };

  const logout = () => {
    localStorage.removeItem("mindspark_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
