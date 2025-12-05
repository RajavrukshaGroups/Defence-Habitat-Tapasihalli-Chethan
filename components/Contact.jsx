import React, { useState } from "react";
import Section from "./Section";
import { Phone, Mail, Clock, MapPin, Send, Map as MapIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [isMapInteractive, setIsMapInteractive] = useState(false);

  // form state
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState({ loading: false, ok: null, msg: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const validate = () => {
    if (!form.firstName.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({
        loading: false,
        ok: false,
        msg: "Please fill required fields.",
      });
      return false;
    }
    // basic email check
    const re = /\S+@\S+\.\S+/;
    if (!re.test(form.email)) {
      setStatus({
        loading: false,
        ok: false,
        msg: "Please enter a valid email.",
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, ok: null, msg: "" });

    if (!validate()) return;

    try {
      // adjust URL depending on how you mount router:
      // if router mounted at '/api' -> use '/api/dhsChethan-email-contact'
      // otherwise use '/dhsChethan-email-contact'
      const endpoint =
        // "http://localhost:4000/dhs-tapasihalli-new-chethan/dhsChethan-email-contact";
        "https://adminpanel.defencehousingsociety.com/dhs-tapasihalli-new-chethan/dhsChethan-email-contact"; // change if needed

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus({
          loading: false,
          ok: true,
          msg: "Message sent. Thank you!",
        });
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error(data?.message || "Failed to send");
      }
    } catch (err) {
      console.error(err);
      setStatus({
        loading: false,
        ok: false,
        msg: err.message || "Error sending message.",
      });
    }
  };

  return (
    <Section id="contact" className="bg-slate-100">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Contact Info (unchanged) */}
        <div className="lg:w-5/12">
          <h2 className="text-4xl font-serif font-bold text-navy-900 mb-6">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-gold-400 mb-8"></div>
          <p className="text-slate-600 mb-10">
            For any queries, please fill out the form, and our team will get in
            touch with you shortly.
          </p>

          <div className="space-y-8">
            {/* ... your contact info items unchanged ... */}
            <div className="flex items-start gap-4">
              <div className="bg-white p-3 shadow-md rounded-full text-gold-400">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-navy-900 font-bold text-lg">Visit Us</h4>
                <p className="text-slate-600">
                  Defence Habitat Housing Co-Operative Society Ltd.
                  <br />
                  Behind Swathi Garden Hotel, E Block, Sahakarnagar,
                  <br />
                  Bangalore - 560092
                </p>
              </div>
            </div>
            {/* phone, timings, email blocks ... */}
                 <div className="flex items-start gap-4">
              <div className="bg-white p-3 shadow-md rounded-full text-gold-400">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-navy-900 font-bold text-lg">Call Us</h4>
                <p className="text-slate-600">+91-8188992266</p>
                {/* <p className="text-slate-600">+91-8188992266</p> */}
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white p-3 shadow-md rounded-full text-gold-400">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="text-navy-900 font-bold text-lg">Office Timings</h4>
                <p className="text-slate-600">Wednesday to Monday: 9:30 AM - 6:30 PM</p>
                <p className="text-red-500 text-sm">Weekly Off: Tuesday</p>
              </div>
            </div>
            
             <div className="flex items-start gap-4">
              {/* <div className="bg-white p-3 shadow-md rounded-full text-gold-400">
                <Mail size={24} />
              </div> */}
            <div className="flex items-start gap-4">
              <div className="bg-white p-3 shadow-md rounded-full text-gold-400">
                <Mail size={24} />
              </div>
              <div>
                 <h4 className="text-navy-900 font-bold text-lg">Email</h4>
                <p className="text-slate-600">info.raj@defencehousingsociety.com</p>
                </div>
               
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-7/12">
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-2xl border-t-4 border-gold-400">
            <h3 className="text-2xl font-serif font-bold text-navy-900 mb-6">
              Send Message
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    First Name*
                  </label>
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    type="text"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition-all"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Last Name
                  </label>
                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    type="text"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Email Address*
                  </label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    type="tel"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Message*
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition-all"
                  placeholder="I'm interested in this project..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className="w-full bg-navy-900 text-white font-bold py-4 rounded-sm hover:bg-navy-800 transition-colors flex items-center justify-center gap-2 group"
              >
                <span>{status.loading ? "Sending..." : "Submit Enquiry"}</span>
                <Send
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              {status.ok === true && (
                <p className="text-green-600 mt-2">{status.msg}</p>
              )}
              {status.ok === false && (
                <p className="text-red-600 mt-2">{status.msg}</p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Map Embed (unchanged) */}
      <div className="mt-16 w-full h-80 md:h-96 bg-slate-200 rounded-sm overflow-hidden shadow-xl border-4 border-white relative group">
        <iframe
          title="Defence Habitat Location"
          src="https://maps.google.com/maps?q=Defence%20Habitat%20Housing%20Co-Operative%20Society%20Ltd%2C%20Sahakarnagar&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={`transition-all duration-700 ${
            isMapInteractive
              ? "opacity-100 grayscale-0"
              : "opacity-40 grayscale-[0.5] scale-100"
          }`}
        ></iframe>

        <AnimatePresence>
          {!isMapInteractive && (
            <motion.div
              className="absolute inset-0 bg-navy-900/10 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer z-10"
              onClick={() => setIsMapInteractive(true)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* marker + button */}
              <div className="relative mb-4">
                <motion.div
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-gold-400 rounded-full opacity-50"
                  animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeOut",
                  }}
                />
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                  className="drop-shadow-2xl"
                >
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z"
                      fill="#0f3460"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                    <circle cx="12" cy="9" r="3.5" fill="#d4af37" />
                  </svg>
                </motion.div>
              </div>

              <motion.button
                className="px-8 py-3 bg-white text-navy-900 font-bold text-sm uppercase tracking-widest rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.2)] border-2 border-gold-400 hover:bg-gold-400 hover:text-white transition-all duration-300 flex items-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MapIcon
                  size={16}
                  className="text-gold-400 group-hover:text-white transition-colors"
                />
                Explore Map
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
};

export default Contact;
