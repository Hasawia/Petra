import { useLanguage } from "@/contexts/LanguageContext";

export const useLangLink = () => {
  const { language } = useLanguage();
  return (path: string) => `/${language}${path}`;
};