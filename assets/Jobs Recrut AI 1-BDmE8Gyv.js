const o={comentario:"",xpath:"//*[@id='jobs']//tr"},a={posclick:"",comentario:"",xpath:"//*[@id='jobs']//a/text( )",processadores:[{nome:"padraoTitulo",tipo:"",de:"",para:""}]},t={posclick:!0,comentario:"",xpath:"//form[@action='/job-apply/']/following-sibling::div[1]",processadores:[{nome:"padraoDescricao",tipo:"",de:"",para:""}]},e={posclick:!0,comentario:"",xpath:"(//*[@class='zmdi zmdi-pin']/following-sibling::text( ))[1]",processadores:[{nome:"",tipo:"SplitFirst",de:"-",para:""},{nome:"",tipo:"",de:"",para:""},{nome:"",tipo:"",de:"",para:""}]},i={posclick:!0,comentario:"",xpath:"(//*[@class='zmdi zmdi-pin']/following-sibling::text( ))[1]",processadores:[{nome:"",tipo:"RegexMatch",de:"-.+",para:""},{nome:"",tipo:"Replace",de:"-",para:""}]},p={posclick:"",comentario:"",xpath:"//*[@id='jobs']//b",processadores:[{nome:"padraoTipo",tipo:"",de:"",para:""}]},s={tipo:"href",comentario:"",xpath:"//*[@id='jobs']//a"},r={posclick:"",comentario:"",xpath:"",processadores:[{nome:"",tipo:"",de:"",para:""},{nome:"",tipo:"",de:"",para:""}]},c={tipo:"",comentario:"Empresa não utiliza paginação",parametro:"",rota_principal:"",script:""},n={posclick:"",comentario:"",xpath:"",processadores:[{nome:"",tipo:"",de:"",para:""},{nome:"",tipo:"",de:"",para:""}]},d={posclick:"",comentario:"",xpath:"",processadores:[{nome:"",tipo:"",de:"",para:""},{nome:"",tipo:"",de:"",para:""}]},l={posclick:"",comentario:"",xpath:"",processadores:[{nome:"",tipo:"",de:"",para:""},{nome:"",tipo:"",de:"",para:""}]},m={root:o,titulo:a,descricao:t,cidade:e,estado:i,tipo:p,url_detalhe:s,salario:r,paginacao:c,total_vagas:n,total_vagas_site:d,total_anuncios_site:l};export{e as cidade,m as default,t as descricao,i as estado,c as paginacao,o as root,r as salario,p as tipo,a as titulo,l as total_anuncios_site,n as total_vagas,d as total_vagas_site,s as url_detalhe};
