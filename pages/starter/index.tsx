import ButtonDefaultElement from "@/components/Elements/ButtonDefaults";
import ButtonElement from "@/components/Elements/Buttons";
import ImgUsersElement from "@/components/Elements/Images/ImgUsers";
import InputElement from "@/components/Elements/Input";
import SelectElement from "@/components/Elements/Input/Selects";
import LabelsElement from "@/components/Elements/Labels";
import HeadTitleElement from "@/components/Elements/Labels/HeadTitle";
import LabelTagsElement from "@/components/Elements/Labels/LabelTags";
import ListViewElement from "@/components/Elements/ListViews";
import PaginationElement from "@/components/Elements/Paginations";
import TableDefaultElement from "@/components/Elements/Tables";
import TabWizardElement from "@/components/Elements/TabWizards";
import Link from "next/link";

const StarterPage = () => {
  return (
    <>
      <div className="flex justify-between">
        <InputElement
          placeholder="Search"
          className="border border-gray-400 px-4 py-1 text-sm"
        />
        <div className="flex hidden md:block md:flex">
          <ButtonDefaultElement
            text="Go to File"
            className="bg-gray-100 border border-gray-400"
          />
          <ButtonDefaultElement
            text="Add Data"
            className="bg-blue-100"
            suffixIcon={true}
          />
          <ButtonDefaultElement
            text="Confirm"
            className="bg-green-600 border border-green-700 text-white hover:bg-green-700"
          />
        </div>
        <ButtonDefaultElement
          text="Go to File"
          className="bg-gray-100 border border-gray-400 md:hidden"
        />
      </div>
      <ListViewElement
        title="Title"
        subTitle="SubTitle"
        onRefreshClick={() => {}}
        data={[
          {
            title: "Overview",
            remars: "Remarks Overview",
            description: "Description Overview",
            onClick: () => {
              console.log("click 1");
            },
          },
          {
            title: "Overview 2",
            remars: "Remarks Overview 2",
            description: "Description Overview 2",
            onClick: () => {
              console.log("click 2");
            },
          },
        ]}
      />
      <PaginationElement
        className="mb-4 justify-end"
        pages={[
          {
            active: true,
            page: 1,
          },
          {
            active: false,
            page: 2,
          },
        ]}
      />

      <div className="py-6 border-b md:border md:rounded-lg md:px-8 mt-2">
        <HeadTitleElement text="Title" className="text-lg" />
        <div className="my-6">
          <img
            className="w-64"
            src="https://camo.githubusercontent.com/87d7034892fd41dc88f3606bb44b853f87cd2c51/68747470733a2f2f7265666163746f72696e6775692e6e7963332e63646e2e6469676974616c6f6365616e7370616365732e636f6d2f7461696c77696e642d6c6f676f2e737667"
            alt=""
          />
          <LabelsElement text="Labels" className="semi-bold text-lg" />
          <hr />
        </div>
      </div>
    </>
  );
};

export default StarterPage;
