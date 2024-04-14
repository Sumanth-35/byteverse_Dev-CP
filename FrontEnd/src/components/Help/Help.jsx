import React ,{useEffect} from "react";
import { useTranslation } from "react-i18next";
import Aos from "aos";
import "aos/dist/aos.css";
const Help = () => {
  const { t } = useTranslation();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center p-4 mt-20 bg-green-200" data-aos="fade-up">
      <h5 className="flex text-4xl font-bold"> {t(["help_header"])}</h5>

      <div className=" mt-10">
        <h2 class="mb-2 text-lg font-semibold ">{t(["how_to"])}</h2>
        <ul class="max-w-md space-y-5  list-disc list-inside ">
          <li>
            <span class="font-bold"> {t(["phosphorus"])}:</span> {t("help_phosphorus")}
          </li>
          <li>
            <span class="font-bold"> {t(["potassium"])}:</span> {t("help_potassium")}
          </li>
          <li>
            <span class="font-bold"> {t(["nitrogen"])}:</span> {t("help_nitrogen")}
          </li>
          <li>
            <span class="font-bold"> {t(["pH"])}:</span> {t("help_pH")}
          </li>
          <li>
            <span class="font-bold"> {t(["temperature"])}:</span> {t("help_temperature")}
          </li>
          <li>
            <span class="font-bold"> {t(["rainfall"])}:</span> {t("help_rainfall")}
          </li>
          <li>
            <span class="font-bold">{t(["humidity"])}:</span> {t("help_humidity")}
          </li>
          <li>
            <span class="font-bold"> {t(["state"])}:</span> {t("help_state")}
          </li>
          <li>
            <span class="font-bold"> {t(["district"])}:</span> {t("help_district")}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Help;
