import { Send } from "lucide-react";
import { type FormEvent, useState } from "react";
import { courses } from "../lib/content";

type FormState = "idle" | "submitted";

export function EnquiryForm({ compact = false }: { compact?: boolean }) {
  const [formState, setFormState] = useState<FormState>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState("submitted");
    event.currentTarget.reset();
  }

  return (
    <form
      className="overflow-hidden rounded-md border border-meridian-line bg-white shadow-card"
      onSubmit={handleSubmit}
    >
      <div className="h-1 brand-gradient" />
      <div className="p-5 sm:p-6">
        <div>
          <p className="font-mono text-xs font-bold uppercase text-meridian-primary">Enquiry form</p>
          <h2 className="mt-2 font-display text-2xl font-bold text-meridian-ink">Request admission details</h2>
        </div>

        <div className="mt-5 grid gap-4">
          <label className="grid gap-2 text-sm font-bold text-meridian-ink">
            Student name
            <input
              required
              name="name"
              className="min-h-12 rounded-md border border-meridian-line bg-slate-50 px-4 text-sm font-medium outline-none transition focus:border-meridian-primary focus:bg-white focus:ring-4 focus:ring-meridian-primary/10"
              placeholder="Enter full name"
            />
          </label>
          <label className="grid gap-2 text-sm font-bold text-meridian-ink">
            Phone number
            <input
              required
              name="phone"
              inputMode="tel"
              className="min-h-12 rounded-md border border-meridian-line bg-slate-50 px-4 text-sm font-medium outline-none transition focus:border-meridian-primary focus:bg-white focus:ring-4 focus:ring-meridian-primary/10"
              placeholder="Enter contact number"
            />
          </label>
          <label className="grid gap-2 text-sm font-bold text-meridian-ink">
            Course interest
            <select
              required
              name="course"
              className="min-h-12 rounded-md border border-meridian-line bg-slate-50 px-4 text-sm font-medium outline-none transition focus:border-meridian-primary focus:bg-white focus:ring-4 focus:ring-meridian-primary/10"
              defaultValue=""
            >
              <option value="" disabled>
                Select a course stream
              </option>
              {courses.map((course) => (
                <option key={course.title} value={course.title}>
                  {course.title}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-bold text-meridian-ink">
            Message
            <textarea
              name="message"
              rows={compact ? 3 : 4}
              className="resize-none rounded-md border border-meridian-line bg-slate-50 px-4 py-3 text-sm font-medium outline-none transition focus:border-meridian-primary focus:bg-white focus:ring-4 focus:ring-meridian-primary/10"
              placeholder="Share any course or timing questions"
            />
          </label>
        </div>

        <button
          type="submit"
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-meridian-primary px-5 py-3 text-sm font-bold text-white shadow-card transition hover:bg-meridian-secondary"
        >
          <Send className="h-4 w-4" aria-hidden="true" />
          Send enquiry
        </button>

        {formState === "submitted" ? (
          <p className="mt-4 rounded-md bg-meridian-success/10 px-4 py-3 text-sm font-semibold text-emerald-700">
            Thank you. The enquiry has been noted in this demo form.
          </p>
        ) : null}
      </div>
    </form>
  );
}
