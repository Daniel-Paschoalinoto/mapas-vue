const o={comentario:"",xpath:"//*[@id='tbl']//tr[not(ancestor::thead)]"},a={posclick:"",comentario:"",xpath:"//tr[not(ancestor::thead)]//h2",processadores:[{nome:"padraoTitulo",tipo:"",de:"",para:""}]},t={posclick:!0,comentario:"Avaliar em mais vagas caso a palavra buscada deva ser 'Requisitos' ou 'Descrição'.",xpath:"//section[contains(.,'Requisitos')]",processadores:[{nome:"",tipo:"RegexReplace",de:"Requisitos",para:""},{nome:"padraoDescricao",tipo:"",de:"",para:""}]},e={posclick:"",comentario:"",xpath:"//span[contains(@class,'joblocation')]/span[1]",processadores:[{nome:"",tipo:"SplitFirst",de:",",para:""},{nome:"",tipo:"",de:"",para:""},{nome:"",tipo:"",de:"",para:""}]},s={posclick:"",comentario:"",xpath:"",processadores:[{nome:"",tipo:"",de:"",para:""},{nome:"",tipo:"",de:"",para:""}]},p={posclick:!0,comentario:"",xpath:"//*[@id='root']/div[1]/div[2]/div[1]/div[1]/div[3]/div[2]/p",processadores:[{nome:"padraoTipo",tipo:"",de:"",para:""}]},i={tipo:"href",comentario:"",xpath:"//tr[not(ancestor::thead)]//a"},c={posclick:"",comentario:"",xpath:"",processadores:[{nome:"",tipo:"",de:"",para:""},{nome:"",tipo:"",de:"",para:""}]},r={tipo:"",comentario:"",parametro:"?page=2",rota_principal:"https://jobs.jobconvo.com/pt-br/careers/ppc-auditores-independentes/f886f1cd-be64-46f8-b7cd-724e14847e49/",script:""},n={posclick:"",comentario:"",xpath:"",processadores:[{nome:"",tipo:"",de:"",para:""},{nome:"",tipo:"",de:"",para:""}]},d={posclick:"",comentario:"",xpath:"",processadores:[{nome:"",tipo:"",de:"",para:""},{nome:"",tipo:"",de:"",para:""}]},l={posclick:"",comentario:"",xpath:"",processadores:[{nome:"",tipo:"",de:"",para:""},{nome:"",tipo:"",de:"",para:""}]},m={root:o,titulo:a,descricao:t,cidade:e,estado:s,tipo:p,url_detalhe:i,salario:c,paginacao:r,total_vagas:n,total_vagas_site:d,total_anuncios_site:l};export{e as cidade,m as default,t as descricao,s as estado,r as paginacao,o as root,c as salario,p as tipo,a as titulo,l as total_anuncios_site,n as total_vagas,d as total_vagas_site,i as url_detalhe};
