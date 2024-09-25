import ButtonDefaultElement from "@/components/Elements/ButtonDefaults";
import RoundedButtonElement from "@/components/Elements/Buttons/RoundedButtons";
import ImgUsersElement from "@/components/Elements/Images/ImgUsers";
import InputElement from "@/components/Elements/Input";
import SelectElement from "@/components/Elements/Input/Selects";
import SelectSearchElement from "@/components/Elements/Input/Selects/SelectSearchs";
import LabelsElement from "@/components/Elements/Labels";
import HeadTitleElement from "@/components/Elements/Labels/HeadTitle";
import LabelTagsElement from "@/components/Elements/Labels/LabelTags";
import TableDefaultElement from "@/components/Elements/Tables";
import TabWizardElement from "@/components/Elements/TabWizards";
import Link from "next/link";

const ElementPage = () => {
  return (
    <>
      <div className="flex justify-between flex-col">
        <div className="flex flex-row">
          <SelectElement
            name="select"
            placeholder="Select"
            className="w-1/4"
            data={[
              {
                value: "1",
                text: "Option 1",
              },
              {
                value: "2",
                text: "Option 2",
              },
            ]}
          />
          <SelectSearchElement
            text="Option 1"
            values={["Option 1"]}
            isHideItem={true}
            options={[
              {
                value: "1",
                text: "Option 1",
                onClick: () => {},
              },
            ]}
          />
          <ButtonDefaultElement
            text="Success"
            className="bg-green-600 border border-green-700 text-white hover:bg-green-700"
          />
          <ButtonDefaultElement
            text="Danger"
            className="bg-red-600 border border-red-700 text-white hover:bg-red-700"
          />
          <ButtonDefaultElement
            text="Warning"
            className="bg-yellow-600 border border-yellow-700 text-white hover:bg-yellow-700"
          />
          <ButtonDefaultElement
            text="Info"
            className="bg-blue-600 border border-blue-700 text-white hover:bg-blue-700"
          />
        </div>

        <RoundedButtonElement className="bg-red-100 text-red-500" />
        <TableDefaultElement
          title="Table List"
          subTitle="Subtitle"
          addButton={true}
          thItems={["title", "subtitle"]}
          trItems={[
            {
              title: "Title",
              subtitle: "Subtitle",
            },
            {
              title: "Title 2",
              subtitle: "Subtitle 2",
            },
          ]}
        />
      </div>
      <hr />

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

export default ElementPage;
