let resumo = document.getElementById('descricao'); 

resumo.innerHTML = '<strong> Produto(s): </strong>' 
+ sessionStorage.descricao + '<strong>' + ' - ' + sessionStorage.valor + '<strong><br><br>';