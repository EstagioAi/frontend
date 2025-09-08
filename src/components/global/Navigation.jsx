import React from "react";
import { Button } from "@/components/ui/button.jsx";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const menu = ["Home", "Sobre", "Categorias", "Vagas", "Blog", "Contato"];
  return (
    <>
      {/* Navbar minimalista */}
      <nav className="nav-plain w-full border-b border-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0">
              <img
                src="/logo.svg"
                alt="estagioAI"
                className="h-7 sm:h-8 w-auto"
              />
            </Link>

            {/* Center menu */}
            <div className="hidden md:flex flex-1 justify-center">
              <ul className="flex items-center gap-6">
                {menu.map((item) => (
                  <li key={item}>
                    <a
                      className="text-sm text-slate-600 hover:text-slate-900 px-2 py-1"
                      href="#"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right actions */}
            <div className="ml-auto hidden md:flex items-center">
              <Link to="/login">
                <Button className="btn-clean px-5 py-2 font-semibold">
                  Entrar
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden ml-auto">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-transparent"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
