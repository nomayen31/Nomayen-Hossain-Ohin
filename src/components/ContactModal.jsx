
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle, Loader2, AlertCircle, User, Mail, Briefcase, DollarSign, ArrowRight, ArrowLeft } from 'lucide-react';

const ContactModal = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: 'Web Development',
        budget: '< $500',
        message: ''
    });
    const [status, setStatus] = useState('idle');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleServiceSelect = (service) => {
        setFormData({ ...formData, service });
    };

    const handleBudgetSelect = (budget) => {
        setFormData({ ...formData, budget });
    };

    const nextStep = () => setStep(2);
    const prevStep = () => setStep(1);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // CRITICAL: Only allow submission on Step 2
        if (step !== 2) {
            // If on Step 1, advance to Step 2
            if (step === 1 && formData.name && formData.email) {
                nextStep();
            }
            return;
        }

        // Prevent double-submission
        if (isSubmitting || status === 'loading') {
            return;
        }

        setIsSubmitting(true);
        setStatus('loading');

        try {
            const scriptURL = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL;

            if (!scriptURL) {
                throw new Error("Script URL not configured.");
            }

            // Combine data into the message field so existing backend setup works perfectly
            const finalMessage = `
📌 *Service:* ${formData.service}
💰 *Budget:* ${formData.budget}

📝 *Message:*
${formData.message}
            `.trim();

            const data = new FormData();
            data.append('name', formData.name);
            data.append('email', formData.email);
            data.append('message', finalMessage);

            await fetch(scriptURL, {
                method: 'POST',
                mode: 'no-cors',
                body: data
            });

            setStatus('success');
            setTimeout(() => {
                onClose();
                setStatus('idle');
                setIsSubmitting(false);
                setStep(1);
                setFormData({
                    name: '',
                    email: '',
                    service: 'Web Development',
                    budget: '< $500',
                    message: ''
                });
            }, 3000);

        } catch (error) {
            console.error('Submission Error:', error);
            setStatus('error');
            setIsSubmitting(false);
        }
    };

    const services = ['Web Development', 'App Development', 'UI/UX Design', 'Other'];
    const budgets = ['< $500', '$500 - $1k', '$1k - $5k', '> $5k'];

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="relative w-full max-w-lg bg-[#1a0b2e] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="flex justify-between items-center p-6 border-b border-white/5 bg-white/5">
                        <div className="flex flex-col">
                            <h3 className="text-xl font-bold text-white">Let's Build Something</h3>
                            <span className="text-xs text-blue-400 font-medium tracking-wider uppercase mt-1">
                                Step {step} of 2
                            </span>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-1 bg-white/5">
                        <motion.div
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                            initial={{ width: "50%" }}
                            animate={{ width: step === 1 ? "50%" : "100%" }}
                        />
                    </div>

                    {/* Body */}
                    <div className="p-6 overflow-y-auto custom-scrollbar">
                        {status === 'success' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center py-8 text-center space-y-4"
                            >
                                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20">
                                    <Send className="w-10 h-10 text-green-500" />
                                </div>
                                <h4 className="text-2xl font-bold text-white">Request Sent!</h4>
                                <p className="text-gray-400 max-w-xs mx-auto">
                                    Thanks for sharing your details. I'll get back to you shortly via Telegram or Email.
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <AnimatePresence mode="wait">
                                    {step === 1 ? (
                                        <motion.div
                                            key="step1"
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            exit={{ x: -20, opacity: 0 }}
                                            className="space-y-4"
                                        >
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                                                    <User className="w-4 h-4 text-blue-400" /> Your Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                                                    <Mail className="w-4 h-4 text-purple-400" /> Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600"
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="step2"
                                            initial={{ x: 20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            exit={{ x: 20, opacity: 0 }}
                                            className="space-y-6"
                                        >
                                            {/* Services */}
                                            <div className="space-y-3">
                                                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                                                    <Briefcase className="w-4 h-4 text-pink-400" /> What do you need?
                                                </label>
                                                <div className="grid grid-cols-2 gap-2">
                                                    {services.map((s) => (
                                                        <button
                                                            key={s}
                                                            type="button"
                                                            onClick={() => handleServiceSelect(s)}
                                                            className={`p-3 text-sm rounded-lg border transition-all text-left ${formData.service === s
                                                                ? 'bg-blue-600/20 border-blue-500 text-white shadow-lg shadow-blue-500/10'
                                                                : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/30'
                                                                }`}
                                                        >
                                                            {s}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Budget */}
                                            <div className="space-y-3">
                                                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                                                    <DollarSign className="w-4 h-4 text-green-400" /> Estimated Budget
                                                </label>
                                                <div className="flex flex-wrap gap-2">
                                                    {budgets.map((b) => (
                                                        <button
                                                            key={b}
                                                            type="button"
                                                            onClick={() => handleBudgetSelect(b)}
                                                            className={`px-4 py-2 text-sm rounded-full border transition-all ${formData.budget === b
                                                                ? 'bg-green-600/20 border-green-500 text-white shadow-lg shadow-green-500/10'
                                                                : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/30'
                                                                }`}
                                                        >
                                                            {b}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Message */}
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-300">Additional Details</label>
                                                <textarea
                                                    name="message"
                                                    required
                                                    rows="3"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none placeholder:text-gray-600"
                                                    placeholder="Tell me more about your project..."
                                                ></textarea>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Error Message */}
                                {status === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 p-3 rounded-lg border border-red-500/20"
                                    >
                                        <AlertCircle className="w-4 h-4" />
                                        <span>Failed to send. Please check your connection.</span>
                                    </motion.div>
                                )}

                                {/* Navigation */}
                                <div className="flex gap-3 pt-2">
                                    {step === 2 && (
                                        <button
                                            type="button"
                                            onClick={prevStep}
                                            className="px-6 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold hover:bg-white/10 transition-all"
                                        >
                                            <ArrowLeft className="w-5 h-5" />
                                        </button>
                                    )}

                                    {step === 1 ? (
                                        <button
                                            type="button"
                                            onClick={nextStep}
                                            disabled={!formData.name || !formData.email}
                                            className="flex-1 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-blue-500/20 hover:scale-[1.02] transition-all disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2"
                                        >
                                            Next Step
                                            <ArrowRight className="w-5 h-5" />
                                        </button>
                                    ) : (
                                        <button
                                            type="submit"
                                            disabled={status === 'loading'}
                                            className="flex-1 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-green-500/20 hover:scale-[1.02] transition-all disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2"
                                        >
                                            {status === 'loading' ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Submit Request
                                                    <Send className="w-5 h-5" />
                                                </>
                                            )}
                                        </button>
                                    )}
                                </div>
                            </form>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ContactModal;
