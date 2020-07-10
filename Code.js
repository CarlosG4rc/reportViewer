function doGet() {
    var template =  HtmlService.createTemplateFromFile('index'); // Método para la creación del  template
    return template.evaluate().addMetaTag('viewport', 'width=device-width, initial-scale=1.0'); // se evalua la metadata de la cabecera
}
function include (filename) {
    return HtmlService.createTemplateFromFile(filename).getRawContent();
}
function completar(){
    var ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1-S-e9_uWrQlgPUdZ8BT6KBlsO78HXgh9EJNwPfLeKRE/edit#gid=0');
    var sheet = ss.getSheetByName('BDRep');
    var data = sheet.getRange(1,1).getDataRegion().getValues();
    var alumno = {};
    data.forEach(function(n){
        alumno[n[0]]=null;
    });
    return alumno;
}
function getCReportes(alumno){
    //const alumno = {nombre: "GARCIA PADILLA CARLOS"};
    var ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1-S-e9_uWrQlgPUdZ8BT6KBlsO78HXgh9EJNwPfLeKRE/edit#gid=0');
    var sheet = ss.getSheetByName('BDRep');
    var lastrow = sheet.getDataRange().getNumRows();
    var column = sheet.getDataRange();
    var value = column.getValues();
    var arrp = [];
      
    for(var i = 1; i < lastrow; i++){
    //Logger.log(lastrow);
        const reportes = [];
        if(value[i][0] == alumno.nombre){
            reportes.push( value[i] && value[i][3]);
            reportes.push( value[i] && value[i][2]);
            reportes.push( value[i] && value[i][4]);
            reportes.push( value[i] && value[i][5]);
            reportes.push( value[i] && value[i][7]);
            arrp.push(reportes);
       }
    }
    //Logger.log(arrp);
    return JSON.stringify(arrp);
}