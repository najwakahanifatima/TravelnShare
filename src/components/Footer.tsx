import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="text-center py-6 bg-none mt-[250px]">
            <h2 className="text-lg font-semibold">Contributor</h2>
            <section className="flex gap-10 mt-3 justify-center text-xl">
                <a href="https://www.linkedin.com/in/najwa-fatima/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-6 h-6 hover:text-blue-500 transition" />
                </a>
                <a href="mailto:najwanewa1010@gmail.com">
                    <Mail className="w-6 h-6 hover:text-red-500 transition" />
                </a>
                <a href="https://github.com/najwakahanifatima" target="_blank" rel="noopener noreferrer">
                    <Github className="w-6 h-6 hover:text-gray-600 transition" />
                </a>
            </section>
        </footer>
    );
};
