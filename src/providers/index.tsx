import { ReactNode } from "react";
import { AuthProvider } from "./Auth";
import { ProductsProvider } from "./Products";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      <ProductsProvider>{children}</ProductsProvider>
    </AuthProvider>
  );
};

export default Providers;
