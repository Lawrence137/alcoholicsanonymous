// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg mb-2">
          &copy; {new Date().getFullYear()} Alcoholics Anonymous & Narcotics Anonymous. All Rights Reserved.
        </p>
        <p className="text-sm">
          This website is a resource for individuals seeking recovery.
        </p>
      </div>
    </footer>
  );
}
