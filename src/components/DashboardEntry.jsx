import cx from "./DashboardEntry.module.scss";
import { Button } from "./Button";
import { useTranslation } from "../hooks/useTranslation";
import { useNavigation } from "../hooks/useNavigation";
import Link from "next/link";
import { routes } from "@/routing/routes";

export const DashboardEntry = ({ entry, onDelete }) => {
  const { renderEditEntryLink } = useNavigation();

  const { label, date, amount } = entry;

  const { formatDate, formatNumber } = useTranslation();

  return (
    <li className={cx.container}>
      <div className={cx.leftRow}>
        <span>{label}</span>

        <span>{formatDate(date)}</span>
      </div>

      <div className={cx.rightRow}>
        <span>$ {formatNumber(amount)}</span>

        <div className={cx.buttonContainer}>
          <Link href={routes.editEntry(entry.id)}>
            <Button className={cx.editButton}>✏️</Button>
          </Link>

          <Button className={cx.deleteButton} onClick={onDelete}>
            🗑️
          </Button>
        </div>
      </div>
    </li>
  );
};
