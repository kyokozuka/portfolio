import { redirect } from 'next/navigation';
import { APP_ROUTES } from '@/constants/routes';

export default function Page() {
  redirect(APP_ROUTES.home);
}
