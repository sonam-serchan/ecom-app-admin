import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

export default function ErrorAlert({ message }: { message: string }) {
  return (
    <Alert variant={"destructive"} className="text-start">
      <AlertCircle />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}
