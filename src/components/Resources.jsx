// src/components/Resources.jsx
export default function Resources() {
  const resources = [
    { name: "AA World Services", url: "https://www.aa.org/" },
    { name: "NA World Services", url: "https://www.na.org/" },
    { name: "AA Meeting Finder", url: "https://www.aa.org/find-aa/meetings" },
    { name: "NA Meeting Finder", url: "https://www.na.org/meetingsearch/" },
    { name: "The Big Book (AA)", url: "https://www.aa.org/the-big-book" },
    { name: "Narcotics Anonymous Basic Text", url: "https://www.na.org/basictext/" },
  ];

  return (
    <section id="resources" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Helpful Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-blue-600 hover:text-blue-800 font-semibold"
            >
              {resource.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
