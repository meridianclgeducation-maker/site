import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
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

type FormState = "idle" | "submitting" | "success" | "error";

export function EnquiryForm({ compact = false }: { compact?: boolean }) {
  const [formState, setFormState] = useState<FormState>("idle");
  const [courseValue, setCourseValue] = useState("");
  const [courseError, setCourseError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!courseValue) {
      setCourseError(true);
      return;
    }

    setFormState("submitting");
    setCourseError(false);
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const body = {
      name: (formData.get("name") as string).trim(),
      phone: (formData.get("phone") as string).trim(),
      course: courseValue,
      message: ((formData.get("message") as string) ?? "").trim(),
    };

    try {
      const res = await fetch("/.netlify/functions/send-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      let data: { error?: string; success?: boolean };
      try {
        data = await res.json();
      } catch {
        setErrorMessage(`Server responded unexpectedly (${res.status}). Please try again.`);
        setFormState("error");
        return;
      }

      if (!res.ok) {
        setErrorMessage(data.error ?? `Request failed (${res.status}). Please try again.`);
        setFormState("error");
        return;
      }

      setFormState("success");
      setCourseValue("");
      form.reset();
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setFormState("error");
    }
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
              type="tel"
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

          <Button type="submit" className="mt-1 min-h-12" disabled={formState === "submitting"}>
            {formState === "submitting" ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send data-icon="inline-start" />
            )}
            {formState === "submitting" ? "Sending..." : "Send enquiry"}
          </Button>

          {formState === "success" ? (
            <p className="flex items-start gap-2 rounded-md bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
              Thank you. Your enquiry has been sent. The admissions team will contact you soon.
            </p>
          ) : null}

          {formState === "error" ? (
            <p className="flex items-start gap-2 rounded-md bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              {errorMessage || "Failed to send enquiry. Please try again."}
            </p>
          ) : null}
        </form>
      </CardContent>
    </Card>
  );
}
