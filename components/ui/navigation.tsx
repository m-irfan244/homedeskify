"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-full bg-white border-b z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
            <Link href="/learn" className="text-gray-600 hover:text-gray-900">
              Learn
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
            <Button>Book a Call</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-gray-900 px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/pricing"
                className="text-gray-600 hover:text-gray-900 px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/learn"
                className="text-gray-600 hover:text-gray-900 px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Learn
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-gray-900 px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Button className="w-full">Book a Call</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
