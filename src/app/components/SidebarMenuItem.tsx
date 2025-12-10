"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC, JSX } from 'react'

interface Props{
  path: string
  icon: JSX.Element
  title: string
  subTitle: string
}

const SidebarMenuItem: FC<Props> = ({path, icon, title, subTitle}) => {
  const pathname = usePathname()

  return (
   <Link href={path} className={`sidebarItem ${pathname === path ? "sidebarItemActive" : ''}`}>
      {icon}
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{title}</span>
        <span className="text-sm text-white/50 hidden md:block">{subTitle}</span>
      </div>
    </Link>
  )
}

export default SidebarMenuItem
