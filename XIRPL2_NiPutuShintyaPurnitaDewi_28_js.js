function toggleTable(TableId){
    var table=document.getElementById(TableId);
    if(table.classList.contains('hidden')){
        table.classList.remove('hidden');
    }else{
        table.classList.add('hidden');
    }
}