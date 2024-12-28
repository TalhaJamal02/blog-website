import React from 'react'

function Testimonials() {
  return (
    <div>
      <section className="mt-12 bg-gradient-to-r from-slate-200 to-gray-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-gray-900 text-center">What Our Readers Say</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          {/* first */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <p className="text-gray-700 ">"This blog provides such valuable insights. I love reading the latest in AI and space technology!"</p>
            <p className="mt-4 font-semibold text-gray-900">Sarah L.</p>
            <p className="text-gray-500">AI Enthusiast</p>
          </div>

          {/* second */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <p className="text-gray-700 ">"A great resource for staying updated on the latest developments in quantum computing. Highly recommended!"</p>
            <p className="mt-4 font-semibold text-gray-900">Michael P.</p>
            <p className="text-gray-500">Quantum Computing Expert</p>
          </div>

          {/* third */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <p className="text-gray-700 ">"I can't get enough of the space articles. Very well written and easy to understand. Keep up the great work!"</p>
            <p className="mt-4 font-semibold text-gray-900">Emily R.</p>
            <p className="text-gray-500">Space Enthusiast</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-2xl font-semibold text-gray-900">
            Join over <span className="text-blue-700">5,000+</span> readers who trust us for the latest insights in tech and science!
          </p>
        </div>
      </section>
    </div>
  )
}

export default Testimonials