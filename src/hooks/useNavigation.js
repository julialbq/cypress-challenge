import { useRouter } from "next/router";

export const useNavigation = () => {
  const router = useRouter();

  const viewState = router.query;

  const goToDashboard = () => router.push("/");

  const goToNewEntry = () => router.push("/newEntry");

  const goToEditEntry = (id) => router.push(`/editEntry/${id}`);

  return {
    viewState,
    goToDashboard,
    goToNewEntry,
    goToEditEntry,
  };
};
