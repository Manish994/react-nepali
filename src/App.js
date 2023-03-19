import "./App.css";
import NepaliIndex from "./component";
import $ from "jquery";
import googleTransliterate from "react-nepali-typing";

function App() {
  let inputLanguage = "ne-t-i0-und";
  let maxResult = 1;
  let request = new XMLHttpRequest();
  $(document).ready(function () {
    //NEPALI TYPING
    $(".local-language").keypress(function (e) {
      if (e.code === "Space" || e.keyCode === 32) {
        let translateInputType = $(e)[0].target.value;
        let getInputId = e.target.id;
        if (!!translateInputType) {
          googleTransliterate(
            request,
            translateInputType,
            inputLanguage,
            maxResult
          ).then(function (response) {
            if (response.constructor === Array && response.length > 0) {
              let res;
              response.forEach((item) => (res = item[0]));
              res = res + " ";
              if (!!res) {
                $(e)[0].target.value = res;
                $(`${getInputId}`).val(res);
              }
            }
          });
        }
      }
    });
  });
  return (
    <div className="App">
      <NepaliIndex />
    </div>
  );
}

export default App;
