import ButtonDefaultElement from "@/components/Elements/ButtonDefaults";
import ButtonElement from "@/components/Elements/Buttons";
import ImgUsersElement from "@/components/Elements/Images/ImgUsers";
import InputElement from "@/components/Elements/Input";
import LabelsElement from "@/components/Elements/Labels";
import HeadTitleElement from "@/components/Elements/Labels/HeadTitle";
import LabelTagsElement from "@/components/Elements/Labels/LabelTags";
import ListViewElement from "@/components/Elements/ListViews";
import TabWizardElement from "@/components/Elements/TabWizards";
import Link from "next/link";

const StarterPage = () => {
  return (
    <>
      <div className="bg-white">
        <nav className="bg-gray-900">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="justify-center w-1/5 text-center">
                    <svg
                      className="w-8 h-8 mx-auto text-gray-200 cursor-pointer fill-current hover:text-gray-300"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="flex items-center ml-10">
                    <InputElement
                      placeholder="Search Jump To"
                      className="hidden px-4 py-1 text-sm text-white placeholder-white bg-gray-700"
                    />
                    <Link
                      href={"/"}
                      className="px-3 py-2 ml-4 text-sm font-semibold text-white bg-gray-900 rounded-md focus:outline-none hover:bg-gray-700 focus:text-white focus:bg-gray-700"
                    >
                      Dashboard
                    </Link>
                    <Link
                      href={"/"}
                      className="px-3 py-2 ml-4 text-sm font-semibold text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                    >
                      Pull requests
                    </Link>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="flex items-center ml-4 md:ml-6">
                  <button
                    className="p-1 text-gray-400 border-2 border-transparent rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
                    aria-label="Notifications"
                  >
                    <svg
                      className="w-6 h-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </button>

                  <div className="relative ml-3">
                    <div>
                      <button
                        className="flex items-center max-w-xs text-sm text-white rounded-full focus:outline-none focus:shadow-solid"
                        id="user-menu"
                        aria-label="User menu"
                        aria-haspopup="true"
                      >
                        <img
                          className="w-8 h-8 rounded-full"
                          src="https://images.unsplash.com/photo-1592242481757-a0519c3d0d89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex -mr-2 md:hidden">
                <button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
                  <svg
                    className="block w-6 h-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
        <div className="px-6 mt-4 overflow-x-hidden lg:px-10">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="flex items-center">
              <span>
                <svg
                  className="w-4 h-4 mr-2 text-gray-600 fill-current"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
                  ></path>
                </svg>
              </span>
              <div className="text-xl font-medium text-blue-700 cursor-pointer hover:underline">
                Dashboard
              </div>
              <span className="mx-1 text-xl font-medium text-gray-800">/</span>
              <div className="text-xl font-semibold text-blue-700 cursor-pointer hover:underline">
                monitoring
              </div>
            </div>
            <div className="mt-4 mb-2 md:hidden">
              <span className="text-sm">
                A utility-first CSS framework for rapid UI development.
              </span>
              <div className="my-2">
                <a
                  className="flex items-center mb-1 text-sm font-semibold text-blue-600 hover:underline"
                  href="#"
                >
                  <svg
                    className="w-4 h-4 mr-2 text-gray-700"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                  </svg>
                  tailwindcss.com/
                </a>
                <a
                  href=""
                  className="flex items-center mb-1 text-sm font-medium text-gray-700 hover:underline"
                >
                  <svg
                    height="16"
                    className="w-4 h-4 mr-2 text-gray-700 fill-current"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z"
                    ></path>
                  </svg>
                  MIT License
                </a>
                <div className="flex">
                  <a
                    href=""
                    className="flex items-center mb-1 text-sm font-medium text-gray-700 hover:underline hover:text-blue-500"
                  >
                    <svg
                      className="w-4 h-4 mr-2 fill-current"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                    </svg>
                    24.1k stars
                  </a>
                  <a
                    href=""
                    className="flex items-center mb-1 ml-2 text-sm font-medium text-gray-700 hover:underline hover:text-blue-500"
                  >
                    <svg
                      className="w-4 h-4 mr-1 fill-current"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      height="16"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                      ></path>
                    </svg>
                    1.1k forks
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:flex md:justify-between">
              <ButtonElement text="Watch" suffixText="423" />
              <ButtonElement text="Data" className="ml-2" />
              <ButtonElement text="Watch" suffixText="423" className="ml-2" />
            </div>
            <div className="flex justify-between md:hidden">
              <button
                type="button"
                className="flex justify-center w-1/2 py-1 mr-2 text-center bg-gray-100 border border-gray-400 rounded-lg focus:outline-none hover:bg-gray-200"
              >
                <div className="flex items-center px-2">
                  <svg
                    className="w-4 h-4 mr-1 text-gray-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span className="self-center text-sm font-medium">
                    Unstar
                  </span>
                </div>
              </button>
              <button
                type="button"
                className="flex justify-center w-1/2 py-1 ml-2 text-center bg-gray-100 border border-gray-400 rounded-lg focus:outline-none hover:bg-gray-300"
              >
                <div className="flex items-center px-2">
                  <svg
                    className="w-4 h-4 mr-1 text-gray-700"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                  <span className="self-center text-sm font-medium">Watch</span>
                  <svg
                    className="w-3 h-3 ml-1 text-gray-700 fill-current"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>

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
              <div className="w-full mr-4 md:w-3/4">
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
                <div className="py-6 border-b md:border md:rounded-lg md:px-8 mt-2">
                  <HeadTitleElement text="Title" className="text-lg" />
                  <div className="my-6">
                    <img
                      className="w-64"
                      src="https://camo.githubusercontent.com/87d7034892fd41dc88f3606bb44b853f87cd2c51/68747470733a2f2f7265666163746f72696e6775692e6e7963332e63646e2e6469676974616c6f6365616e7370616365732e636f6d2f7461696c77696e642d6c6f676f2e737667"
                      alt=""
                    />
                    <LabelsElement
                      text="Labels"
                      className="semi-bold text-lg"
                    />
                    <hr />
                  </div>
                </div>
              </div>
              <div className="ml-4 md:w-1/4">
                <div className="hidden md:block">
                  <LabelsElement text="News feed" className="text-base font-semibold text-black" />
                  <div className="pb-2 mt-4 border-b">
                    <LabelsElement text="A utility-first CSS framework for rapid UI development." className="text-sm lg:text-base" />
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
                  <p className="text-base font-semibold text-black">
                    Latest release
                  </p>
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
                  <div className="mt-4 text-xs text-blue-600">
                    + 75 releases
                  </div>
                </div>
                <div className="px-6 py-6 -mx-10 border-b md:mx-0 md:px-0">
                  <p className="text-base font-semibold text-black">
                    Contributors
                    <span className="w-4 h-4 px-2 py-1 ml-1 text-xs bg-gray-300 rounded-full">
                      {109}
                    </span>
                  </p>
                  <div className="flex flex-wrap items-center mt-4 -mx-2 overflow-hidden">
                  <ImgUsersElement className="mx-2" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />                    
                  <ImgUsersElement className="mx-2" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />                    
                  <ImgUsersElement className="mx-2" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />                    
                  <ImgUsersElement className="mx-2" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />                    
                  </div>
                  <p className="pt-2 text-xs font-medium text-blue-700 hover:underline">
                    + 4 contributors
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <div className="w-full px-8 mx-auto hidden md:block md:container">
                <div className="items-center justify-between py-8 border-t md:flex">
                  <div className="flex justify-start justify-between text-xs md:mt-0 md:w-2/5">
                    <div className="mr-4 text-gray-600">
                      &copy; 2020 Dodik Rismawan, Inc.
                    </div>
                    <div className="mr-4">
                      <a
                        href="#"
                        className="text-blue-600 hover:underline focus:outline-none"
                      >
                        Terms
                      </a>
                    </div>
                    <div className="mr-4">
                      <a
                        href="#"
                        className="text-blue-600 hover:underline focus:outline-none"
                      >
                        Privacy
                      </a>
                    </div>
                    <div className="mr-4">
                      <a
                        href="#"
                        className="text-blue-600 hover:underline focus:outline-none"
                      >
                        Security
                      </a>
                    </div>
                    <div className="mr-4">
                      <a
                        href="#"
                        className="text-blue-600 hover:underline focus:outline-none"
                      >
                        Status
                      </a>
                    </div>
                    <div className="mr-4">
                      <a
                        href="#"
                        className="text-blue-600 hover:underline focus:outline-none"
                      >
                        Help
                      </a>
                    </div>
                  </div>
                  <div className="justify-center hidden w-1/5 text-center md:block">
                    <svg
                      className="w-6 h-6 mx-auto text-gray-500 cursor-pointer fill-current hover:text-gray-600"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </div>
                  <div className="flex justify-end justify-between mt-2 text-xs text-right md:mt-0 md:w-2/5">
                    <div className="ml-4">
                      <a
                        href="#"
                        className="text-blue-600 hover:underline focus:outline-none"
                      >
                        Contact GitHub
                      </a>
                    </div>
                    <div className="ml-4">
                      <a
                        href="#"
                        className="text-blue-600 hover:underline focus:outline-none"
                      >
                        Pricing
                      </a>
                    </div>
                    <div className="ml-4">
                      <a
                        href="#"
                        className="text-blue-600 hover:underline focus:outline-none"
                      >
                        Api
                      </a>
                    </div>
                    <div className="ml-4">
                      <a
                        href="#"
                        className="text-blue-600 hover:underline focus:outline-none"
                      >
                        Training
                      </a>
                    </div>
                    <div className="ml-4">
                      <a
                        href="#"
                        className="text-blue-600 hover:underline focus:outline-none"
                      >
                        Blog
                      </a>
                    </div>
                    <div className="ml-4">
                      <a
                        href="#"
                        className="text-blue-600 hover:underline focus:outline-none"
                      >
                        About
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 border-t md:hidden border-gray-200 pt-8 mx-auto">
              <p className="text-base leading-6 text-gray-600 xl:text-center">
                © 2020 GitHub, Inc.,
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StarterPage;
