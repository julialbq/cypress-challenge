import Link from "next/link";
import { useRouter } from "next/router";
import { routes } from "../routing/routes";

export const useNavigation = () => {
  const router = useRouter();

  const viewState = router.query;

  const goToDashboard = () => router.push(routes.dashboard());

  const goToNewEntry = () => router.push(routes.newEntry());

  const goToEditEntry = (id) => router.push(routes.editEntry(id));

  return {
    viewState,
    goToDashboard,
    goToNewEntry,
    goToEditEntry,
  };
};
