import AppLayout from "../components/AppLayout";
import SettingsPanel from "../components/SettingsPanel";

export default function Settings() {
  return (
    <AppLayout title="Settings" subtitle="Themes, accents, text size, animation, and response style">
        <div className="scrollbar-thin h-full overflow-y-auto p-4 md:p-6">
          <SettingsPanel />
        </div>
    </AppLayout>
  );
}
