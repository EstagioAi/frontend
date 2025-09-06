import React from "react";

const Rodape = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-brand-neon rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-lg">E</span>
            </div>
            <span className="text-xl font-bold text-gradient">EstagioAI</span>
          </div>

          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-600">
              De universitários, para universitários
            </p>
          </div>

          <div className="flex space-x-4">
            <a
              href="#"
              className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center hover:bg-orange-200 transition-colors"
              aria-label="Email"
            >
              📧
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center hover:bg-purple-200 transition-colors"
              aria-label="LinkedIn"
            >
              💼
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors"
              aria-label="GitHub"
            >
              💻
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 EstagioAI. Todos os direitos reservados. MVP em
            desenvolvimento.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Rodape;
