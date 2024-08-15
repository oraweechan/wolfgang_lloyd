import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-beige flex flex-col items-center">
      <div className="w-full max-w-7xl p-6">
        <h2 className="text-3xl font-bold text-left py-6">About Wolfgang Lloyd</h2>
      </div>
      <div className="flex flex-col md:flex-row bg-gray-100 mx-auto max-w-7xl p-6 space-y-6 md:space-y-0 md:space-x-6 rounded-lg shadow-md">
        <div className="flex justify-center md:justify-start">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <Image
              src="/images/lloyd.jpg"
              alt="Example Image 3"
              className="rounded-md shadow-lg grayscale object-contain"
              layout="fill"
            />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg leading-relaxed">
            Wolfgang Lloyd Media was formed after the need for an adapting way
            to producing original creative content to adapting times. Founder
            Wolfgang Lloyd has extensive professional experience in production
            for business&apos; in and around Los Angeles, CA. Our team has
            experience working with global companies as well as local startups.
            We have successfully produced and directed music videos, feature
            films, short films, and commercial projects in over 10 years. We
            want to help grow your band. Whether that is customers for a product
            or service, influencing viewers through great storytelling,
            inter-office communication, or capturing a special event. WLM wants
            to partner with you for your success. We can help you navigate the
            entire production process, from creative direction and script
            development, to actor casting, location scouting, and set design,
            all the way to editing, animation, color grading, and sound design.
            Wolfgang Lloyd Media is consistently in the conversation for the
            best video production company in Los Angeles due to our creativity,
            professionalism, taste, honesty, and reliability. We are comfortable
            using the latest cutting edge technology, but we also rely on tried
            and true cinematic techniques.
          </p>
        </div>
      </div>
    </main>
  );
}
