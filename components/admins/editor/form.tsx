import React from "react";
import { useDispath, useSelector } from "@/lib/redux";
import { eventActiveSlice } from "@/lib/redux/slices/eventActive/reducers";
import { selectEventActive } from "@/lib/redux/slices/selectors";
import { FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { initFilterOptions } from "@/lib/redux/slices/search/reducers";
export default function EditorForm() {
  const { newEvent } = useSelector(selectEventActive);
  const dispatch = useDispath();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      eventActiveSlice.actions.editEvent({
        field: e.target.name,
        value: e.target.value,
      })
    );
  };
  return (
    <form className=" space-y-4">
      <FormItem className="relative h-14 flex justify-center items-center border border-dotted border-input hover:bg-secondary rounded-lg">
        <p className="text-center">Select event cover or drag and drop</p>
        <Input
          type="file"
          className=" opacity-0 w-full h-full absolute top-0 left-0"
          onChange={e =>
            dispatch(
              eventActiveSlice.actions.editEvent({
                field: "cover",
                value: e.target.files && e.target.files[0],
              })
            )
          }
        />
      </FormItem>
      <div className="flex gap-4">
      <FormItem>
        <Label>Name</Label>
        <Input
          required
          name="name"
          placeholder="name"
          value={newEvent.name}
          onChange={handleChange}
        />
      </FormItem>
        <FormItem>
          <Label>Facilitator</Label>
          <Input
            required
            name="facilitator"
            placeholder="facilitator"
            value={newEvent.facilitator}
            onChange={handleChange}
          />
        </FormItem>
      </div>
      <FormItem>
        <Label>Date</Label>
        <Input
          type="datetime-local"
          name="date"
          datatype="number"
          placeholder="date"
          value={newEvent.date}
          onChange={handleChange}
        />
      </FormItem>
      <div className="flex gap-4">
        <FormItem>
          <Label>Cateogry</Label>
          <Select
            defaultValue={newEvent.type}
            onValueChange={v =>
              dispatch(
                eventActiveSlice.actions.editEvent({ field: "type", value: v })
              )
            }
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue
                placeholder="Select a cateogry"
                defaultValue={newEvent.type}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {initFilterOptions.map(option => (
                  <SelectItem key={option.name} value={option.name}>
                    {option.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </FormItem>
        <FormItem>
          <Label>Location</Label>
          <Input
            required
            name="location"
            placeholder="location"
            value={newEvent.location}
            onChange={handleChange}
          />
        </FormItem>
      </div>
      <FormItem>
        <textarea
          placeholder="Add your description"
          className="flex h-20 min-h-[2.35rem] max-h-[150px] w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          maxLength={800}
        />
      </FormItem>
    </form>
  );
}
