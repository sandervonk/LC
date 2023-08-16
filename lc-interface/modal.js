//RegExp: ^.*\/\/mvla.lon-capa.net((?!.*modal=yes.*).)*$

document.head.innerHTML += `<style>
:root{
    --bg: #ffffff;
    --secondary-bg: #efefef;
    --button-bg: #e9e9e9;
}
body{
    max-width: 700px;
    margin: 20px auto !important;
    border-radius: 25px;
    min-height: 100vh;
    padding: 25px;
    height: fit-content;
}
html {
    background: var(--secondary-bg);
    padding: 0;
}
#LC_realm {
    display: none;
}
span.LC_message_link {
    position: unset !important;
}
div.LC_feedback_link {
    position: fixed;
    right: 40px;
    top: 50%;
    min-width: 200px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    background: var(--bg);
    padding: 25px;
    border-radius: 25px;
    border: none;
    width: fit-content;
}
.LC_feedback_link:first-child {
    margin-right: 15px;
}
.LCmodal-window {
    border-radius: 25px;
    overflow: hidden;
    padding: 25px;
  background-color: var(--bg);
}
.LCclose-window{
    top: 12.5px;
      right: 12.5px
}
body[onload="window.focus();setposttype();"]{
    height: fit-content !important;
  
}
body{
      max-height: fit-content;
    min-height: unset;
}
button, input[type='button']{
  padding: 10px 20px;
  background-color: var(--button-bg);
  border-radius: 10px;
  margin: 
  border:none;
}
</style>`;
let original = changed;
function changedAlt() {
  if (!document.getElementsByName("loadnotes").length) {
    document.annotInfo.innerHTML += `<input type="button" id="loadnotes" name="loadnotes" value="Load Notes" onclick="javascript:checkAndApplyNotes()">`;
  }
  if (original) {
    original();
  }
}
changed = changedAlt;

function checkAndApplyNotes() {
  if (document.iframebox) {
    document.iframebox.remove();
  }
  if (document.annotInfo) {
    document.annotInfo.style = "";
  }
  document.body.style = "";
  let box = document.querySelector("body > center > form > textarea");
  if (box !== null) {
    let contents = box.value;
    if (/^LC\/[^\s]+$/.test(box.value)) {
      console.log("replacing notes link with embedded contents");
      let link = box.value;
      let iframeContents = `<iframe name="iframebox" src="${
        "https://svonk.me/" + link
      }" style="width:100%;height:100%">Notes iframe couldn't be loaded</iframe>`;
      document.body.style =
        "height: 100%;margin: 0 !important;box-sizing: border-box;border-radius: 0;padding: 0;width: 100%;max-width: unset;overflow-x:hidden;";
      document.body.innerHTML += iframeContents;

      document.annotInfo.style = "display: none";
    }
  }
}
