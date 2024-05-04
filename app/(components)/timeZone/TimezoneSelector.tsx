// import Image from "next/image";
// import React, { useState } from "react";
// import world from "../../../public/vectors/globe.png";
// import { TimeZone, TimezoneSelectorProps } from "@/app/constants/types";
// import moment from "moment-timezone";

// const TimezoneSelector: React.FC<TimezoneSelectorProps> = ({
//   timeZones,
//   onChange,
// }) => {
//   const [selectedTimeZone, setSelectedTimeZone] = useState<string | null>(null);

//   const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     const value = event.target.value;
//     setSelectedTimeZone(value);
//     onChange(value);
//   };

//   const hours: string = String(new Date().getHours()).padStart(2, "0");
//   const mints: string = String(new Date().getMinutes()).padStart(2, "0");

//   return (
//     <div className="flex">
//       <Image src={world} className="h-4 w-4 mt-2" alt="world" />
//       <select
//         id="timezone-select"
//         className="rounded-md p-2 font-normal"
//         value={selectedTimeZone || ""}
//         onChange={handleChange}
//       >
//         {timeZones.map((timeZone: TimeZone, index: number) => (
//           <option key={index} value={timeZone.value}>
//             {timeZone.label}
//             {`(${hours} : ${mints})`}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default TimezoneSelector;

import React, { useState } from "react";
import moment from "moment-timezone";
import { TimezoneSelectorProps } from "@/app/constants/types";

const TimezoneDropdown: React.FC<TimezoneSelectorProps> = ({ onChange }) => {
  const [selectedTimeZone, setSelectedTimeZone] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedTimeZone(value);
    onChange(value);
  };

  const timezones = moment.tz.names();

  return (
    <select value={selectedTimeZone || ""} onChange={handleChange}>
      {timezones.map((timezone) => (
        <option key={timezone} value={timezone}>
          {`${timezone} (${moment().tz(timezone).format("hh:mm:ss A")})`}
        </option>
      ))}
    </select>
  );
};

export default TimezoneDropdown;
