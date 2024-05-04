import MenuHeader from "@/app/(components)/menuHeader/MenuHeader";
import ScheduleEvent from "./component/ScheduleEvent";

export default function Page() {
  return (
    <div>
      <div>
        <MenuHeader />
      </div>
      <ScheduleEvent />
    </div>
  );
}
