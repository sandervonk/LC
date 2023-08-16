//RegExp: .*\/\/mvla.lon-capa.net\/.*

document.head.innerHTML += `<style>
:root{
    --bg: #ffffff;
    --secondary-bg: #efefef;
    --button-bg: #e9e9e9;
}
button, input[type='button'], input[type='file']{
  padding: 10px 20px;
  background-color: var(--button-bg);
  border-radius: 10px;
  border:none;
  margin:5px 0px;
  cursor:pointer;
  font-weight: bold;
}
table, table.LC_pick_box, table.LC_data_table {
  border: none;
}


tbody .LC_pick_box_row:nth-child(1) .LC_pick_box_title{
  border-top-left-radius: 15px;
}
tbody .LC_pick_box_row:nth-last-child(1) .LC_pick_box_title{
  border-bottom-left-radius: 15px;
}
tbody .LC_pick_box_row:nth-child(1) .LC_pick_box_value{
  border-top-right-radius: 15px;
}
tbody .LC_pick_box_row:nth-last-child(1) .LC_pick_box_value{
  border-bottom-right-radius: 15px;
}
table.LC_pick_box .LC_pick_box_separator {
  background-color: var(--bg);
}
span span.LC_help_open_topic {
  border:none;
  background-color: var(--button-bg);
  cursor: pointer;
  border-radius: 10px;
  border:none;
  padding: 5px 10px;
}
</style>`;
