const o={comentario:"",xpath:"//*[@id='wrapper_listing']/li"},a={posclick:"",comentario:"",xpath:"//*[@class='item-info']",processadores:[{nome:"",tipo:"RegexReplace",de:"^(?:(?!Nome da Empresa)[\\s\\S])*$",para:""},{nome:"",tipo:"RegexReplace",de:"Nome da Empresa.+",para:""},{nome:"padraoTitulo",tipo:"",de:"",para:""}]},e={posclick:!0,comentario:"",xpath:"//h3[contains(text( ),'Descrição')]/following-sibling::p[1]",processadores:[{nome:"padraoDescricao",tipo:"",de:"",para:""}]},t={posclick:"",comentario:"",xpath:"//*[@class='company-address']",processadores:[{nome:"",tipo:"SplitFirst",de:",",para:""},{nome:"",tipo:"RegexReplace",de:"Brazil",para:"Cidade da Empresa"},{nome:"",tipo:"",de:"",para:""}]},p={posclick:"",comentario:"",xpath:"//*[@class='company-address']",processadores:[{nome:"",tipo:"RegexMatch",de:",.+",para:""},{nome:"",tipo:"Replace",de:",",para:""}]},s={posclick:"",comentario:"",xpath:"",processadores:[{nome:"",tipo:"",de:"",para:""}]},i={tipo:"href",comentario:"",xpath:"//*[@class='item-info']//a"},c={posclick:"",comentario:"",xpath:"",processadores:[{nome:"",tipo:"",de:"",para:""},{nome:"",tipo:"",de:"",para:""}]},r={tipo:"",comentario:"",parametro:"",rota_principal:"",script:""},n={posclick:"",comentario:"",xpath:"",processadores:[{nome:"",tipo:"",de:"",para:""},{nome:"",tipo:"",de:"",para:""}]},d={posclick:"",comentario:"",xpath:"",processadores:[{nome:"",tipo:"",de:"",para:""},{nome:"",tipo:"",de:"",para:""}]},l={posclick:"",comentario:"",xpath:"",processadores:[{nome:"",tipo:"",de:"",para:""},{nome:"",tipo:"",de:"",para:""}]},m={root:o,titulo:a,descricao:e,cidade:t,estado:p,tipo:s,url_detalhe:i,salario:c,paginacao:r,total_vagas:n,total_vagas_site:d,total_anuncios_site:l};export{t as cidade,m as default,e as descricao,p as estado,r as paginacao,o as root,c as salario,s as tipo,a as titulo,l as total_anuncios_site,n as total_vagas,d as total_vagas_site,i as url_detalhe};