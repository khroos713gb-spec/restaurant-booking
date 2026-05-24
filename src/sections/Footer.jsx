import Container from "../components/Container";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-12 bg-black border-t border-white/10 text-white">

      <Container>

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h3 className="text-3xl font-bold text-red-500">
              TasteHub
            </h3>

            <p className="text-slate-400 mt-4">
              Premium dining experience with world-class cuisine.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">
              Contact
            </h4>

            <p className="text-slate-400">
              reservations@tastehub.com
            </p>

            <p className="text-slate-400 mt-2">
              +1 (555) 123-4567
            </p>

            <p className="text-slate-400 mt-2">
              Open Daily • 10 AM - 11 PM
            </p>
          </div>

          <div>

            <h4 className="font-bold mb-4">
              Follow Us
            </h4>

            <div className="flex gap-4">

              <a href="https://github.com/khroos713gb-spec" target="_blank" rel="noreferrer">
                <FaGithub size={26} />
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin size={26} />
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-slate-500">
          © 2026 TasteHub. All Rights Reserved.
        </div>

      </Container>

    </footer>
  );
};

export default Footer;
