import { isLoggedIn } from "./actions";
import { getSiteContent } from "@/lib/content";
import AdminDashboard from "./AdminDashboard";
import AdminLogin from "./AdminLogin";

export default async function AdminPage() {
  const loggedIn = await isLoggedIn();
  if (!loggedIn) return <AdminLogin />;

  const content = await getSiteContent();
  return <AdminDashboard content={content} />;
}
