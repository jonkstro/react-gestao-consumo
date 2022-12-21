import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

// criar interface de componentes que o Provider irá receber no index
interface LeiturasProviderProps {
  children: ReactNode;
}

// criar interface do objeto que irá ser recebido da api
interface Leitura {
  dispositivo: string;
  leitura: string;
}

// criar os contextos :
interface LeiturasContextData {
  leituras: Leitura[];
}

const LeiturasContext = createContext<LeiturasContextData>(
  // Bug do typescript, pra corrigir
  {} as LeiturasContextData
);

export function LeiturasProvider({ children }: LeiturasProviderProps) {
  // criar variável de arrays que irão armazenar as leituras
  const [leituras, setLeituras] = useState<Leitura[]>([]);
  // criar função que irá realizar o GET da API
  // realizar a busca na API ao carregar a página:
  useEffect(() => {
    api.get("/leituras").then((response) => setLeituras(response.data.devices));
  }, []);

  return (
    <LeiturasContext.Provider value={{ leituras }}>
      {children}
    </LeiturasContext.Provider>
  );
}

// criar função de hook que será utilizada
export function useDevices() {
  const context = useContext(LeiturasContext);
  return context;
}
