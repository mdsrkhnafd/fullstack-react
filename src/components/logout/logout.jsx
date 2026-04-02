import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";

export function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/");
  };

  return (
    <div className="flex justify-end">
      <Button onClick={handleLogout} variant="outline" size="icon">
        <LogOut className="h-4 w-4" />
      </Button>
    </div>
  );
}
