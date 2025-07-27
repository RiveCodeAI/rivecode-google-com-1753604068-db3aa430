export interface NavigationItem {
  label: string;
  href: string;
}

export interface NavigationProps {
  items?: NavigationItem[];
  onSignIn?: () => void;
}

export interface UserMenuProps {
  isOpen: boolean;
  onClose: () => void;
}