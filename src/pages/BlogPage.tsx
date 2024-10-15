import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      title: "5 Essential Steps to Take Immediately After Water Damage",
      excerpt: "Discover the crucial actions you need to take in the first 24 hours after water damage to minimize long-term effects and protect your property.",
      author: "John Doe",
      date: "May 15, 2023",
      image: "https://images.unsplash.com/photo-1525438160292-a4a860951216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "The Hidden Dangers of Untreated Water Damage",
      excerpt: "Learn about the potential health risks and structural issues that can arise from neglecting water damage in your home or business.",
      author: "Jane Smith",
      date: "April 28, 2023",
      image: "https://images.unsplash.com/photo-1578662996442-48f1845937b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "How to Prevent Mold Growth After Water Damage",
      excerpt: "Explore effective strategies to stop mold in its tracks and keep your property safe and healthy following water damage incidents.",
      author: "Mike Johnson",
      date: "April 10, 2023",
      image: "https://images.unsplash.com/photo-1585864431232-4ce6b262edba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Understanding Your Insurance Coverage for Water Damage",
      excerpt: "Navigate the complexities of insurance claims with our comprehensive guide to water damage coverage and how to maximize your benefits.",
      author: "Sarah Lee",
      date: "March 22, 2023",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "The Latest Technologies in Water Damage Restoration",
      excerpt: "Discover how cutting-edge equipment and innovative techniques are revolutionizing the water damage restoration industry.",
      author: "David Chen",
      date: "March 5, 2023",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Preparing Your Home for the Rainy Season: A Comprehensive Guide",
      excerpt: "Learn how to protect your property from potential water damage with our expert tips on preparing for heavy rainfall and storms.",
      author: "Emily Rodriguez",
      date: "February 18, 2023",
      image: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">WaterGuard Restoration Blog</h1>
          <p className="text-xl">Expert Insights on Water Damage Prevention and Restoration</p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Article</h2>
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img className="h-48 w-full object-cover md:w-48" src={blogPosts[0].image} alt={blogPosts[0].title} />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">{blogPosts[0].date}</div>
                <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{blogPosts[0].title}</a>
                <p className="mt-2 text-gray-500">{blogPosts[0].excerpt}</p>
                <div className="mt-4">
                  <a href="#" className="inline-flex items-center text-blue-600 hover:underline">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img className="w-full h-48 object-cover" src={post.image} alt={post.title} />
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="mt-4">
                    <a href="#" className="inline-flex items-center text-blue-600 hover:underline">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-blue-600 text-white rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
            <p className="mb-6">Subscribe to our newsletter for the latest water damage prevention tips and industry insights.</p>
            <form className="flex flex-col md:flex-row">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-2 mb-4 md:mb-0 md:mr-4 rounded text-gray-900"
              />
              <button 
                type="submit" 
                className="bg-white text-blue-600 px-6 py-2 rounded font-semibold hover:bg-gray-100 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="#" className="bg-white p-4 rounded-lg text-center hover:shadow-md transition duration-300">
              <h3 className="font-semibold">Water Damage Prevention</h3>
            </a>
            <a href="#" className="bg-white p-4 rounded-lg text-center hover:shadow-md transition duration-300">
              <h3 className="font-semibold">Restoration Techniques</h3>
            </a>
            <a href="#" className="bg-white p-4 rounded-lg text-center hover:shadow-md transition duration-300">
              <h3 className="font-semibold">Mold Remediation</h3>
            </a>
            <a href="#" className="bg-white p-4 rounded-lg text-center hover:shadow-md transition duration-300">
              <h3 className="font-semibold">Insurance Tips</h3>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;