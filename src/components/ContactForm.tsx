"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle, AlertCircle, Upload } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const projectTypes = [
  "Residential Renovation",
  "Custom New Build",
  "Kitchen Remodel",
  "Bathroom Remodel",
  "Addition / Extension",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [selectedFileName, setSelectedFileName] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const payload = new FormData();
    const fields = {
      name: (form.elements.namedItem("name") as HTMLInputElement | null)?.value?.trim() ?? "",
      phone: (form.elements.namedItem("phone") as HTMLInputElement | null)?.value?.trim() ?? "",
      email: (form.elements.namedItem("email") as HTMLInputElement | null)?.value?.trim() ?? "",
      projectType:
        (form.elements.namedItem("projectType") as HTMLSelectElement | null)?.value?.trim() ?? "",
      message: (form.elements.namedItem("message") as HTMLTextAreaElement | null)?.value?.trim() ?? "",
    };

    Object.entries(fields).forEach(([key, value]) => {
      payload.append(key, value);
    });

    const photoInput = form.elements.namedItem("photo") as HTMLInputElement | null;
    const photoFile = photoInput?.files?.[0];
    if (photoFile) {
      payload.append("photo", photoFile, photoFile.name);
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: payload,
      });

      const result = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(result?.error || "Message could not be sent.");
      }

      setStatus("success");
      setSelectedFileName("");
      form.reset();
    } catch (error) {
      console.error("Contact form submission failed", error);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <CheckCircle className="w-14 h-14 text-midnight" />
        <h3 className="text-xl font-bold text-gray-900">Message Sent!</h3>
        <p className="text-gray-500 max-w-sm">
          Thanks for reaching out. We&apos;ll review your request and get back to you
          within 1 business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm text-midnight underline hover:no-underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Smith"
            className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-midnight/40 focus:bg-white focus:ring-4 focus:ring-midnight/10"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-700">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(561) 727-7495"
            className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-midnight/40 focus:bg-white focus:ring-4 focus:ring-midnight/10"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="jane@example.com"
          className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-midnight/40 focus:bg-white focus:ring-4 focus:ring-midnight/10"
        />
      </div>

      <div>
        <label htmlFor="projectType" className="mb-2 block text-sm font-medium text-slate-700">
          Project Type <span className="text-red-500">*</span>
        </label>
        <select
          id="projectType"
          name="projectType"
          required
          className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-midnight/40 focus:bg-white focus:ring-4 focus:ring-midnight/10"
        >
          <option value="">Select a project type...</option>
          {projectTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
          Project Details <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project — location, scope, timeline, budget range..."
          className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-midnight/40 focus:bg-white focus:ring-4 focus:ring-midnight/10"
        />
      </div>

      <div>
        <label htmlFor="photo" className="mb-2 block text-sm font-medium text-slate-700">
          Project Photo <span className="font-normal text-slate-400">(optional)</span>
        </label>
        <label className="flex cursor-pointer items-center justify-between gap-3 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-700 transition hover:border-midnight/50 hover:bg-white hover:shadow-sm">
          <span className="flex min-w-0 items-center gap-2">
            <Upload className="h-4 w-4 shrink-0 text-midnight" />
            <span className="truncate">{selectedFileName || "Upload a photo of the space"}</span>
          </span>
          <span className="shrink-0 rounded-lg border border-midnight/15 bg-white px-2.5 py-1.5 text-[11px] font-semibold text-midnight transition-colors hover:bg-midnight hover:text-white">
            Browse
          </span>
          <input
            id="photo"
            name="photo"
            type="file"
            accept="image/*"
            capture="environment"
            className="hidden"
            onChange={(event) => setSelectedFileName(event.target.files?.[0]?.name ?? "")}
          />
        </label>
        <p className="mt-1 text-xs text-slate-500">PNG, JPG, WEBP, GIF, or HEIC up to 10 MB</p>
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>
            Something went wrong. Please try again or email us directly at{" "}
            <a href="mailto:info@blueridge.construction" className="font-medium underline hover:no-underline">
              info@blueridge.construction
            </a>
            .
          </span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex w-full items-center justify-center gap-2 rounded-xl border border-midnight/15 bg-white px-5 py-3.5 text-base font-semibold text-midnight shadow-[0_18px_35px_rgba(11,31,53,0.12)] transition hover:bg-midnight hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? (
          "Sending..."
        ) : (
          <>
            Send Message <Send className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
