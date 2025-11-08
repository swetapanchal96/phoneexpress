import Image from "next/image";

export default function BlogDetailPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-4">
        Home › Blog › Affordable & Trusted Washing Machine Service in Ahmedabad
      </p>

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
        Affordable & Trusted Washing Machine Service in Ahmedabad 
      </h1>

      {/* Author and Date */}
      <p className="text-gray-500 text-sm mb-6">
         11 Sept 2025
      </p>

      {/* Banner Image */}
      <div className="relative w-full h-64 md:h-80 mb-10 rounded-lg overflow-hidden shadow-sm">
        <Image
          src="/images/blog-hero.jpg"
          alt="Washing Machine Service in Ahmedabad"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Blog Content */}
      <article className="prose prose-lg max-w-none text-gray-700">
        <h2>Introduction</h2>
        <p>
          When your washing machine stops working, your routine is immediately interrupted.
          Whether it’s a wrong drum, drainage problem, or unusual noise, the right solution is
          always in search of the <strong>best washing machine service in Ahmedabad</strong>.
        </p>

        <h3>Why the Washing Machine Service Matters</h3>
        <ul>
          <li>Improved efficiency, water and power conservation.</li>
          <li>Prevention of costly issues.</li>
          <li>Safety — knowing your machine is in expert hands.</li>
        </ul>

        <h3>Signs That You Require Washing Service in Ahmedabad</h3>
        <ul>
          <li>Unusual noise or vibration.</li>
          <li>Water not draining properly.</li>
          <li>Dirty clothes even after washing.</li>
        </ul>

        <h3>Professional Tips</h3>
        <p>
          Don’t overload the washing machine. Clean filters regularly and use the right detergent.
          Call Auraclap for regular <strong>washing machine service in Ahmedabad</strong> every
          6–12 months.
        </p>

        <h3>Conclusion</h3>
        <p>
          Selecting a proper <strong>washing machine service in Ahmedabad</strong> is not
          burdensome. With Auraclap, you get affordable rates, expert service, and peace of mind.
        </p>

        
      </article>
    </main>
  );
}
