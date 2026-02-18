var ffileExtract = function (e) {
  const file_reader = new FileReader();
  file_reader.onload = (event) => {
    /*Extract text from a PDF-file*/
    const json = AsposePdfExtractText(event.target.result, e.target.files[0].name);
    if (json.errorCode == 0) document.getElementById('output').textContent = json.extractText;
    else document.getElementById('output').textContent = json.errorText;
  };
  file_reader.readAsArrayBuffer(e.target.files[0]);
};
