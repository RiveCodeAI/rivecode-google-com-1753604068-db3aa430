export interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
}

export interface SearchButtonsProps {
  onSearch?: () => void;
  onLucky?: () => void;
}

export interface SearchResult {
  title: string;
  url: string;
  description: string;
}