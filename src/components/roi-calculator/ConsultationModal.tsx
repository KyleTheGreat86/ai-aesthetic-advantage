
import React from 'react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  setName: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  phone: string;
  setPhone: (value: string) => void;
  message: string;
  setMessage: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  message,
  setMessage,
  onSubmit
}) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-eagle-dark rounded-xl shadow-xl p-8 max-w-lg w-full mx-4 border border-eagle-blue/30">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-eagle-blue">Request Your Free Consultation</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 font-medium mb-2" htmlFor="name">Your Name</label>
            <input 
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-white/20 bg-white/5 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-eagle-blue"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 font-medium mb-2" htmlFor="email">Your Email</label>
            <input 
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-white/20 bg-white/5 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-eagle-blue"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 font-medium mb-2" htmlFor="phone">Phone Number</label>
            <input 
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-white/20 bg-white/5 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-eagle-blue"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 font-medium mb-2" htmlFor="message">Additional Information</label>
            <textarea 
              id="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-white/20 bg-white/5 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-eagle-blue"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button 
              type="submit"
              className="bg-eagle-blue hover:bg-eagle-blue/90 text-white font-medium py-2 px-6 rounded-lg transition duration-200"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConsultationModal;
