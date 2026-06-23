'use client';

import React, { useState } from 'react';

export default function WorkshopForm({ onRegister }: { onRegister?: (data: any) => void }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setIsSubmitting(false);
    onRegister?.({ name, phone, email });
    setName('');
    setPhone('');
    setEmail('');
    alert('Registered for workshop. We will contact you soon.');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" className="w-full px-3 py-2 border border-border rounded" />
      <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" className="w-full px-3 py-2 border border-border rounded" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full px-3 py-2 border border-border rounded" />
      <button type="submit" className="btn btn-accent w-full">{isSubmitting ? 'Registering...' : 'Register'}</button>
    </form>
  );
}
