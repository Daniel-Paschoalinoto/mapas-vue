const a={comentario:"",xpath:"//article[@data-department and contains(@class, 'department-list')]//a"},o={posclick:"",comentario:"",xpath:"//article[@data-department and contains(@class, 'department-list')]//span[1]",processadores:[{nome:"padraoTitulo",tipo:"",de:"",para:""}]},t={posclick:!0,comentario:"",xpath:"//*[@class='markdown-body']",processadores:[{nome:"padraoDescricao",tipo:"",de:"",para:""}]},e={posclick:"",comentario:"",xpath:"//article[@data-department and contains(@class, 'department-list')]//span[2]",processadores:[{nome:"",tipo:"SplitFirst",de:",",para:""},{nome:"",tipo:"",de:"",para:""},{nome:"",tipo:"",de:"",para:""}]},s={posclick:"",comentario:"",xpath:"//article[@data-department and contains(@class, 'department-list')]//span[2]",processadores:[{nome:"",tipo:"RegexMatch",de:",.+",para:""},{nome:"",tipo:"Replace",de:",",para:""}]},p={posclick:"",comentario:"",xpath:"",processadores:[{nome:"",tipo:"",de:"",para:""}]},c={tipo:"href",comentario:"",xpath:"//article[@data-department and contains(@class, 'department-list')]//a"},i={posclick:"",comentario:"",xpath:"",processadores:[{nome:"",tipo:"",de:"",para:""},{nome:"",tipo:"",de:"",para:""}]},r={tipo:"",comentario:"Empresa não utiliza paginação.",parametro:"",rota_principal:"",script:""},n={posclick:"",comentario:"",xpath:"",processadores:[{nome:"",tipo:"",de:"",para:""},{nome:"",tipo:"",de:"",para:""}]},d={posclick:"",comentario:"",xpath:"",processadores:[{nome:"",tipo:"",de:"",para:""},{nome:"",tipo:"",de:"",para:""}]},l={posclick:"",comentario:"",xpath:"",processadores:[{nome:"",tipo:"",de:"",para:""},{nome:"",tipo:"",de:"",para:""}]},m={root:a,titulo:o,descricao:t,cidade:e,estado:s,tipo:p,url_detalhe:c,salario:i,paginacao:r,total_vagas:n,total_vagas_site:d,total_anuncios_site:l};export{e as cidade,m as default,t as descricao,s as estado,r as paginacao,a as root,i as salario,p as tipo,o as titulo,l as total_anuncios_site,n as total_vagas,d as total_vagas_site,c as url_detalhe};