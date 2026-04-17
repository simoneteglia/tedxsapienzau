import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ErrorPage() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-lg">{t("error_page.404_msg")}</p>
      <Link className="mt-8 text-blue-500 hover:underline" to="/">
        {t("error_page.home_button")}
      </Link>
    </div>
  );
}
