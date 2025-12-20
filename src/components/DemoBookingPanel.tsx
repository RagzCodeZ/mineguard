import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DemoBookingPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const roleOptions = [
  "Underwriter",
  "Risk Manager / CRO",
  "Broker",
  "Mining company",
  "Other",
];

const siteCountOptions = ["<10", "10–50", "50–100", "100+"];

const preferredTimeOptions = ["This week", "Next week", "Flexible"];

export function DemoBookingPanel({ isOpen, onClose }: DemoBookingPanelProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    role: "",
    siteCount: "",
    preferredTime: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.company.trim()) newErrors.company = "Company is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    // Reset form after animation
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        company: "",
        role: "",
        siteCount: "",
        preferredTime: "",
        notes: "",
      });
      setErrors({});
    }, 300);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-[hsl(var(--dark-bg))]/80 backdrop-blur-sm z-50"
          />

          {/* Panel - Desktop: right slide, Mobile: bottom sheet */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-lg bg-[hsl(var(--dark-card))] border-l border-[hsl(var(--dark-border))] z-50 overflow-y-auto md:block hidden"
          >
            <div className="p-6 lg:p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-xl lg:text-2xl font-bold text-[hsl(210,20%,98%)]">
                    Book a 30‑minute MineGuard demo
                  </h2>
                </div>
                <button
                  onClick={handleClose}
                  className="w-10 h-10 rounded-lg bg-[hsl(var(--dark-bg))] flex items-center justify-center text-[hsl(210,20%,60%)] hover:text-[hsl(210,20%,90%)] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {!isSubmitted ? (
                <>
                  {/* Microcopy */}
                  <div className="mb-6 space-y-3">
                    <p className="text-sm text-[hsl(210,20%,70%)]">
                      We'll walk you through a live example of a dam failure, show how MineGuard
                      would have seen it months earlier, and answer any questions about fit and ROI.
                    </p>
                    <p className="text-sm text-[hsl(210,20%,50%)] italic">
                      No hard sell – just a 30‑minute conversation with the product.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-medium text-[hsl(210,20%,80%)] mb-1.5">
                        Full name <span className="text-[hsl(var(--alert-red))]">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg bg-[hsl(var(--dark-bg))] border ${
                          errors.fullName ? "border-[hsl(var(--alert-red))]" : "border-[hsl(var(--dark-border))]"
                        } text-[hsl(210,20%,98%)] placeholder:text-[hsl(210,20%,40%)] focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors`}
                        placeholder="Jane Smith"
                      />
                      {errors.fullName && (
                        <p className="text-xs text-[hsl(var(--alert-red))] mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Work Email */}
                    <div>
                      <label className="block text-sm font-medium text-[hsl(210,20%,80%)] mb-1.5">
                        Work email <span className="text-[hsl(var(--alert-red))]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg bg-[hsl(var(--dark-bg))] border ${
                          errors.email ? "border-[hsl(var(--alert-red))]" : "border-[hsl(var(--dark-border))]"
                        } text-[hsl(210,20%,98%)] placeholder:text-[hsl(210,20%,40%)] focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors`}
                        placeholder="jane@company.com"
                      />
                      {errors.email && (
                        <p className="text-xs text-[hsl(var(--alert-red))] mt-1">{errors.email}</p>
                      )}
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-sm font-medium text-[hsl(210,20%,80%)] mb-1.5">
                        Company <span className="text-[hsl(var(--alert-red))]">*</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg bg-[hsl(var(--dark-bg))] border ${
                          errors.company ? "border-[hsl(var(--alert-red))]" : "border-[hsl(var(--dark-border))]"
                        } text-[hsl(210,20%,98%)] placeholder:text-[hsl(210,20%,40%)] focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors`}
                        placeholder="Acme Insurance"
                      />
                      {errors.company && (
                        <p className="text-xs text-[hsl(var(--alert-red))] mt-1">{errors.company}</p>
                      )}
                    </div>

                    {/* Role */}
                    <div>
                      <label className="block text-sm font-medium text-[hsl(210,20%,80%)] mb-1.5">
                        Role
                      </label>
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-[hsl(var(--dark-bg))] border border-[hsl(var(--dark-border))] text-[hsl(210,20%,98%)] focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-[hsl(var(--dark-bg))]">Select your role</option>
                        {roleOptions.map((role) => (
                          <option key={role} value={role} className="bg-[hsl(var(--dark-bg))]">
                            {role}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Sites Count */}
                    <div>
                      <label className="block text-sm font-medium text-[hsl(210,20%,80%)] mb-1.5">
                        Number of sites you insure or monitor
                      </label>
                      <select
                        name="siteCount"
                        value={formData.siteCount}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-[hsl(var(--dark-bg))] border border-[hsl(var(--dark-border))] text-[hsl(210,20%,98%)] focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-[hsl(var(--dark-bg))]">Select range</option>
                        {siteCountOptions.map((count) => (
                          <option key={count} value={count} className="bg-[hsl(var(--dark-bg))]">
                            {count}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Preferred Time */}
                    <div>
                      <label className="block text-sm font-medium text-[hsl(210,20%,80%)] mb-1.5">
                        Preferred time for a call
                      </label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-[hsl(var(--dark-bg))] border border-[hsl(var(--dark-border))] text-[hsl(210,20%,98%)] focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-[hsl(var(--dark-bg))]">Select preference</option>
                        {preferredTimeOptions.map((time) => (
                          <option key={time} value={time} className="bg-[hsl(var(--dark-bg))]">
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Notes */}
                    <div>
                      <label className="block text-sm font-medium text-[hsl(210,20%,80%)] mb-1.5">
                        Anything specific you'd like us to show?
                      </label>
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg bg-[hsl(var(--dark-bg))] border border-[hsl(var(--dark-border))] text-[hsl(210,20%,98%)] placeholder:text-[hsl(210,20%,40%)] focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors resize-none"
                        placeholder="E.g., specific risk scenarios, integration questions, pricing..."
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                          Submitting...
                        </span>
                      ) : (
                        <>
                          Submit & request demo
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </form>
                </>
              ) : (
                /* Success State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(210,20%,98%)] mb-3">
                    Thanks – your demo request is in.
                  </h3>
                  <p className="text-[hsl(210,20%,70%)] mb-8 max-w-sm mx-auto">
                    We'll email you shortly to confirm a time and send a calendar invite. If you
                    don't see an email within 24 hours, check spam or contact us directly.
                  </p>
                  <Button variant="hero-outline" size="lg" onClick={handleClose}>
                    Back to site
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Mobile: Bottom Sheet */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 max-h-[90vh] bg-[hsl(var(--dark-card))] border-t border-[hsl(var(--dark-border))] rounded-t-2xl z-50 overflow-y-auto md:hidden"
          >
            {/* Handle */}
            <div className="sticky top-0 bg-[hsl(var(--dark-card))] pt-3 pb-2 flex justify-center">
              <div className="w-10 h-1 rounded-full bg-[hsl(var(--dark-border))]" />
            </div>

            <div className="p-5 pb-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-5">
                <h2 className="text-lg font-bold text-[hsl(210,20%,98%)]">
                  Book a 30‑minute demo
                </h2>
                <button
                  onClick={handleClose}
                  className="w-8 h-8 rounded-lg bg-[hsl(var(--dark-bg))] flex items-center justify-center text-[hsl(210,20%,60%)]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {!isSubmitted ? (
                <>
                  {/* Microcopy */}
                  <p className="text-sm text-[hsl(210,20%,70%)] mb-5">
                    We'll walk you through a live example of a dam failure and answer your questions.
                  </p>

                  {/* Mobile Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-medium text-[hsl(210,20%,80%)] mb-1">
                        Full name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2.5 rounded-lg bg-[hsl(var(--dark-bg))] border ${
                          errors.fullName ? "border-[hsl(var(--alert-red))]" : "border-[hsl(var(--dark-border))]"
                        } text-[hsl(210,20%,98%)] text-sm focus:outline-none focus:ring-2 focus:ring-primary/50`}
                        placeholder="Jane Smith"
                      />
                      {errors.fullName && (
                        <p className="text-xs text-[hsl(var(--alert-red))] mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Work Email */}
                    <div>
                      <label className="block text-sm font-medium text-[hsl(210,20%,80%)] mb-1">
                        Work email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2.5 rounded-lg bg-[hsl(var(--dark-bg))] border ${
                          errors.email ? "border-[hsl(var(--alert-red))]" : "border-[hsl(var(--dark-border))]"
                        } text-[hsl(210,20%,98%)] text-sm focus:outline-none focus:ring-2 focus:ring-primary/50`}
                        placeholder="jane@company.com"
                      />
                      {errors.email && (
                        <p className="text-xs text-[hsl(var(--alert-red))] mt-1">{errors.email}</p>
                      )}
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-sm font-medium text-[hsl(210,20%,80%)] mb-1">
                        Company *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2.5 rounded-lg bg-[hsl(var(--dark-bg))] border ${
                          errors.company ? "border-[hsl(var(--alert-red))]" : "border-[hsl(var(--dark-border))]"
                        } text-[hsl(210,20%,98%)] text-sm focus:outline-none focus:ring-2 focus:ring-primary/50`}
                        placeholder="Acme Insurance"
                      />
                      {errors.company && (
                        <p className="text-xs text-[hsl(var(--alert-red))] mt-1">{errors.company}</p>
                      )}
                    </div>

                    {/* Role */}
                    <div>
                      <label className="block text-sm font-medium text-[hsl(210,20%,80%)] mb-1">
                        Role
                      </label>
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2.5 rounded-lg bg-[hsl(var(--dark-bg))] border border-[hsl(var(--dark-border))] text-[hsl(210,20%,98%)] text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none"
                      >
                        <option value="" className="bg-[hsl(var(--dark-bg))]">Select your role</option>
                        {roleOptions.map((role) => (
                          <option key={role} value={role} className="bg-[hsl(var(--dark-bg))]">
                            {role}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Sites */}
                    <div>
                      <label className="block text-sm font-medium text-[hsl(210,20%,80%)] mb-1">
                        Number of sites
                      </label>
                      <select
                        name="siteCount"
                        value={formData.siteCount}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2.5 rounded-lg bg-[hsl(var(--dark-bg))] border border-[hsl(var(--dark-border))] text-[hsl(210,20%,98%)] text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none"
                      >
                        <option value="" className="bg-[hsl(var(--dark-bg))]">Select range</option>
                        {siteCountOptions.map((count) => (
                          <option key={count} value={count} className="bg-[hsl(var(--dark-bg))]">
                            {count}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full mt-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit & request demo"}
                    </Button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-[hsl(210,20%,98%)] mb-2">
                    Demo request received!
                  </h3>
                  <p className="text-sm text-[hsl(210,20%,70%)] mb-6">
                    We'll email you shortly to confirm a time.
                  </p>
                  <Button variant="hero-outline" onClick={handleClose}>
                    Back to site
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
