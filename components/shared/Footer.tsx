import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[var(--dark-gray)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Logo & Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold">Purpose</span>
            </Link>
            <p className="text-sm text-gray-300 max-w-md">
              Stop searching, start discovering a fulfilling career.
            </p>
          </div>

          {/* Office Addresses */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Our Offices</h3>
            <div className="space-y-4 text-sm text-gray-300">
              <div>
                <p className="font-medium text-white mb-1">San Francisco</p>
                <p>123 Market Street</p>
                <p>San Francisco, CA 94103</p>
              </div>
              <div>
                <p className="font-medium text-white mb-1">New York</p>
                <p>456 Broadway</p>
                <p>New York, NY 10013</p>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/imprint"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Imprint
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-sm text-gray-400 text-center lg:text-left">
            &copy; {new Date().getFullYear()} Purpose. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
