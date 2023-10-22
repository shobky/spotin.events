import Events from "@/components/events";
import Menu from "@/components/menu";
import { getEvents } from "@/lib/database/utils";
import { EventT } from "@/types";

export default async function Home() {
  let firstEventsPatch: EventT[] = await getEvents(8);

  return (
    <main className="flex flex-col sm:flex-row gap-4 sm:gap-10 ">
      <Menu />
      <Events firstEventsPatch={firstEventsPatch} />
    </main>
  );
}
