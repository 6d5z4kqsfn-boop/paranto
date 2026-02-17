export function Footer() {
  return (
    <footer id="about" className="bg-gray-900 text-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold tracking-tight">Paranto</h3>
            <p className="mt-4 text-gray-400 max-w-md leading-relaxed">
              Evidence-based digital therapy for non-specific low back pain.
              Designed by clinicians, built for patients.
            </p>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Product
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="#features" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-300 hover:text-white text-sm transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#evidence" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Evidence
                </a>
              </li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Company
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="mt-16 border-t border-gray-800 pt-8">
          <p className="text-sm text-gray-500">
            &copy; 2026 Paranto. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
