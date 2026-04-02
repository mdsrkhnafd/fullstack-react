import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function UserProfile({firstName = "Mudasir"} = props) {
  return (
   <div className="flex flex-col items-center pt-8 w-full">
     <Avatar className="mb-4">
      <AvatarFallback className="text-2xl font-semibold">{firstName.slice(0, 1)}</AvatarFallback>
    </Avatar>
    <h4>Hello, {firstName}</h4>
   </div>
  );
}
