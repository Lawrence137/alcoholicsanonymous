// src/components/Steps.jsx
export default function Steps() {
  const twelveSteps = [
    "We admitted we were powerless over alcohol—that our lives had become unmanageable.",
    "Came to believe that a Power greater than ourselves could restore us to sanity.",
    "Made a decision to turn our will and our lives over to the care of God as we understood Him.",
    "Made a searching and fearless moral inventory of ourselves.",
    "Admitted to God, to ourselves, and to another human being the exact nature of our wrongs.",
    "Were entirely ready to have God remove all these defects of character.",
    "Humbly asked Him to remove our shortcomings.",
    "Made a list of all persons we had harmed, and became willing to make amends to them all.",
    "Made direct amends to such people wherever possible, except when to do so would injure them or others.",
    "Continued to take personal inventory and when we were wrong promptly admitted it.",
    "Sought through prayer and meditation to improve our conscious contact with God as we understood Him, praying only for knowledge of His will for us and the power to carry that out.",
    "Having had a spiritual awakening as the result of these Steps, we tried to carry this message to alcoholics, and to practice these principles in all our affairs."
  ];

  return (
    <section id="steps" className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">The Twelve Steps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {twelveSteps.map((step, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Step {index + 1}</h3>
              <p className="text-gray-700">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
