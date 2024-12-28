import React from 'react'

function NewsletterSubscription() {
  return (
    <section className="mt-16 mb-16 bg-gray-800 text-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold text-center">Join 5,000+ readers</h2>
      <p className="text-center text-gray-400 mt-4">
        Stay updated with the latest articles, news, and posts from our blog. Sign up for our newsletter!
      </p>
      <form className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 w-full sm:w-80 rounded-l-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-600 mb-4 sm:mb-0 sm:rounded-l-lg"
          required
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg sm:rounded-r-lg hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Subscribe
        </button>
      </form>
    </section>
  )
}

export default NewsletterSubscription