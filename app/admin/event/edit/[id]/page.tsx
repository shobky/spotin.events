import Editor from "@/components/admins/editor";
import { getEvent } from "@/lib/database/utils";
import React from "react";

export default async function Page({ params }: { params: { id: string } }) {
  const { event, err } = await getEvent(params.id);
  // if (err) {
  //   return <p>something went wrong, please try again</p>;
  // }
  return <Editor event={event} />;
}
