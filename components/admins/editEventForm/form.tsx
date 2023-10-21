import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../../ui/input";
import { EventT } from "@/types";
import { DatePickerWithPresets } from "./datePicker";
import { useDispath, useSelector } from "@/lib/redux";
import { selectEventActive } from "@/lib/redux/slices/selectors";
import { eventActiveSlice } from "@/lib/redux/slices/eventActive/reducers";

const formSchema = z.object({
  id: z.string(),
  type: z.string(),
  name: z.string(),
  date: z.date(),
  time: z.number(),
  facilitator: z.string(),
  cover: z.string(),
  location: z.string(),
  article: z.string(),
  checked: z.boolean(),
});

export type EventEditSchema = z.infer<typeof formSchema>;

export default function EventEditForm() {
  const dispatch = useDispath();
  const { newEvent } = useSelector(selectEventActive);

  const form = useForm<EventEditSchema | any>({
    resolver: zodResolver(formSchema),
    defaultValues: newEvent,
    values: newEvent,
  });

  const submitEvent = () => {};
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submitEvent)}
        className=" space-y-4 grid"
      >
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium">Name</FormLabel>
                <FormControl>
                  <Input
                    autoFocus
                    placeholder="name"
                    {...field}
                    value={newEvent.name}
                    onChange={e =>
                      dispatch(
                        eventActiveSlice.actions.editEvent({
                          field: "name",
                          value: e.target.value,
                        })
                      )
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="facilitator"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium">Facilitator</FormLabel>
                <FormControl>
                  <Input
                    autoFocus
                    placeholder="facilitator"
                    {...field}
                    value={newEvent.facilitator}
                    onChange={e =>
                      dispatch(
                        eventActiveSlice.actions.editEvent({
                          field: "facilitator",
                          value: e.target.value,
                        })
                      )
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-4 ">
          <FormItem className="w-full">
            <FormLabel className="font-medium">Date</FormLabel>
            <DatePickerWithPresets />
          </FormItem>
          <FormItem className="w-full">
            <FormLabel className="font-medium">Time</FormLabel>
            <Input className=" cursor-pointer" type="time" />
          </FormItem>
        </div>
      </form>
    </Form>
  );
}
