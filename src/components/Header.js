import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCategory, toogleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { MY_IMAGE } from "../utils/constant";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, SetSearchSuggestion] = useState();
  const [showSuggestion, SetshowSuggestion] = useState(false);

  const searchVideo = () => {
    dispatch(setCategory(searchQuery));
    setSearchQuery("");
  };

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestion(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    try {
      const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      if (!response.ok) {
        throw new Error("Failed to fetch suggestions");
      }
      const data = await response.json();
      console.log(data);
      SetSearchSuggestion(data[1] || []);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  // code to automatically close the sidebar by dispaching an action to close the side bar
  const dispatch = useDispatch();

  const toogleMenuBar = () => {
    dispatch(toogleMenu()); //toggle menu is reducer which we have created in our app slice
  };
  return (
    <div className="flex  space-x-28 shadow-lg mt-5">
      <div>
        <img
          className="w-10 h-10 cursor-pointer "
          onClick={() => toogleMenuBar()}
          alt="hk"
          src="https://p7.hiclipart.com/preview/616/930/362/hamburger-button-computer-icons-menu-bar-line.jpg"
        />
      </div>

      <div>
        <a href="/">
          <img
            className="w-36 h-32"
            alt="Not Found"
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
          />
        </a>
      </div>

      <div>
        <div>
          <input
            className="bg-slate-100  h-12 rounded-l-xl  w-[35rem] mt-8"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => SetshowSuggestion(true)}
            //onBlur={() => SetshowSuggestion(false)}
          />
          <button
            onClick={() => {
              searchVideo();
            }}
            className="bg-slate-100 rounded-r-xl w-12 h-12"
          >
            🔍
          </button>
        </div>
        {showSuggestion && (
          <div className=" absolute bg-slate-100 rounded-r-xl w-[35rem]  ">
            <ul>
              {suggestion?.map((suggestionItem) => (
                <div key={suggestionItem}>
                  <button
                    onClick={() => {
                      searchVideo({suggestionItem});
                    }}
                    className="cursor-pointer "
                    type="text "
                  >
                    🔍{suggestionItem}
                  </button>
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <img
          className="w-16 h-10  rounded-3xl"
          alt="hk"
          src="https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
        />
      </div>
    </div>
  );
};

export default Header;
