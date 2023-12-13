import Link from 'next/link'

import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'How do I create an account?',
      answer:
        'Download our app from the app store. You\'ll be prompted to create an account the first time you open the app. All that\'s required is a name and phone number. We\'ll send you a code to confirm your number, and then you\'ll be able to begin using the app',
    },
    {
      question: 'Can I invite others to help me edit events and post updates?',
      answer:
        'Absolutely. Simply invite them as an editor, and they can see and edit the event in the same way you can',
    },
  ],
  [
    {
      question: 'Is my information secure?',
      answer:
        'We require a verified phone number to register and sign into your account, so only someone with your phone number (i.e., YOU) will be able to log in or access your account',
    },
    {
      question: 'Can I add photos to events?',
      answer:
        'Yes, photos can be added to the gallery or attached to updates',
    },

  ],
  [
    {
      question: 'Can I invite people from my phone contacts?',
      answer:
        'Yes, we make it easy to pull in individuals from your contacts to make adding them super easy',
    },
    {
      question: 'Can people opt out from receiving updates?',
      answer:
        'Of course. If you invite someone to view an event, they simply have to text "STOP" in order to stop receiving updates',
    },
  ],
];


export function Faqs() {
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
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <Link
              href="mailto:support@conveystatus.com"
              className="text-gray-900 underline"
            >
              reach out to us
            </Link>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
