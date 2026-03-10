import { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Smartphone, Building2, Send } from "lucide-react";
import { toast } from "sonner";

const paymentMethods = [
  {
    icon: Building2,
    title: "Bank Transfer",
    details: ["Bank: Centenary Bank", "Account Name: Tumzart Creations", "Account No: 3204711497"],
  },
  {
    icon: Smartphone,
    title: "Mobile Money",
    details: ["MTN MoMo: 0764463347",  "Airtel Money: 0709776109"],
  },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", medium: "", message: "", company: "" });
  const [referenceImage, setReferenceImage] = useState<File | null>(null);
  const [referencePreview, setReferencePreview] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    if (!referenceImage) {
      setReferencePreview("");
      return;
    }

    const objectUrl = URL.createObjectURL(referenceImage);
    setReferencePreview(objectUrl);

    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [referenceImage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0] ?? null;

    if (!selected) {
      setReferenceImage(null);
      return;
    }

    if (!selected.type.startsWith("image/")) {
      setSubmitError("Please upload an image file only.");
      e.target.value = "";
      return;
    }

    const maxSizeBytes = 10 * 1024 * 1024;
    if (selected.size > maxSizeBytes) {
      setSubmitError("Image is too large. Please upload a file under 10MB.");
      e.target.value = "";
      return;
    }

    setSubmitError("");
    setReferenceImage(selected);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (form.company.trim()) {
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(form.email.trim())) {
      setSubmitError("Please enter a valid email address.");
      return;
    }

    setIsSending(true);

    try {
      const payload = new FormData();
      payload.append("name", form.name);
      payload.append("email", form.email);
      payload.append("medium", form.medium);
      payload.append("message", form.message);
      payload.append("_subject", `New portrait inquiry from ${form.name}`);
      if (referenceImage) {
        payload.append("attachment", referenceImage);
      }

      const response = await fetch("https://formsubmit.co/ajax/tumzartportraits1@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: payload,
      });

      if (!response.ok) {
        throw new Error("Failed to send inquiry");
      }

      setSubmitted(true);
      setForm({ name: "", email: "", medium: "", message: "", company: "" });
      setReferenceImage(null);
      toast.success("Inquiry sent successfully.");
    } catch (error) {
      setSubmitError("Could not send your inquiry right now. Please try again or contact me directly.");
      toast.error("Inquiry could not be sent. Please try again.");
      console.error(error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-charcoal-mid">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-12 bg-gold opacity-50" />
            <span className="text-gold text-xs tracking-[0.4em] uppercase font-sans">Get In Touch</span>
            <div className="h-px w-12 bg-gold opacity-50" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-4">Commission a Portrait</h2>
          <p className="text-cream-dim font-serif-light text-lg italic">Begin your legacy today</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Form */}
          <div>
            <h3 className="font-display text-2xl text-cream mb-8">Send an Inquiry</h3>

            {submitted ? (
              <div className="border border-gold p-8 text-center">
                <div className="w-16 h-16 border border-gold flex items-center justify-center mx-auto mb-4">
                  <Send className="w-7 h-7 text-gold" />
                </div>
                <h4 className="font-display text-xl text-cream mb-2">Message Received!</h4>
                <p className="text-cream-dim text-sm font-sans">
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="company"
                  autoComplete="off"
                  tabIndex={-1}
                  value={form.company}
                  onChange={handleChange}
                  className="absolute left-[-9999px] opacity-0 pointer-events-none"
                  aria-hidden="true"
                />

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-cream-dim text-xs tracking-widest uppercase font-sans mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-charcoal-light border border-border text-cream px-4 py-3 text-sm font-sans placeholder:text-cream-dim/40 focus:outline-none focus:border-gold transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-cream-dim text-xs tracking-widest uppercase font-sans mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$"
                      className="w-full bg-charcoal-light border border-border text-cream px-4 py-3 text-sm font-sans placeholder:text-cream-dim/40 focus:outline-none focus:border-gold transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-cream-dim text-xs tracking-widest uppercase font-sans mb-2">Medium</label>
                  <select
                    name="medium"
                    required
                    value={form.medium}
                    onChange={handleChange}
                    className="w-full bg-charcoal-light border border-border text-cream px-4 py-3 text-sm font-sans focus:outline-none focus:border-gold transition-colors"
                  >
                    <option value="" className="text-cream-dim">Select a medium...</option>
                    <option value="pencil">Pencil Sketch</option>
                    <option value="pen">Pen Drawing</option>
                    <option value="digital">Digital Portrait</option>
                  </select>
                </div>

                <div>
                  <label className="block text-cream-dim text-xs tracking-widest uppercase font-sans mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-charcoal-light border border-border text-cream px-4 py-3 text-sm font-sans placeholder:text-cream-dim/40 focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Describe your commission (size, number of subjects, occasion, etc.)"
                  />
                </div>

                <div>
                  <label className="block text-cream-dim text-xs tracking-widest uppercase font-sans mb-2">
                    Attach Reference Image (Optional)
                  </label>
                  <input
                    type="file"
                    name="attachment"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full bg-charcoal-light border border-border text-cream px-4 py-3 text-sm font-sans file:mr-4 file:py-2 file:px-3 file:border-0 file:bg-gold file:text-charcoal-deep file:text-xs file:tracking-widest file:uppercase file:font-semibold hover:file:bg-gold-glow"
                  />
                  <p className="mt-2 text-cream-dim text-xs font-sans">
                    Accepted: JPG, PNG, WEBP up to 10MB.
                  </p>
                  {referenceImage && (
                    <p className="mt-1 text-gold text-xs font-sans">Selected: {referenceImage.name}</p>
                  )}
                  {referencePreview && (
                    <div className="mt-3 inline-flex flex-col items-start gap-2">
                      <p className="text-cream-dim text-xs font-sans">Preview</p>
                      <img
                        src={referencePreview}
                        alt="Reference preview"
                        className="w-28 h-28 object-cover border border-gold/40 bg-charcoal-light"
                      />
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-4 bg-gold text-charcoal-deep font-sans text-sm tracking-widest uppercase font-semibold hover:bg-gold-glow transition-all duration-300 shadow-gold flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  {isSending ? "Sending..." : "Send Inquiry"}
                </button>

                {submitError && (
                  <p className="text-sm text-cream-dim border border-border px-4 py-3">{submitError}</p>
                )}
              </form>
            )}

            {/* Direct Contact */}
            <div className="mt-10 space-y-4 pt-8 border-t border-border">
              <p className="text-cream-dim text-xs tracking-widest uppercase font-sans mb-4">Or reach out directly</p>
              {[
                { Icon: Phone, label: "+256 709 776109" },
                { Icon: Mail, label: "tumzartportraits1@gmail.com" },
                { Icon: MapPin, label: "Kampala, Uganda" },
              ].map(({ Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <Icon className="w-4 h-4 text-gold flex-shrink-0" />
                  <span className="text-cream-dim text-sm font-sans">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Payment Details */}
          <div>
            <h3 className="font-display text-2xl text-cream mb-8">Payment Details</h3>

            <div className="space-y-6">
              {paymentMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <div key={method.title} className="border border-border bg-card p-6 hover:border-gold/40 transition-colors duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 border border-gold/30 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-gold" />
                      </div>
                      <h4 className="font-display text-lg text-cream">{method.title}</h4>
                    </div>
                    <ul className="space-y-2">
                      {method.details.map((d) => (
                        <li key={d} className="text-cream-dim text-sm font-sans flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* Payment note */}
            <div className="mt-6 p-5 border border-gold/20 bg-gold/5">
              <p className="text-cream-dim text-xs font-sans leading-relaxed">
                <span className="text-gold font-semibold">Payment Policy:</span> A 50% deposit is required to begin your commission. 
                The remaining balance is due upon approval of the draft preview before final delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
