"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../assets/logo-sem-fundo.png";
import { itensMenu } from "@/data/itensMenu";
import { useApiDisponivel } from "@/context/ApiDisponivelContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isApiOnline, setIsApiOnline } = useApiDisponivel();
  const [dbStatus, setDbStatus] = useState<string | null>(null);

  useEffect(() => {
    const checkApiStatus = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/echos-java/api/status"
        );
        const data = await response.json();

        setIsApiOnline(data.statusApi === "online");
        setDbStatus(data.dbStatus || "unknown");
      } catch {
        setIsApiOnline(false);
        setDbStatus("disconnected");
      }
    };
    checkApiStatus();
  }, [setIsApiOnline]);

  return (
    <nav className="bg-[#00000050] text-white shadow-lg absolute top-0 left-0 w-full z-10">
      {!isApiOnline ? (
        <div className="bg-red-600 text-center text-white py-1">
          A API não está disponível no momento. Algumas funcionalidades vão ser
          limitadas.
        </div>
      ) : (
        dbStatus === "disconnected" && (
          <div className="bg-yellow-600 text-center text-white py-1">
            Conexão com o banco de dados falhou. Algumas funcionalidades estão
            indisponíveis.
          </div>
        )
      )}

      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src={Logo}
            alt="Echos Logo"
            width={80}
            height={80}
            className="mr-2"
          />
        </Link>

        <button
          className="md:hidden text-white focus:outline-none z-20"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FiX className="w-6 h-6" />
          ) : (
            <FiMenu className="w-6 h-6" />
          )}
        </button>

        <div
          className={`md:flex md:space-x-10 ${
            isOpen
              ? "flex flex-col items-center bg-black bg-opacity-90 absolute top-0 left-0 h-screen w-full pt-20 space-y-6"
              : "hidden md:block"
          } transition-all duration-300`}
        >
          {itensMenu.map((item) => (
            <Link key={item.href} href={item.href} className="linksnav">
              {item.nome}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
