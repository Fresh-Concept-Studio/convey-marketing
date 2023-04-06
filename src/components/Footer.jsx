import Image from 'next/future/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { TextField } from '@/components/Fields'
import { Logomark } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import qrCode from '@/images/qr-code.svg'

function QrCodeBorder(props) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pt-16 pb-6 lg:flex-row lg:items-center lg:py-16">
          <div>
            <div className="flex items-center text-gray-900">
              <div className="ml-4">
                <svg width="97" height="25" viewBox="0 0 97 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M41.8109 14.9262L39.5094 13.832C39.151 14.9073 38.1512 15.6242 37.0004 15.6242C35.4912 15.6242 34.3028 14.398 34.3028 12.8322C34.3028 11.2664 35.4912 10.0402 37.0004 10.0402C38.038 10.0402 38.9246 10.6061 39.3397 11.5116L41.5657 10.2854C40.6979 8.70079 38.9624 7.73869 37.0004 7.73869C34.0387 7.73869 31.6806 10.0025 31.6806 12.8322C31.6806 15.6619 34.0387 17.9257 37.0193 17.9257C39.151 17.9257 41.0186 16.7561 41.8109 14.9262ZM42.4946 12.8322C42.4946 15.6619 44.8527 17.9257 47.8145 17.9257C50.7951 17.9257 53.1532 15.6619 53.1532 12.8322C53.1532 9.9836 50.7951 7.73869 47.8145 7.73869C44.8527 7.73869 42.4946 10.0025 42.4946 12.8322ZM45.1169 12.8322C45.1169 11.2664 46.3053 10.0402 47.8145 10.0402C49.3426 10.0402 50.5122 11.2664 50.5122 12.8322C50.5122 14.398 49.3426 15.6242 47.8145 15.6242C46.3053 15.6242 45.1169 14.398 45.1169 12.8322ZM54.551 17.6427H57.0412V11.9078C57.0412 10.8514 57.8901 10.0025 58.9654 10.0025C60.0407 10.0025 60.7952 10.8514 60.7952 11.9833V17.6427H63.2854V11.5682C63.2854 9.2856 61.7196 7.70096 59.4747 7.70096C58.3806 7.70096 57.4562 8.05939 56.8714 8.70079V8.02166H54.551V17.6427ZM67.8356 17.6427H70.3447L74.3629 8.02166H71.7784L69.1562 14.6243L66.666 8.02166H63.9306L67.8356 17.6427ZM84.229 15.9637L82.2482 14.4923C81.5502 15.3223 80.8522 15.6808 79.8712 15.6808C78.4375 15.6808 77.4754 14.9262 77.2302 13.7566H84.4931C84.5308 13.3981 84.5497 13.0397 84.5497 12.7567C84.5497 9.90814 82.4934 7.73869 79.6637 7.73869C76.7585 7.73869 74.4948 9.9836 74.4948 12.8699C74.4948 15.7751 76.7963 17.9257 79.9278 17.9257C81.72 17.9257 83.248 17.2277 84.229 15.9637ZM77.3056 11.7758C77.6075 10.7193 78.3809 9.94587 79.6449 9.94587C80.8711 9.94587 81.7388 10.6816 81.8898 11.7758H77.3056ZM86.6351 21.793H89.3139L95.2563 8.02166H92.5398L89.9742 14.5489L87.4463 8.02166H84.7298L88.5971 17.2465L86.6351 21.793Z" fill="#333"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4436 17.8013C14.9548 17.8013 17.8012 14.9549 17.8012 11.4437C17.8012 7.93252 14.9548 5.08612 11.4436 5.08612C7.9324 5.08612 5.086 7.93252 5.086 11.4437C5.086 14.9549 7.9324 17.8013 11.4436 17.8013ZM11.4436 19.7086C16.0082 19.7086 19.7085 16.0083 19.7085 11.4437C19.7085 6.87915 16.0082 3.17883 11.4436 3.17883C6.87903 3.17883 3.17871 6.87915 3.17871 11.4437C3.17871 16.0083 6.87903 19.7086 11.4436 19.7086Z" fill="#30ABFC"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4437 20.9801C16.7105 20.9801 20.9801 16.7105 20.9801 11.4437C20.9801 6.17689 16.7105 1.90728 11.4437 1.90728C6.17689 1.90728 1.90728 6.17689 1.90728 11.4437C1.90728 16.7105 6.17689 20.9801 11.4437 20.9801ZM11.4437 22.8874C17.7639 22.8874 22.8874 17.7639 22.8874 11.4437C22.8874 5.12352 17.7639 0 11.4437 0C5.12352 0 0 5.12352 0 11.4437C0 17.7639 5.12352 22.8874 11.4437 22.8874Z" fill="#30ABFC"/>
                <path d="M21.6158 11.7615C21.6158 19.645 13.9867 21.6158 9.53638 20.8211C10.49 20.6622 10.8079 20.3443 10.8079 19.7085V3.35272C10.8079 3.27004 10.8098 3.19084 10.8117 3.11525C10.7852 2.74351 10.5921 2.06616 9.53638 2.06616C12.0794 1.27147 21.6158 1.90721 21.6158 11.7615Z" fill="#30ABFC"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4438 14.6226C13.1994 14.6226 14.6226 13.1994 14.6226 11.4438C14.6226 9.68815 13.1994 8.26495 11.4438 8.26495C9.68815 8.26495 8.26495 9.68815 8.26495 11.4438C8.26495 13.1994 9.68815 14.6226 11.4438 14.6226ZM11.4438 16.5299C14.2527 16.5299 16.5299 14.2527 16.5299 11.4438C16.5299 8.63479 14.2527 6.35767 11.4438 6.35767C8.63479 6.35767 6.35767 8.63479 6.35767 11.4438C6.35767 14.2527 8.63479 16.5299 11.4438 16.5299Z" fill="#30ABFC"/>
                </svg>
              </div>
            </div>
            <nav className="mt-11 flex gap-8">
              <NavLinks />
            </nav>
          </div>
{/*          <div className="group relative -mx-4 flex items-center self-stretch p-4 transition-colors hover:bg-gray-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
            <div className="relative flex h-24 w-24 flex-none items-center justify-center">
              <QrCodeBorder className="absolute inset-0 h-full w-full stroke-gray-300 transition-colors group-hover:stroke-cyan-500" />
              <Image src={qrCode} alt="" unoptimized />
            </div>
            <div className="ml-8 lg:w-64">
              <p className="text-base font-semibold text-gray-900">
                <Link href="#">
                  <span className="absolute inset-0 sm:rounded-2xl" />
                  Download the app
                </Link>
              </p>
              <p className="mt-1 text-sm text-gray-700">
                Scan the QR code to download the app from the App Store.
              </p>
            </div>
          </div>*/}
        </div>
        <div className="flex flex-col items-start border-t border-gray-200 pt-8 pb-12 md:justify-between md:pt-6">
{/*          <form className="flex w-full justify-center md:w-auto">
            <TextField
              type="email"
              aria-label="Email address"
              placeholder="Email address"
              autoComplete="email"
              required
              className="w-60 min-w-0 shrink"
            />
            <Button type="submit" color="cyan" className="ml-4 flex-none">
              <span className="hidden lg:inline">Join our newsletter</span>
              <span className="lg:hidden">Join newsletter</span>
            </Button>
          </form>*/}
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            &copy; Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
