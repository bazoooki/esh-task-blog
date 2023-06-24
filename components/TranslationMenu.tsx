'use strict';
import {Menu, Transition} from '@headlessui/react'
import {GlobeAltIcon} from "@heroicons/react/24/outline";
import {Fragment} from 'react'
import Link from 'next-intl/link';
import {usePathname} from "next-intl/client";
import {useLocale, useTranslations} from "next-intl";

export default function TranslationMenu() {
  const pathname = usePathname();
  const locale = useLocale()
  const t = useTranslations('TranslationMenu');
  return (
    <div className="fixed w-34 -mt-3">
      <Menu>
        <Menu.Button><GlobeAltIcon className="w-6 h-6 text-slate-600"/></Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className="absolute right-0 mt-2 w-28 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({active}) => (
                  <Link href={pathname} locale="en"
                        className={`${
                          (active || locale=== 'en') ? 'text-primary' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm transition-colors`}
                  >
                    {t('english')}
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({active}) => (
                  <Link href={pathname} locale="il"
                        className={`${
                          (active || locale=== 'il') ? 'text-primary' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm transition-colors`}
                  >
                    {t('hebrew')}
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}