import { Send } from "lucide-react";
import { type FormEvent, useState } from "react";
import { courses } from "../lib/content";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";

type FormState = "idle" | "submitted";

export function EnquiryForm({ compact = false }: { compact?: boolean }) {
  const [formState, setFormState] = useState<FormState>("idle");
  const [courseValue, setCourseValue] = useState("");
  const [courseError, setCourseError] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!courseValue) {
      setCourseError(true);
      return;
    }

    setFormState("submitted");
    setCourseError(false);
    setCourseValue("");
    event.currentTarget.reset();
  }

  return (
    <Card className="overflow-hidden rounded-md border-meridian-line shadow-card">
      <div className="h-1 brand-gradient" />
      <CardHeader>
        <p className="font-mono text-xs font-bold uppercase text-meridian-primary">Enquiry form</p>
        <CardTitle className="font-display text-2xl text-meridian-ink">
          Request admission details
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <Label htmlFor="student-name">Student name</Label>
            <Input
              id="student-name"
              required
              name="name"
              className="min-h-12 bg-slate-50"
              placeholder="Enter full name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="phone-number">Phone number</Label>
            <Input
              id="phone-number"
              required
              name="phone"
              inputMode="tel"
              className="min-h-12 bg-slate-50"
              placeholder="Enter contact number"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="course-interest">Course interest</Label>
            <Select
              name="course"
              required
              value={courseValue}
              onValueChange={(value) => {
                setCourseValue(value);
                setCourseError(false);
              }}
            >
              <SelectTrigger
                id="course-interest"
                aria-invalid={courseError}
                className="min-h-12 bg-white"
              >
                <SelectValue placeholder="Select a course stream" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {courses.map((course) => (
                    <SelectItem key={course.title} value={course.title}>
                      {course.title}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            {courseError ? (
              <p className="text-sm font-medium text-destructive">Select a course stream.</p>
            ) : null}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              rows={compact ? 3 : 4}
              className="resize-none bg-slate-50"
              placeholder="Share any course or timing questions"
            />
          </div>

          <Button type="submit" className="mt-1 min-h-12">
            <Send data-icon="inline-start" />
            Send enquiry
          </Button>

          {formState === "submitted" ? (
            <p className="rounded-md bg-meridian-success/10 px-4 py-3 text-sm font-semibold text-emerald-700">
              Thank you. The enquiry has been noted in this demo form.
            </p>
          ) : null}
        </form>
      </CardContent>
    </Card>
  );
}
