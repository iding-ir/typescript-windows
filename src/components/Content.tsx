import React from "react";
import { useTranslation } from "react-i18next";

import "./Content.scss";

interface ContentProps {
  i18n: string;
}

const Content = (props: ContentProps) => {
  const { i18n } = props;

  const { t } = useTranslation();

  return <div className="content">{t(i18n)}</div>;
};

export default Content;
