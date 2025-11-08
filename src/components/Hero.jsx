// src/components/Hero.jsx
export default function Hero() {
  return (
    <section id="hero" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 md:py-32 text-center">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Hope, Healing, and Recovery
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          A safe place for those seeking freedom from addiction.
        </p>
        <a
          href="#about"
          className="bg-white text-blue-600 hover:bg-blue-100 px-8 py-3 rounded-full text-lg font-semibold transition duration-300"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
