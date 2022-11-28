function addRow(){
    var tbl=document.getElementById("sampleTable");
    var row=tbl.insertRow(0);
    const arr=["Row3 Cell1","Row3 Cell2"]
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML="Row3 Cell1"
    cell2.innerHTML="Row3 Cell2"
}
