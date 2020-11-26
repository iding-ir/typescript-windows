import React from "react";
import { useTranslation } from "react-i18next";

import "./Title.scss";

interface TitleProps {
  i18n: string;
}

const Title = (props: TitleProps) => {
  const { i18n } = props;

  const { t } = useTranslation();

  return <div className="title">{t(i18n)}</div>;
};

export default Title;
