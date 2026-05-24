import Container from "../components/Container";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-10 bg-black border-t border-white/10 text-white">

      <Container>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <h3 className="text-2xl font-bold text-red-500">
            TasteHub
          </h3>

          <div className="flex gap-4">

            <a
              href="https://github.com/khroos713gb-spec"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={24} />
            </a>

          </div>

        </div>

      </Container>

    </footer>
  );
};

export default Footer;
