import ImgUsersElement from "../../Images/ImgUsers";
import LabelsElement from "../../Labels";
import LabelTagsElement from "../../Labels/LabelTags";

const RightContentsElement = (props: any) => {
  return (
    <>
      <div className="hidden md:block">
        <LabelsElement
          text="News feed"
          className="text-base font-semibold text-black"
        />
        <div className="pb-2 mt-4 border-b">
          <LabelsElement
            text="A utility-first CSS framework for rapid UI development."
            className="text-sm lg:text-base"
          />
          <div className="my-4">
            <div className="flex flex-wrap gap-2 my-4">
              <LabelTagsElement text="Finance" />
              <LabelTagsElement text="Vendor" />
              <LabelTagsElement text="Sales Orders" />
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 py-6 -mx-10 border-b md:mx-0 md:px-0">
        <p className="text-base font-semibold text-black">Latest release</p>
        <div className="flex mt-4 text-sm font-semibold text-black">
          <svg
            className="w-4 h-4 mt-1 mr-2 text-green-600"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
          </svg>
          <div>
            v1.4.6 <br />
            <span className="text-xs text-gray-600">on May 8</span>
          </div>
        </div>
        <div className="mt-4 text-xs text-blue-600">+ 75 releases</div>
      </div>
      <div className="px-6 py-6 -mx-10 border-b md:mx-0 md:px-0">
        <p className="text-base font-semibold text-black">
          Contributors
          <span className="w-4 h-4 px-2 py-1 ml-1 text-xs bg-gray-300 rounded-full">
            {109}
          </span>
        </p>
        <div className="flex flex-wrap items-center mt-4 -mx-2 overflow-hidden">
          <ImgUsersElement
            className="mx-2"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />
          <ImgUsersElement
            className="mx-2"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />
          <ImgUsersElement
            className="mx-2"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />
          <ImgUsersElement
            className="mx-2"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />
        </div>
        <p className="pt-2 text-xs font-medium text-blue-700 hover:underline">
          + 4 contributors
        </p>
      </div>
    </>
  );
};

export default RightContentsElement;
