import { EntryForm } from "./EntryForm";
import { useTranslation } from "../hooks/useTranslation";
import { useKeyPressed } from "../hooks/useKeyPressed";
import { useNavigation } from "../hooks/useNavigation";
import { useEntries } from "../hooks/useEntries";

export const EditEntryForm = () => {
  const { t } = useTranslation();
  const { viewState, goToDashboard } = useNavigation();
  const { entries, editEntry, deleteEntry } = useEntries();

  const entry = entries.find((entry) => entry.id === viewState.id);

  useKeyPressed("Delete", () => {
    deleteEntry(entry.id);

    goToDashboard();
  });

  return (
    <EntryForm
      title={t("editEntryFormTitle")}
      entry={entry}
      onSubmit={(entryIntent) => editEntry(entry.id, entryIntent)}
    />
  );
};
