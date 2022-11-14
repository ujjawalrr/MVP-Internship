function exportTableToExcel(tableId, filename = 'Data'){
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableId);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
    
    filename = filename?filename+'.xls':'excel_data.xls';
    
    downloadLink = document.createElement("a");
    
    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['\ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }else{
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
    
        downloadLink.download = filename;
        
        downloadLink.click();
    }
}
function downloadAsPdf(tableId, filename = 'Data') {
    var tableSelect = document.getElementById(tableId);
    var opt = {
        margin: 1,
        filename: `${filename}.pdf`,
        image: {type:'jpeg', quality: 0.98},
        html2canvas: {scale: 2},
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf(tableSelect,opt);
}