import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Download, CheckCircle, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("VfbKXLeYYZQom8eKq");
  }, []);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = 'https://mail.google.com/mail/?view=cm&fs=1&to=khaufnaakofficial@gmail.com';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.custom((t) => (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 backdrop-blur-sm px-6 py-4 rounded-lg shadow-lg"
        >
          <XCircle className="w-5 h-5 text-red-400" />
          <span className="text-red-200">Please fill in all fields</span>
        </motion.div>
      ));
      return;
    }

    try {
      setIsSubmitting(true);
      
      const result = await emailjs.send(
        'service_rw2b2sg',
        'template_ownmxov',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Rahul Soni',
          reply_to: formData.email,
        }
      );

      if (result.status === 200) {
        toast.custom((t) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 backdrop-blur-sm px-6 py-4 rounded-lg shadow-lg"
          >
            <CheckCircle className="w-5 h-5 text-violet-400" />
            <span className="text-violet-200">Message sent successfully!</span>
          </motion.div>
        ));
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      toast.custom((t) => (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 backdrop-blur-sm px-6 py-4 rounded-lg shadow-lg"
        >
          <XCircle className="w-5 h-5 text-red-400" />
          <span className="text-red-200">Failed to send message. Please try again.</span>
        </motion.div>
      ));
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="min-h-screen py-20 relative section-transition contact-gradient">
      <Toaster 
        position="bottom-right"
        containerStyle={{
          bottom: 40,
          right: 20,
        }}
        toastOptions={{
          duration: 5000,
          style: {
            background: 'transparent',
            boxShadow: 'none',
            border: 'none',
            padding: 0,
          },
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I'm always open to new opportunities and interesting projects.
            Let's create something amazing together!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-violet-950/20 p-8 rounded-2xl backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <a
                href="#"
                onClick={handleEmailClick}
                className="flex items-center gap-4 text-gray-300 hover:text-violet-400 transition-colors"
              >
                <Mail className="w-6 h-6" />
                <span>rahulsact65930@gmail.com</span>
              </a>
              <a
                href="https://github.com/rahul100ni"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-violet-400 transition-colors"
              >
                <Github className="w-6 h-6" />
                <span>github.com/rahul100ni</span>
              </a>
              <a
                href="https://www.linkedin.com/in/rahul100ni"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-violet-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                <span>linkedin.com/in/rahul100ni</span>
              </a>
            </div>

            <div className="mt-8">
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-violet-950/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 border border-violet-500/10 hover:border-violet-500/20 transition-colors"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-violet-950/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 border border-violet-500/10 hover:border-violet-500/20 transition-colors"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={6}
                className="w-full px-4 py-3 bg-violet-950/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 border border-violet-500/10 hover:border-violet-500/20 transition-colors"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-3 bg-violet-600 hover:bg-violet-700 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
            >
              <span className="relative z-10">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600"
                initial={{ x: "100%" }}
                animate={isSubmitting ? { x: 0 } : { x: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;