import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SignoutBtn from "./signout";
import Link from "next/link";
export function AvatarMenu({ user }: { user: any }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className=" w-7 h-7">
            <AvatarImage
              src={String(user?.image)}
              alt={String(user?.firstName)}
            />
            <AvatarFallback>{user?.firstName?.slice(0, 2)}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 " align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {String(user?.name)}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {String(user?.email)} 
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="/admin/event/new"><DropdownMenuItem>New Event</DropdownMenuItem></Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <SignoutBtn />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
