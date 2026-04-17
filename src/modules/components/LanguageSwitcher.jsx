import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

import enFlag from "../../assets/images/flags/en.png";
import itFlag from "../../assets/images/flags/it.png";
import global from "../../resources/global.json";

const languageOptions = [
  {
    code: "it",
    flag: itFlag,
    shortLabel: "IT",
  },
  {
    code: "en",
    flag: enFlag,
    shortLabel: "EN",
  },
];

export default function LanguageSwitcher({ mobile = false }) {
  const { i18n, t } = useTranslation();
  const currentLanguageCode = String(
    i18n.resolvedLanguage || i18n.language || "it",
  )
    .toLowerCase()
    .startsWith("en")
    ? "en"
    : "it";

  const currentLanguage =
    languageOptions.find(({ code }) => code === currentLanguageCode) ||
    languageOptions[0];
  const availableOptions = languageOptions.filter(
    ({ code }) => code !== currentLanguage.code,
  );

  return (
    <Listbox
      value={currentLanguage}
      onChange={(option) => {
        if (option.code !== currentLanguage.code) {
          i18n.changeLanguage(option.code);
        }
      }}
    >
      <div className={`relative ${mobile ? "w-full" : "min-w-[92px]"}`}>
        <ListboxButton
          className={`inline-flex w-full items-center justify-between rounded-full border border-white/20 bg-white/10 text-white transition hover:border-white/40 hover:bg-white/15 ${
            mobile ? "px-4 py-3 text-sm" : "px-2.5 py-1.5 text-xs"
          }`}
          aria-label={t("common.language")}
          style={{ fontFamily: global.UTILS.FONT_FAMILY }}
        >
          <span className="flex items-center gap-2">
            <img
              src={currentLanguage.flag}
              alt=""
              className={`${mobile ? "h-5 w-7" : "h-4 w-6"} rounded-[3px] object-cover`}
            />
            <span
              className={`font-semibold tracking-[0.12em] ${mobile ? "text-sm" : "text-[10px]"}`}
            >
              {currentLanguage.shortLabel}
            </span>
          </span>
          <ChevronUpDownIcon
            aria-hidden="true"
            className={`${mobile ? "ml-3 h-5 w-5" : "ml-1.5 h-3.5 w-3.5"} text-white/75`}
          />
        </ListboxButton>

        <ListboxOptions
          anchor="bottom end"
          className={`glass-card z-[1100] mt-2 rounded-2xl border border-white/20 bg-white/10 p-2 shadow-2xl shadow-black/20 focus:outline-none ${
            mobile ? "w-full" : "w-[var(--button-width)]"
          }`}
          style={{ fontFamily: global.UTILS.FONT_FAMILY }}
        >
          {availableOptions.map((option) => (
            <ListboxOption
              key={option.code}
              value={option}
              className="cursor-pointer rounded-xl px-2 py-1.5 text-white data-focus:bg-white/10"
            >
              <div className="flex items-center gap-3">
                <img
                  src={option.flag}
                  alt=""
                  className={`${mobile ? "h-5 w-7" : "h-4 w-6"} rounded-[3px] object-cover`}
                />
                <span
                  className={`font-semibold tracking-[0.12em] ${mobile ? "text-sm" : "text-[10px]"}`}
                >
                  {option.shortLabel}
                </span>
              </div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
