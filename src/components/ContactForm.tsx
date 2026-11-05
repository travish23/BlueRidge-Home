"use client";

import { useEffect, useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { useForm, ValidationError } from '@formspree/react';

const projectTypes = [
  "Residential Renovation",
  "Custom New Build",
  "Kitchen Remodel",
  "Bathroom Remodel",
  "Addition / Extension",
  "Other",
];

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xkjorbnq");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (!state.succeeded) return;

    setShowSuccess(true);
    const timeout = window.setTimeout(() => setShowSuccess(false), 5000);
    return () => window.clearTimeout(timeout);
  }, [state.succeeded]);


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
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <ValidationError 
        prefix="Full Name" 
        field="name"
        errors={state.errors}
      />
      <ValidationError 
        prefix="Project Type" 
        field="projectType"
        errors={state.errors}
      />
      <ValidationError 
        prefix="Project Details" 
        field="message"
        errors={state.errors}
      />

      <div>
        <label htmlFor="projectType" className="mb-2 block text-sm font-medium text-slate-700">
          Project Type
        </label>
        <select
          id="projectType"
          name="projectType"
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
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your project — location, scope, timeline, budget range..."
          className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-midnight/40 focus:bg-white focus:ring-4 focus:ring-midnight/10"
        />
      </div>

      {state.errors && (
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

      {showSuccess && (
        <div role="status" className="flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
          <CheckCircle className="h-4 w-4 shrink-0" />
          <span>Your message was sent successfully. We’ll be in touch soon.</span>
        </div>
      )}

      <button
        type="submit"
        disabled={state.submitting}
        className="flex w-full items-center justify-center gap-2 rounded-xl border border-midnight/15 bg-white px-5 py-3.5 text-base font-semibold text-midnight shadow-[0_18px_35px_rgba(11,31,53,0.12)] transition hover:bg-midnight hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state.submitting ? (
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
