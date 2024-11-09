// "use client";
import EnglishPage from "./EnglishPage";
// import ArabicPage from "./ArabicPage";

function Blogs() {
  // const [language, setLanguage] = useState("english");

  // const handleLanguageChange = () => {
  //   setLanguage(language === "english" ? "arabic" : "english");
  // };

  return (
    <section className="bg-white pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
      <div className="py-4 px-4 md:px-10 max-w-screen-xl mx-auto relative">
        {/* <button
          onClick={handleLanguageChange}
          className="absolute  -top-1 lg:-top-10 mb-5 inline-block rounded bg-primary bg-gradient-to-r from-primary to-primary2 px-4 py-1 text-center text-xs font-semibold leading-loose text-white"
        >
          {language === "english" ? "Arabic" : "English"}
        </button> */}
        {/* {language === "arabic" ? <ArabicPage /> : <EnglishPage />} */}
        <EnglishPage />
      </div>
    </section>
  );
}

export default Blogs;
