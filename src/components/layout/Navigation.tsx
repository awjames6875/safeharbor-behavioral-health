'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

interface NavProps {
  mobile?: boolean
  onItemClick?: () => void
  scrolled?: boolean
}

export default function Navigation({ mobile = false, onItemClick }: NavProps) {
  const pathname = usePathname()
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const navItems = [
    { href: '/', label: 'Home' },
    {
      href: '/services',
      label: 'Services',
      subItems: [
        { href: '/services/individual-therapy', label: 'Individual Therapy' },
        { href: '/services/group-therapy', label: 'Group Therapy' },
        { href: '/services/medication-management', label: 'Medication Management' },
        { href: '/services/psychiatric-evaluation', label: 'Psychiatric Evaluation' },
      ],
    },
    {
      href: '/programs',
      label: 'Programs',
      subItems: [
        { href: '/programs/body-brain', label: 'Body-Brain Integration' },
      ],
    },
    { href: '/about', label: 'About' },
    {
      href: '/locations',
      label: 'Locations',
      subItems: [
        { href: '/locations/downtown-tulsa', label: 'Downtown Tulsa' },
        { href: '/locations/midtown-tulsa', label: 'Midtown Tulsa' },
        { href: '/locations/brookside', label: 'Brookside' },
        { href: '/locations/cherry-street', label: 'Cherry Street' },
        { href: '/locations/broken-arrow', label: 'Broken Arrow' },
        { href: '/locations/owasso', label: 'Owasso' },
        { href: '/locations/jenks', label: 'Jenks' },
        { href: '/locations/bixby', label: 'Bixby' },
        { href: '/locations/sand-springs', label: 'Sand Springs' },
        { href: '/locations/sapulpa', label: 'Sapulpa' },
        { href: '/locations/south-tulsa', label: 'South Tulsa' },
        { href: '/locations/north-tulsa', label: 'North Tulsa' },
        { href: '/locations/east-tulsa', label: 'East Tulsa' },
        { href: '/locations/west-tulsa', label: 'West Tulsa' },
        { href: '/locations/union-district', label: 'Union District' },
      ],
    },
    {
      href: '/resources',
      label: 'Resources',
      subItems: [
        { href: '/resources/crisis-help', label: 'Crisis Help' },
      ],
    },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label)
  }

  const linkClass = (href: string) => {
    const baseClass = mobile
      ? 'block py-2 px-4 text-navy-700 hover:bg-teal-50 rounded-md'
      : 'text-navy-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors'

    const activeClass = pathname === href ? (mobile ? 'bg-teal-50 text-teal-600' : 'text-teal-600') : ''

    return `${baseClass} ${activeClass}`
  }

  if (mobile) {
    return (
      <nav className="space-y-1">
        {navItems.map((item) => (
          <div key={item.href}>
            {item.subItems ? (
              <>
                <button
                  onClick={() => handleDropdownToggle(item.label)}
                  className="w-full text-left py-2 px-4 text-navy-700 hover:bg-teal-50 rounded-md flex justify-between items-center"
                >
                  <span>{item.label}</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === item.label && (
                  <div className="ml-4 space-y-1 mt-1">
                    <Link
                      href={item.href}
                      className={linkClass(item.href)}
                      onClick={onItemClick}
                    >
                      All {item.label}
                    </Link>
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className={linkClass(subItem.href)}
                        onClick={onItemClick}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                href={item.href}
                className={linkClass(item.href)}
                onClick={onItemClick}
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </nav>
    )
  }

  return (
    <nav className="flex space-x-1">
      {navItems.map((item) => (
        <div key={item.href} className="relative group">
          {item.subItems ? (
            <>
              <button
                className={`${linkClass(item.href)} flex items-center space-x-1`}
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <span>{item.label}</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all ${openDropdown === item.label
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2'
                  }`}
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <div className="py-1">
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-sm text-navy-700 hover:bg-teal-50"
                  >
                    All {item.label}
                  </Link>
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      className="block px-4 py-2 text-sm text-navy-700 hover:bg-teal-50"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <Link href={item.href} className={linkClass(item.href)}>
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}