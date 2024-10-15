import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "How quickly can you respond to a water damage emergency?",
      answer: "We offer 24/7 emergency services and aim to respond within 60-90 minutes of your call, depending on your location."
    },
    {
      question: "Do you work with insurance companies?",
      answer: "Yes, we work directly with all major insurance companies to handle claims and ensure a smooth restoration process for our clients."
    },
    {
      question: "How long does the water damage restoration process take?",
      answer: "The duration varies depending on the extent of the damage. Minor cases might be resolved in a few days, while more severe cases could take several weeks. We'll provide a detailed timeline after our initial assessment."
    },
    {
      question: "Can you remove mold caused by water damage?",
      answer: "Absolutely. We offer comprehensive mold remediation services as part of our water damage restoration process."
    },
    {
      question: "What areas do you serve?",
      answer: "We serve the entire Tri-State area, including New York City, Long Island, Westchester, New Jersey, and Connecticut."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl">Find answers to common questions about our water damage restoration services</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  className="flex justify-between items-center w-full text-left font-semibold py-4 px-6 bg-gray-100 hover:bg-gray-200 rounded-lg transition duration-300"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="mt-2 py-4 px-6 bg-white rounded-lg">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl mb-8">Our team is here to help. Contact us for personalized assistance.</p>
          <a href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-full text-lg transition duration-300">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;