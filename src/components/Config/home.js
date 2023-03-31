import Sidebar from "../Sidebar/Sidebar";
import Feed from "../Feed/Feed";
import Widgets from "../Widgets/Widgets";

export default function Home() {
  return (
    <div className="app">
      <Sidebar />
      {/* Feed */}
      <Feed />
      {/* widgets */}
      <Widgets />
    </div>
  );
}
