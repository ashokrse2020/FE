import { Button } from "antd";
import { useOnlineStatus } from "./index";

export default function OnlineButton() {
  const isOnline = useOnlineStatus();

  return <Button>{isOnline ? "Submit" : "reconnecting..."}</Button>;
}
