export default function FontDemo() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Font Showcase
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Codec Cold</h3>
            <p className="font-codec-cold text-gray-600">
              Codec Cold is a modern sans-serif typeface with a clean, technical aesthetic. 
              Perfect for professional and contemporary designs.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Codec Warm</h3>
            <p className="font-codec-warm text-gray-600">
              Codec Warm offers a more approachable and friendly version of the Codec family. 
              Great for creating warmth in your designs.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Twisthead</h3>
            <p className="font-twisthead text-gray-600">
              Twisthead is a unique display font with character and personality. 
              Perfect for headlines and creative projects.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Inter (Default)</h3>
            <p className="font-sans text-gray-600">
              This is the default Inter font used throughout the website. 
              It provides excellent readability and modern aesthetics.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Roboto</h3>
            <p className="font-roboto text-gray-600">
              Roboto is a modern sans-serif typeface designed for user interfaces. 
              It offers great clarity and professional appearance.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Open Sans</h3>
            <p className="font-open-sans text-gray-600">
              Open Sans is a humanist sans-serif typeface optimized for print, web, and mobile interfaces. 
              It has excellent legibility.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Montserrat</h3>
            <p className="font-montserrat text-gray-600">
              Montserrat is inspired by the urban typography from the first half of the twentieth century. 
              It has a geometric and modern feel.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Playfair Display</h3>
            <p className="font-playfair text-gray-600 text-lg">
              Playfair Display is an elegant serif typeface designed for headlines and large text. 
              It brings sophistication and classical beauty to your design.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
