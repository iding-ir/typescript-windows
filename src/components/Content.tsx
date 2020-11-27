import React from "react";
import { useTranslation } from "react-i18next";

interface ContentProps {
  i18n: string;
}

const Content = (props: ContentProps) => {
  const { i18n } = props;

  const { t } = useTranslation();

  return <div style={{ padding: "1rem" }}>{t(i18n)}</div>;
};

export default Content;
