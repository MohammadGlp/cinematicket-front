import Link from 'next/link';
import { User } from 'react-huge-icons/outline';
import useTranslation from '@Hooks/useTranslation';
import useMenus from '@Hooks/useMenus';
import { Routes } from '@/Enum/Routes';

const Footer = () => {
  const translation = useTranslation();
  const { footerMenu, footerMobile, footerSocials } = useMenus();
  return (
    <footer>
      <div className='hidden lg:flex bg-secondary text-white text-[0.7rem] fixed bottom-0 w-full px-9'>
        <div className='container py-1.5 flex items-center justify-between'>
          <nav>
            <ul className='flex items-center gap-1'>
              {footerMenu.map(({ id, href, label }) => (
                <Link
                  key={id}
                  href={href}
                  title={label}
                  className='py-1 px-2 hover:bg-[#4e5067] rounded-md'>
                  {label}
                </Link>
              ))}
            </ul>
          </nav>
          <ul className='flex items-center gap-4'>
            {footerSocials.map(({ id, href, label, Icon }) => {
              if (!Icon) return;
              return (
                <Link
                  key={id}
                  href={href}
                  title={label}>
                  <Icon className='w-4 h-4' />
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
      <div className='bg-white flex lg:hidden text-sm fixed bottom-0 w-full p-2 border-t'>
        <ul className='flex items-center justify-around w-full'>
          {footerMobile.map(({ id, href, label, Icon }) => (
            <Link
              key={id}
              href={href}
              title={label}
              className='flex flex-col items-center gap-1'>
              {!!Icon && <Icon className='w-5 h-5' />}
              <span>{label}</span>
            </Link>
          ))}
          <Link
            href={Routes.Login}
            title={translation.login}
            className='flex flex-col items-center gap-1'>
            <User className='w-5 h-5' />
            <span>{translation.login}</span>
          </Link>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
