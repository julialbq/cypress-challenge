import { NewEntryButton } from "./NewEntryButton";
import cx from "./Dashboard.module.scss";
import { DashboardEntry } from "./DashboardEntry";
import { isAfter } from "date-fns";
import { useEntries } from "../hooks/useEntries";

export const Dashboard = () => {
  const { entries, deleteEntry } = useEntries();
  const sortedEntries = entries.sort((first, second) =>
    isAfter(second.date, first.date) ? -1 : 1
  );

  return (
    <div>
      <div className={cx.newEntryButtonRow}>
        <NewEntryButton />
      </div>

      <ul className={cx.entryList}>
        {sortedEntries.map((entry) => (
          <DashboardEntry
            key={entry.id}
            entry={entry}
            onDelete={() => deleteEntry(entry.id)}
          />
        ))}
      </ul>
    </div>
  );
};
