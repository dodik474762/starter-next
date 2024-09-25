import ButtonElement from "../Buttons";
import ImgUsersElement from "../Images/ImgUsers";
import LabelsElement from "../Labels";
import LabelTagsElement from "../Labels/LabelTags";
import TabWizardElement from "../TabWizards";
import FooterElement from "./Footers";
import NavbarElement from "./Navbars";
import RightContentsElement from "./RightContents";
import TopsMenusElement from "./TopMenus";

type AppShellPros = {
  children: React.ReactNode;
};

const LayoutsElement = (props: AppShellPros) => {
  const { children } = props;
  return (
    <>
      <div className="bg-white">
        <NavbarElement />
        <div className="px-6 mt-4 overflow-x-hidden lg:px-10">
          <TopsMenusElement />
          <TabWizardElement
            data={[
              {
                title: "Overview",
                keyNode: true,
                isActive: true,
                onClick: () => {
                  console.log("click 1");
                },
              },
              {
                title: "Monitoring",
                keyNode: true,
                isActive: false,
                onClick: () => {
                  console.log("click 2");
                },
              },
            ]}
          />
          <div className="container pb-10 mx-auto mt-8">
            <div className="md:flex">
              <div className="w-full mr-4 md:w-3/4">{children}</div>
              <div className="ml-4 md:w-1/4">
                <RightContentsElement/>
              </div>
            </div>
            <FooterElement />
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutsElement;
