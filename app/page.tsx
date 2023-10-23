import Events from "@/components/events";
import Menu from "@/components/menu";
import { localEventList } from "@/lib/redux/slices/events/reducers";
import { getServerSession } from "next-auth";
import { AuthConfig } from "./api/auth/[...nextauth]/route";
import { cookies } from "next/headers";

export default async function Home() {
  // let firstEventsPatch: EventT[] = await getEvents(8);
  let firstEventsPatch = localEventList;
  const session = await getServerSession(AuthConfig);
  const cookieStore = cookies();
  const accessTokenCookie = cookieStore.get("access_token");
  const accessToken = accessTokenCookie?.value;

  const calendarData = {
    session,
    accessToken,
  };

  return (
    <main className="flex flex-col sm:flex-row gap-4 sm:gap-10 ">
      <Menu />
      <Events calendarData={calendarData} data={firstEventsPatch} />
    </main>
  );
}
