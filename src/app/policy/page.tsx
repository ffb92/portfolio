import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const PrivacyPolicy = () => {
  return (
    <div>
      <nav className="mx-16 my-4 animate-fade-in flex items-center justify-between ">
        <div className="">
          <Link href="/">
            <Image src="/logo_bg.png" alt="Logo" width={70} height={40} />
          </Link>
        </div>
        <ul className="flex items-center justify-center gap-4">
          <Link href="/" className="text-sm duration-500 text-zinc-500 hover:text-zinc-300">
            Home
          </Link>
        </ul>
      </nav>
      <div className="h-px md:block bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">
          Your privacy is important to us. It is [Your Name] policy to respect your privacy
          regarding any information we may collect from you across our website, [Your Website], and
          other sites we own and operate.
        </p>
        <h2 className="text-2xl font-bold mb-2">Information We Collect</h2>
        <p className="mb-4">
          We only ask for personal information when we truly need it to provide a service to you. We
          collect it by fair and lawful means, with your knowledge and consent. We also let you know
          why we’re collecting it and how it will be used.
        </p>
        <h2 className="text-2xl font-bold mb-2">How We Use Information</h2>
        <p className="mb-4">
          We only retain collected information for as long as necessary to provide you with your
          requested service. What data we store, we’ll protect within commercially acceptable means
          to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or
          modification.
        </p>
        <h2 className="text-2xl font-bold mb-2">Your Rights</h2>
        <p className="mb-4">
          You are free to refuse our request for your personal information, with the understanding
          that we may be unable to provide you with some of your desired services.
        </p>
        <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about how we handle user data and personal information, feel
          free to contact us.
        </p>
        <p className="mb-4">This policy is effective as of [Date].</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
