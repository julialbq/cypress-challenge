import { routes } from "@/routing/routes";
import Link from "next/link";
import { useTranslation } from "../hooks/useTranslation";
import { Button } from "./Button";
import cx from "./NewEntryButton.module.scss";

export const NewEntryButton = ({ onClick }) => {
  const { t } = useTranslation();

  return (
    <Link href={routes.newEntry()} data-testid="NewEntryButton">
      <Button className={cx.container} onClick={onClick}>
        ➕ {t("newEntryButton")}
      </Button>
    </Link>
  );
};
