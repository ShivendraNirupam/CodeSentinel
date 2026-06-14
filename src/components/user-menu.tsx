"use client";

import { signOut } from "better-auth/api";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ChevronDown, LogOut, Settings, User } from "lucide-react";

interface UserProps {
  id: string;
  name: string;
  email: string;
  image?: string | null | undefined;
}

export function UserMenu({ user }: { user: UserProps }) {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  const initials = user.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : (user.email[0].toUpperCase() ?? "U");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} className="h-9 gap-2 px-2 hover:bg-muted/80 ">
          <Avatar className="size-7 ring-1 ring-border">
            <AvatarImage src={user?.image ?? undefined} alt={user.name} />
            <AvatarFallback className="text-sm font-medium bg-primary/10 text-primary">
              {initials}
            </AvatarFallback>
          </Avatar>
          <span className="hidden sm:inline-block text-sm font-medium max-w-25 truncate">
            {user.name?.split(" ")[0] ?? "User"}
          </span>
          <ChevronDown className="size-3.5 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-64">
        <div className="px-3 py-3">
          <div className="flex items-center gap-3">
            <Avatar className="size-7 ring-1 ring-border">
              <AvatarImage src={user?.image ?? undefined} alt={user.name} />
              <AvatarFallback className="text-sm font-medium bg-primary/10 text-primary">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-medium truncate">
                {user.name ?? "User"}
              </span>
              <span className="text-xs text-muted-foreground truncate">
                {user.email ?? "Email"}
              </span>
            </div>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-2 py-2 cursor-pointer font-medium">
            <User className="size-4" />
            Profile
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2 py-2 cursor-pointer font-medium">
            <Settings className="size-4" />
            Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem 
         className="font-medium gap-2 cursor-pointer text-destructivebg-de focus:test-destructive focus:"
         onClick={handleSignOut}
         >
            <LogOut className="size-4"/>
            Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
