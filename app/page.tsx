import Menu from "@/components/menu";
import { getEvents } from "@/lib/database/utils";
import { Event } from "@/types";

export default async function Home() {
  let firstEventsPatch: Event[] = await getEvents(5);

  return (
    <main>
      <Menu/>
      {/* {firstEventsPatch.map(event => (
        <p key={event.id}>{event.name}</p>
      ))} */}
    </main>
  );
}
