import useTranslation from '@Hooks/useTranslation';
import { useMemo } from 'react';
import {
  BrowserVideo,
  ChatSmile,
  Clapperboard,
  EditRectangle,
  Facebook,
  Instagram,
  Mail,
  MedalStar,
  PencilPaper,
  Receipt,
  Report,
  Search,
  Setting,
  Shield,
  Telegram,
  Ticket,
  TwitterSparrow,
  User,
  UserPolygon,
  UsersTriple,
  VerticalFilmstripDashed,
  Wallet,
} from 'react-huge-icons/outline';
import { Routes } from '@/Enum/Routes';
import { Role } from '@/Enum/Role';

interface UseMenus {
  userMenuItem: Menus[];
  adminMenuItem: Menus[];
  footerMenu: Menus[];
  footerSocials: Menus[];
  footerMobile: Menus[];
  notLoggedIn: Menus[];
  adminLoggedIn: Menus[];
}

function useMenus(): UseMenus {
  const translation = useTranslation();

  const userMenuItem: Menus[] = useMemo(
    () => [
      {
        id: 1,
        href: Routes.UserPanelWallet,
        label: translation.wallet,
        role: Role.USER,
        Icon: Wallet,
      },
      {
        id: 2,
        href: Routes.UserPanelEditProfile,
        label: translation.userInformation,
        role: Role.USER,
        Icon: EditRectangle,
      },
      {
        id: 3,
        href: Routes.UserPanelAuthentication,
        label: translation.authentication,
        role: Role.USER,
        Icon: Shield,
      },
      {
        id: 4,
        href: Routes.UserPanelTransactions,
        label: translation.transactions,
        role: Role.USER,
        Icon: Receipt,
      },
      {
        id: 5,
        href: Routes.UserPanelTickets,
        label: translation.myTickets,
        role: Role.USER,
        Icon: Ticket,
      },
    ],
    [translation]
  );

  const adminMenuItem: Menus[] = useMemo(
    () => [
      {
        id: 1,
        href: Routes.AdminPanelCelebrity,
        label: translation.celebrity,
        role: Role.ADMIN,
        Icon: MedalStar,
      },
      {
        id: 2,
        href: Routes.AdminPanelFilm,
        label: translation.film,
        role: Role.ADMIN,
        Icon: Clapperboard,
      },
      {
        id: 3,
        href: Routes.AdminPanelComment,
        label: translation.comment,
        role: Role.ADMIN,
        Icon: ChatSmile,
      },
      {
        id: 4,
        href: Routes.AdminPanelReview,
        label: translation.review,
        role: Role.ADMIN,
        Icon: PencilPaper,
      },
      {
        id: 5,
        href: Routes.AdminPanelReports,
        label: translation.reports,
        role: Role.ADMIN,
        Icon: Report,
      },
      {
        id: 6,
        href: Routes.AdminPanelUsers,
        label: translation.users,
        role: Role.ADMIN,
        Icon: UsersTriple,
      },
      {
        id: 7,
        href: Routes.AdminPanelSetting,
        label: translation.setting,
        role: Role.ADMIN,
        Icon: Setting,
      },
    ],
    [translation]
  );

  const footerMenu: Menus[] = useMemo(
    () => [
      { id: 1, href: Routes.Root, label: translation.salesTable, role: Role.GLOBAL },
      { id: 2, href: Routes.Root, label: translation.faq, role: Role.GLOBAL },
      { id: 3, href: Routes.Root, label: translation.futurePlans, role: Role.GLOBAL },
      { id: 4, href: Routes.Root, label: translation.archiveOfFilms, role: Role.GLOBAL },
      { id: 5, href: Routes.Root, label: translation.termsAndConditions, role: Role.GLOBAL },
      { id: 6, href: Routes.Root, label: translation.aboutUs, role: Role.GLOBAL },
      { id: 7, href: Routes.Root, label: translation.contactUs, role: Role.GLOBAL },
      { id: 8, href: Routes.Root, label: translation.magazine, role: Role.GLOBAL },
    ],
    [translation]
  );

  const footerSocials: Menus[] = useMemo(
    () => [
      {
        id: 1,
        href: Routes.Instagram,
        label: translation.magazine,
        role: Role.GLOBAL,
        Icon: Instagram,
      },
      {
        id: 2,
        href: Routes.Telegram,
        label: translation.telegram,
        role: Role.GLOBAL,
        Icon: Telegram,
      },
      {
        id: 3,
        href: Routes.Twitter,
        label: translation.twitter,
        role: Role.GLOBAL,
        Icon: TwitterSparrow,
      },
      {
        id: 4,
        href: Routes.FaceBook,
        label: translation.facebook,
        role: Role.GLOBAL,
        Icon: Facebook,
      },
      { id: 5, href: Routes.Email, label: translation.email, role: Role.GLOBAL, Icon: Mail },
    ],
    [translation]
  );

  const footerMobile: Menus[] = useMemo(
    () => [
      {
        id: 1,
        href: Routes.Root,
        label: translation.film,
        role: Role.GLOBAL,
        Icon: VerticalFilmstripDashed,
      },
      {
        id: 2,
        href: Routes.Root,
        label: translation.cinema,
        role: Role.GLOBAL,
        Icon: BrowserVideo,
      },
      { id: 3, href: Routes.Root, label: translation.search, role: Role.GLOBAL, Icon: Search },
    ],
    [translation]
  );

  const notLoggedIn: Menus[] = useMemo(
    () => [
      { id: 1, href: Routes.Login, label: translation.login, role: Role.GLOBAL, Icon: User },
      { id: 2, href: Routes.Register, label: translation.register, role: Role.GLOBAL, Icon: User },
      {
        id: 3,
        href: Routes.Admin,
        label: translation.loginAdmin,
        role: Role.GLOBAL,
        Icon: UserPolygon,
      },
    ],
    [translation]
  );

  const adminLoggedIn: Menus[] = useMemo(
    () => [
      {
        id: 1,
        href: Routes.AdminPanel,
        label: translation.panelAdmin,
        role: Role.USER,
        Icon: Wallet,
      },
    ],
    [translation]
  );

  return {
    userMenuItem,
    adminMenuItem,
    footerMenu,
    footerSocials,
    footerMobile,
    notLoggedIn,
    adminLoggedIn,
  };
}

export default useMenus;
