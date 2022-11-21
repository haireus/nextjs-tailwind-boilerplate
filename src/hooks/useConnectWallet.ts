import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import {
  ConnectorNotFoundError,
  useConnect,
  useDisconnect,
  UserRejectedRequestError,
} from "wagmi";

function useConnectWallet() {
  const [currentConnectorId, setCurrentConnectorId] = useState<string>();
  const { connectAsync, connectors, isLoading, error } = useConnect();
  const { disconnect } = useDisconnect();

  const login = useCallback(
    async (connectorID: string) => {
      setCurrentConnectorId(connectorID);
      const findConnector = connectors.find((c) => c.id === connectorID);
      try {
        await connectAsync({ connector: findConnector });
      } catch (e) {
        if (e instanceof ConnectorNotFoundError) {
          toast("An error occurred when connect to wallet", {
            data: "No provider was found",
            autoClose: 5000,
          });

          return;
        }
        if (e instanceof UserRejectedRequestError) {
          toast("An error occurred when connect to wallet", {
            autoClose: 5000,
          });
          return;
        }
        if (e instanceof Error) {
          toast("An error occurred when connect to wallet", {
            autoClose: 5000,
          });
        }
      }
    },
    [connectors, connectAsync, toast]
  );

  const logout = useCallback(() => {
    disconnect();
  }, [disconnect]);

  return { login, logout, isLoading, error, currentConnectorId };
}

export default useConnectWallet;
