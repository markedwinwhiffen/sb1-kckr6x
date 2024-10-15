import React from 'react';
import { Users, Target, ThumbsUp } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About WaterGuard Restoration</h1>
          <p className="text-xl">Your Trusted Partner in Water Damage Restoration</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="mb-4">
                Founded in 2005, WaterGuard Restoration has been at the forefront of water damage restoration for over 15 years. Our journey began with a simple mission: to provide fast, reliable, and high-quality restoration services to homeowners and businesses in their time of need.
              </p>
              <p>
                Today, we're proud to be one of the most trusted names in the industry, known for our expertise, cutting-edge technology, and unwavering commitment to customer satisfaction.
              </p>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="WaterGuard Restoration Team" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="mx-auto h-16 w-16 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Customer-Centric Approach</h3>
              <p>We put our customers first, ensuring their needs are met with empathy and professionalism.</p>
            </div>
            <div className="text-center">
              <Target className="mx-auto h-16 w-16 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Excellence in Service</h3>
              <p>We strive for excellence in every aspect of our work, from initial assessment to final restoration.</p>
            </div>
            <div className="text-center">
              <ThumbsUp className="mx-auto h-16 w-16 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Integrity & Trust</h3>
              <p>We build lasting relationships with our clients based on honesty, transparency, and reliability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="John Doe" className="w-48 h-48 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="text-center">
              <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Jane Smith" className="w-48 h-48 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-gray-600">Lead Restoration Specialist</p>
            </div>
            <div className="text-center">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Mike Johnson" className="w-48 h-48 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-semibold">Mike Johnson</h3>
              <p className="text-gray-600">Customer Service Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Certifications</h2>
          <div className="flex justify-center space-x-8">
            <img src="https://via.placeholder.com/150x150.png?text=IICRC+Certified" alt="IICRC Certified" className="h-24" />
            <img src="https://via.placeholder.com/150x150.png?text=EPA+Lead-Safe" alt="EPA Lead-Safe Certified" className="h-24" />
            <img src="https://via.placeholder.com/150x150.png?text=BBB+A+" alt="BBB A+ Rated" className="h-24" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;