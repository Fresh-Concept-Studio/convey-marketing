import Link from 'next/link'

import { Container } from '@/components/Container'

export function SupportHeader() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Have questions? Need support?
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you&apos;re having issues with the app please reach out to our support team at{' '}
            <Link
              href="mailto:support@conveystatus.com"
              className="text-gray-900 underline"
            >
              support@conveystatus.com
            </Link>
            .
          </p>
        </div>
      </Container>
    </section>
  )
}
