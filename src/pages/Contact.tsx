import { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Contact Us - ShopHub';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Get in touch with ShopHub.');
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const subject = String(formData.get('subject') || '').trim();
    const message = String(formData.get('message') || '').trim();
    if (!name || !email || !subject || !message) {
      setStatus('Please fill out all fields.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('Please enter a valid email.');
      return;
    }
    setSubmitting(true);
    setStatus(null);
    try {
      // Client-only demo: send to Formspree (replace with your endpoint)
      await fetch('https://formspree.io/f/mgegnjkn', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData,
      });
      setStatus('Thanks! Your message has been sent.');
      form.reset();
    } catch {
      setStatus('Something went wrong. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-muted-foreground mb-6">We typically reply within 1 business day.</p>
            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input name="name" placeholder="Your Name" aria-label="Your name" required />
                <Input type="email" name="email" placeholder="you@example.com" aria-label="Your email" required />
              </div>
              <Input name="subject" placeholder="Subject" aria-label="Subject" required />
              <Textarea name="message" placeholder="Your message" aria-label="Message" rows={6} required />
              <div className="flex items-center gap-4">
                <Button type="submit" disabled={submitting}>{submitting ? 'Sending…' : 'Send Message'}</Button>
                {status && <span role="status" className="text-sm text-muted-foreground">{status}</span>}
              </div>
            </form>
          </div>
          <aside className="space-y-6">
            <div className="rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop" alt="Contact ShopHub" className="w-full h-40 object-cover" loading="lazy" />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Our Office</h2>
              <p className="text-sm text-muted-foreground">123 Shopping St, City, State 12345</p>
              <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <iframe
                title="ShopHub Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086595993162!2d-122.4013766!3d37.7879949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d4b0b1c3%3A0x9a8df1d7b3d9c8b5!2sSalesforce%20Tower!5e0!3m2!1sen!2sus!4v1616622800000!5m2!1sen!2sus"
                width="100%"
                height="240"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">FAQ</h2>
              <Accordion type="single" collapsible>
                <AccordionItem value="shipping">
                  <AccordionTrigger>What are your shipping times?</AccordionTrigger>
                  <AccordionContent>Orders ship within 1-2 business days. Delivery typically takes 3-7 days.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="returns">
                  <AccordionTrigger>What is your return policy?</AccordionTrigger>
                  <AccordionContent>Returns are accepted within 30 days in original condition. Contact support for a label.</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;


