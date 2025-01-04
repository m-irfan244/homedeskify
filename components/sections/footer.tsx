import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Mail, Phone, Instagram, Twitter, Facebook } from "lucide-react";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Logo className="mb-4 text-white" />
            <p className="text-sm mb-2">
              Transform your home into the ultimate work haven with our ergonomic solutions and expert guidance.
            </p>
            <p className="text-sm text-primary-foreground/70">
              A project by 4 Gene Technologies
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                support@homedeskify.com
              </p>
              <p className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                1-800-DESK-PRO
              </p>
            </div>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="hover:text-white transition">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white transition">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white transition">
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Stay updated on new products and deals!</p>
            <div className="space-y-2">
              <Input type="email" placeholder="Enter your email" className="bg-gray-800 border-gray-700" />
              <Button className="w-full">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Homedeskify - A 4 Gene Technologies Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}