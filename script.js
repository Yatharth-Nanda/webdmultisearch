var s = document.querySelector("input");
var gs;
var query, arr;
s.addEventListener("keydown", search);
var i = 0;

var content = "";
function search(event) {
  if (event.key == "Enter") {
    content = content.trim();
    arr = content.split(" ");
    search_target = arr.splice(0, 1).toString();

    search_target = search_target.toLowerCase();
    query = arr.join(" ").replace("Backspace", "");

    switch (search_target) {
      case "google":
        window.location.href = `https://www.google.co.in/search?q=${query}`;
        break;
      case "docs":
        window.location.href = `https://docs.google.com/document/?q=${query}`;
        break;
      case "youtube":
        window.location = `https://www.youtube.com/results?search_query=${query}`;
        break;

      case "slides":
        window.location = `https://docs.google.com/presentation/?q=${query}`;
        break;
      case "drive":
        window.location = `https://drive.google.com/drive/search?q=${query}`;
        break;
      case "sheets":
        window.location = `https://docs.google.com/spreadsheets/?q=${query}`;
        break;
      default:
        window.location = `https://www.google.co.in/search?q=${search_target}$%20{query}`;
    }

    gs = document.querySelector("input");
    console.log(gs);
  }

  console.log(event.key);
  content += event.key;
  console.log(content);
}
