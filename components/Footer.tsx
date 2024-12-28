import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-4">
              <li>
                <Link href={"https://www.facebook.com/profile.php?id=100086759149845"} target="_blank" >
                  Facebook
                </Link>
              </li>
              <li>
                <Link href={"https://www.instagram.com/talha_jamal_89/"} target="_blank" >
                  Instagram
                </Link>
              </li>
              <li>
                <Link href={"https://www.linkedin.com/in/talhajamal-/"} target="_blank" >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href={"https://github.com/TalhaJamal02"} target="_blank" >
                  GitHub
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Categories</h3>
            <ul className="space-y-4">
              <li>
                <p className="hover:text-blue-400">AI</p>
              </li>
              <li>
                <p className="hover:text-blue-400">Space</p>
              </li>
              <li>
                <p className="hover:text-blue-400">Quantum Computing</p>
              </li>
              <li>
                <p className="hover:text-blue-400">Technology</p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">Email: info@bloggr.com</p>
            <p className="text-gray-400">Phone: +92 3456-7890123</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <p className="hover:text-blue-400">Terms of Service</p>
              </li>
              <li>
                <p className="hover:text-blue-400">Privacy Policy</p>
              </li>
              <li>
                <p className="text-gray-400">&copy; 2025 Bloggr. All Rights Reserved.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
