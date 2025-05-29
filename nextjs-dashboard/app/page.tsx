import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image'
// app/page.tsx

// app/page.tsx
import { redirect } from 'next/navigation';

export default function Page() {
  redirect('/dashboard'); // No debes retornar JSX si rediriges
}

