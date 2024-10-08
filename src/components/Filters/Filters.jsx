import CheckboxFilter from "../customsComponents/CheckboxFilter/CheckboxFilter";
import style from "./Filters.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";

import InputLocation from "../customsComponents/InputLocation/InputLocation";
import Button from "../customsComponents/Button/Button";

const categoriesEquipment = [
  {
    title: "AC",
    icon: "airConditioner",
    id: "airConditioner",
  },
  {
    title: "Automatic",
    icon: "automatic",
    id: "transmission",
  },
  {
    title: "Kitchen",
    icon: "kitchen",
    id: "kitchen",
  },
  {
    title: "TV",
    icon: "tv",
    id: "TV",
  },
  {
    title: "Shower/WC",
    icon: "ion_water-outline",
    id: "bathroom",
  },
  {
    title: "CD",
    icon: "icon-park-outline_cd",
    id: "CD",
  },
  {
    title: "Toilet",
    icon: "mingcute_toilet-paper-line",
    id: "toilet",
  },
  {
    title: "Gas",
    icon: "mdi_gas",
    id: "gas",
  },
  {
    title: "Radio",
    icon: "solar_radio-linear",
    id: "radio",
  },
  {
    title: "Bed",
    icon: "bed",
    id: "beds",
  },
  {
    title: "Freezer",
    icon: "arcticons_freezer",
    id: "freezer",
  },
  {
    title: "microwave",
    icon: "streamline_microwave",
    id: "microwave",
  },
  {
    title: "water",
    icon: "water",
    id: "water",
  },
];
const categoriesType = [
  {
    title: "Van",
    icon: "camper",
    id: "panelTruck",
  },
  {
    title: "Fully Integrated",
    icon: "camper1",
    id: "fullyIntegrated",
  },
  {
    title: "Alcove",
    icon: "camper2",
    id: "alcove",
  },
];
const Filters = ({ globalParams, setGlobalParams }) => {
  const [selectedCategoriesForm, setSelectedCategoriesForm] = useState([]);
  const [selectedCategoriesDetails, setSelectedCategoriesDetails] = useState(
    []
  );
  const dispatch = useDispatch();
  const [location, setLocation] = useState("");

  const handleCheckboxChangeForm = (e) => {
    const { checked } = e.currentTarget;
    const value = e.currentTarget.getAttribute("value");

    if (!checked) {
      setSelectedCategoriesForm([...selectedCategoriesForm, value]);
    } else {
      setSelectedCategoriesForm(
        selectedCategoriesForm.filter((category) => category !== value)
      );
    }
  };

  const handleCheckboxChangeDetails = (e) => {
    const { checked } = e.currentTarget;
    const value = e.currentTarget.getAttribute("value");

    if (!checked) {
      setSelectedCategoriesDetails([...selectedCategoriesDetails, value]);
    } else {
      setSelectedCategoriesDetails(
        selectedCategoriesDetails.filter((category) => category !== value)
      );
    }
  };

  const onSearchClick = () => {
    setGlobalParams({
      location,
      selectedCategoriesDetails,
      selectedCategoriesForm,
      page: 1,
    });
  };
  return (
    <div className={style.container}>
      <div className={style.blockLoc}>
        <p className={style.location}>Location</p>
        <InputLocation value={location} setValue={setLocation} />
      </div>
      <p className={style.filter}>Filters</p>
      <div className={style.filterCategory}>
        <h3 className={style.nameFilter}>Vehicle equipment</h3>
        <div className={style.line}></div>
        <ul className={style.listF}>
          {categoriesEquipment.map((category, i) => {
            const isActive = selectedCategoriesDetails.some((el) => {
              return el === category.id;
            });

            return (
              <li key={i} className={style.itemF}>
                <CheckboxFilter
                  handleCheckboxChange={handleCheckboxChangeDetails}
                  title={category.title}
                  icon={category.id}
                  id={category.id}
                  isActive={isActive}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div className={style.filterType}>
        <h3 className={style.nameFilter}>Vehicle type</h3>
        <div className={style.line}></div>
        <ul className={style.listF}>
          {categoriesType.map((category, i) => {
            const isActive = selectedCategoriesForm.some(
              (el) => el === category.id
            );
            return (
              <li key={i} className={style.itemF}>
                <CheckboxFilter
                  handleCheckboxChange={handleCheckboxChangeForm}
                  title={category.title}
                  icon={category.id}
                  id={category.id}
                  isActive={isActive}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div className={style.btn}>
        <Button onClick={onSearchClick}>Search</Button>
      </div>
    </div>
  );
};

export default Filters;
