import React from 'react';

const GalleryPage: React.FC = () => {
  const galleryItems = [
    {
      image: "https://images.unsplash.com/photo-1578662996442-48f1845937b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Flood Damage Restoration",
      description: "Before and after of a severe flood damage restoration project in a residential basement."
    },
    {
      image: "https://images.unsplash.com/photo-1585513721434-7aee1d01758e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Mold Remediation",
      description: "Comprehensive mold removal and prevention in a commercial property."
    },
    {
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Water Extraction",
      description: "Emergency water extraction following a major pipe burst in an office building."
    },
    {
      image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Structural Drying",
      description: "Advanced structural drying techniques used in a multi-story apartment complex."
    },
    {
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Content Restoration",
      description: "Salvaging and restoring valuable contents after water damage in a high-end residence."
    },
    {
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Commercial Restoration",
      description: "Large-scale water damage restoration project in a corporate office space."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Project Gallery</h1>
          <p className="text-xl">Explore our recent water damage restoration projects</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Restore Your Property?</h2>
          <p className="text-xl mb-8">Let our experts handle your water damage restoration needs with the same level of expertise and care.</p>
          <a href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-full text-lg transition duration-300">
            Get a Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;